"use client";
import {
	MapPin,
	Star,
	Wifi,
	ChevronDown,
	ArrowUpDown,
	Loader2,
	Building2,
	XCircle,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { THotel } from "@/types";
import { Button } from "@/components/ui/button";
import { searchHotels } from "@/lib/booking-api";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function HotelResultCard({
	hotel,
	checkin,
	checkout,
	adults,
	rooms,
}: {
	hotel: THotel;
	checkin: string;
	checkout: string;
	adults: string;
	rooms: string;
}) {
	const p = hotel.property;
	const price = p.priceBreakdown?.grossPrice?.value;
	const currency = p.priceBreakdown?.grossPrice?.currency || "USD";
	const photo = p.photoUrls?.[0];
	const stars = p.accuratePropertyClass || 0;

	const detailParams = new URLSearchParams({
		checkin,
		checkout,
		adults,
		rooms,
	});

	return (
		<Link
			href={`/hotels/${hotel.hotel_id}?${detailParams}`}
			className="group flex gap-5 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow p-0">
			<div className="relative w-[260px] h-[200px] shrink-0 bg-gray-100">
				{photo ? (
					<Image
						src={photo}
						alt={p.name}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
						unoptimized
					/>
				) : (
					<div className="w-full h-full bg-gray-200 flex items-center justify-center">
						<Building2 className="w-8 h-8 text-gray-400" />
					</div>
				)}
				{p.freeCancellation && (
					<span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
						Free Cancel
					</span>
				)}
			</div>
			<div className="flex flex-1 flex-col justify-between py-4 pr-5">
				<div>
					{stars > 0 && (
						<div className="flex items-center gap-0.5 mb-1">
							{Array.from({ length: stars }).map((_, i) => (
								<Star
									key={i}
									size={12}
									className="fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
					)}
					<h3 className="text-lg font-bold text-gray-900 group-hover:text-[#5143d9] transition-colors line-clamp-1">
						{p.name}
					</h3>
					<div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
						<MapPin size={14} />
						<span>{p.countryCode?.toUpperCase()}</span>
					</div>
					<div className="flex items-center gap-2 mt-3">
						<div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
							<Wifi size={12} /> Free WiFi
						</div>
						{p.freeCancellation && (
							<div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
								✓ Free cancellation
							</div>
						)}
					</div>
				</div>
				<div className="flex items-end justify-between mt-4">
					<div className="flex items-center gap-2">
						{p.reviewScore > 0 && (
							<>
								<div className="bg-[#5143d9] text-white text-sm font-bold px-2 py-0.5 rounded">
									{p.reviewScore.toFixed(1)}
								</div>
								<div>
									<p className="text-sm font-medium text-gray-700">
										{p.reviewScoreWord}
									</p>
									{p.reviewCount > 0 && (
										<p className="text-xs text-gray-400">
											{p.reviewCount.toLocaleString()} reviews
										</p>
									)}
								</div>
							</>
						)}
					</div>
					<div className="text-right">
						{p.priceBreakdown?.strikethroughPrice && (
							<p className="text-sm text-gray-400 line-through">
								{currency}{" "}
								{Math.round(p.priceBreakdown.strikethroughPrice.value)}
							</p>
						)}
						<p className="text-2xl font-bold text-gray-900">
							{currency} {price ? Math.round(price) : "N/A"}
						</p>
						<p className="text-xs text-gray-400">per night</p>
						<Button
							size="sm"
							className="mt-2 bg-[#5143d9] hover:bg-[#4035b0] text-white text-xs px-4">
							See rooms →
						</Button>
					</div>
				</div>
			</div>
		</Link>
	);
}

function HotelsContent() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const dest_id = searchParams.get("dest_id") || "";
	const dest_type = searchParams.get("dest_type") || "CITY";
	const dest_label = searchParams.get("dest_label") || "Hotels";
	const checkin = searchParams.get("checkin") || "";
	const checkout = searchParams.get("checkout") || "";
	const adults = searchParams.get("adults") || "2";
	const children = searchParams.get("children") || "0";
	const rooms = searchParams.get("rooms") || "1";

	const [hotels, setHotels] = useState<THotel[]>([]);
	const [loading, setLoading] = useState(true);
	const [sortBy, setSortBy] = useState("popularity");
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [totalCount, setTotalCount] = useState(0);

	const [filters, setFilters] = useState({
		freeCancel: false,
		breakfast: false,
		stars5: false,
		stars4: false,
	});

	const buildCategoryFilter = () => {
		const cats = [];
		if (filters.freeCancel) cats.push("free_cancellation");
		if (filters.breakfast) cats.push("breakfast_included");
		if (filters.stars5) cats.push("class::5");
		if (filters.stars4) cats.push("class::4");
		return cats.join(",");
	};

	const fetchHotels = async (pageNum = 1, replace = true) => {
		if (!dest_id) return;
		setLoading(true);
		try {
			const { hotels: data, totalCount: total } = await searchHotels({
				dest_id,
				search_type: dest_type,
				arrival_date: checkin,
				departure_date: checkout,
				adults: parseInt(adults),
				children_age: children !== "0" ? children : undefined,
				room_qty: parseInt(rooms),
				page_number: pageNum,
				currency_code: "USD",
				sort_by: sortBy,
				categories_filter: buildCategoryFilter() || undefined,
			});

			setTotalCount(total);
			setHasMore(data.length === 20);

			if (replace) {
				setHotels(data);
			} else {
				setHotels((prev) => [...prev, ...data]);
			}
		} catch (err) {
			console.error("Hotels search error:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		setPage(1);
		fetchHotels(1, true);
	}, [dest_id, checkin, checkout, adults, rooms, sortBy, filters]);

	const loadMore = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		fetchHotels(nextPage, false);
	};

	const toggleFilter = (key: keyof typeof filters) => {
		setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const activeFilterCount = Object.values(filters).filter(Boolean).length;

	return (
		<div className="min-h-screen bg-[#f8f9fa]">
			<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Hotels in <span className="text-[#5143d9]">{dest_label}</span>
							</h1>
							{totalCount > 0 && (
								<p className="text-sm text-gray-500 mt-0.5">
									{totalCount.toLocaleString()} properties found
									{checkin && checkout && ` · ${checkin} → ${checkout}`}
									{` · ${adults} adult${parseInt(adults) > 1 ? "s" : ""} · ${rooms} room${parseInt(rooms) > 1 ? "s" : ""}`}
								</p>
							)}
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() => router.back()}
							className="text-sm">
							← Modify Search
						</Button>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-6 py-6">
				<div className="flex items-center gap-3 mb-6 flex-wrap">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="gap-2">
								<ArrowUpDown size={14} />
								Sort:{" "}
								{sortBy === "popularity"
									? "Popular"
									: sortBy === "price"
										? "Price ↑"
										: sortBy === "review_score"
											? "Rating"
											: "Recommended"}
								<ChevronDown size={14} />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{[
								{ value: "popularity", label: "Most Popular" },
								{ value: "price", label: "Price (Low to High)" },
								{ value: "review_score", label: "Best Rated" },
								{ value: "upsort_bh", label: "Recommended" },
							].map((opt) => (
								<DropdownMenuItem
									key={opt.value}
									onClick={() => setSortBy(opt.value)}
									className={sortBy === opt.value ? "font-semibold" : ""}>
									{opt.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<div className="flex items-center gap-2 flex-wrap">
						{[
							{ key: "freeCancel" as const, label: "Free Cancellation" },
							{ key: "breakfast" as const, label: "Breakfast Included" },
							{ key: "stars5" as const, label: "5 Star" },
							{ key: "stars4" as const, label: "4 Star" },
						].map((f) => (
							<button
								key={f.key}
								onClick={() => toggleFilter(f.key)}
								className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-all ${
									filters[f.key]
										? "bg-[#5143d9] text-white border-[#5143d9]"
										: "bg-white text-gray-600 border-gray-200 hover:border-[#5143d9]"
								}`}>
								{filters[f.key] && <XCircle size={12} />}
								{f.label}
							</button>
						))}
						{activeFilterCount > 0 && (
							<button
								onClick={() =>
									setFilters({
										freeCancel: false,
										breakfast: false,
										stars5: false,
										stars4: false,
									})
								}
								className="text-xs text-red-500 hover:underline">
								Clear all ({activeFilterCount})
							</button>
						)}
					</div>
				</div>
				{loading && hotels.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-20 gap-4">
						<Loader2 className="w-8 h-8 animate-spin text-[#5143d9]" />
						<p className="text-gray-500">Searching hotels...</p>
					</div>
				) : hotels.length === 0 ? (
					<div className="text-center py-20">
						<Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
						<h3 className="text-lg font-semibold text-gray-700">
							No hotels found
						</h3>
						<p className="text-gray-400 mt-1">
							Try changing your dates or filters
						</p>
					</div>
				) : (
					<div className="space-y-4">
						{hotels.map((hotel) => (
							<HotelResultCard
								key={hotel.hotel_id}
								hotel={hotel}
								checkin={checkin}
								checkout={checkout}
								adults={adults}
								rooms={rooms}
							/>
						))}
						{hasMore && (
							<div className="flex justify-center pt-4">
								<Button
									onClick={loadMore}
									disabled={loading}
									variant="outline"
									className="px-8">
									{loading ? (
										<>
											<Loader2 className="w-4 h-4 animate-spin mr-2" />
											Loading...
										</>
									) : (
										"Load more hotels"
									)}
								</Button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default function HotelsPage() {
	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center min-h-screen">
					<Loader2 className="w-8 h-8 animate-spin text-[#5143d9]" />
				</div>
			}>
			<HotelsContent />
		</Suspense>
	);
}
