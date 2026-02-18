"use client";
import {
	MapPin,
	Star,
	Heart,
	Share2,
	Wifi,
	Waves,
	Dumbbell,
	UtensilsCrossed,
	Car,
	ShieldCheck,
	Globe,
	CreditCard,
	ChevronDown,
	ChevronUp,
	Check,
	X,
	ExternalLink,
	ThumbsUp,
	BedDouble,
	Bath,
	Users,
	Sparkles,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { hotelDetailData } from "@/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FACILITY_ICONS: Record<string, React.ElementType> = {
	"Activities": Waves,
	"Services": Sparkles,
	"Payment Method": CreditCard,
	"Safety & Security": ShieldCheck,
};

const HIGHLIGHT_ICON_MAP: Record<string, React.ElementType> = {
	ac: Sparkles,
	wifi: Wifi,
	kitchen: UtensilsCrossed,
	tv: Globe,
	breakfast: UtensilsCrossed,
	pool: Waves,
	bathtub: Bath,
	gym: Dumbbell,
};

function Stars({ count, className }: { count: number; className?: string }) {
	return (
		<div className={cn("flex items-center gap-0.5", className)}>
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={i}
					size={14}
					className={
						i < count
							? "fill-yellow-400 text-yellow-400"
							: "fill-gray-200 text-gray-200"
					}
				/>
			))}
		</div>
	);
}

function ScoreBadge({
	score,
	word,
	size = "md",
}: {
	score: number;
	word: string;
	size?: "sm" | "md" | "lg";
}) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={cn(
					"bg-[#5143d9] text-white font-bold rounded-lg flex items-center justify-center",
					size === "sm" && "text-sm px-2 py-0.5",
					size === "md" && "text-lg px-3 py-1",
					size === "lg" && "text-2xl px-4 py-2",
				)}>
				{score.toFixed(1)}
			</div>
			<span
				className={cn(
					"font-semibold text-gray-700",
					size === "lg" && "text-lg",
				)}>
				{word}
			</span>
		</div>
	);
}

function PhotoGallery({ photos }: { photos: typeof hotelDetailData.photos }) {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className="w-full">
			<div className="grid grid-cols-4 grid-rows-2 gap-2 h-[420px] overflow-hidden">
				<div className="col-span-2 row-span-2 relative bg-gray-100 overflow-hidden rounded-2xl">
					<Image
						src={photos[0]?.url_max}
						alt="Hotel main photo"
						fill
						className="object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
						unoptimized
					/>
				</div>
				{photos.slice(1, 5).map((photo, idx) => (
					<div
						key={photo.photo_id}
						className="relative bg-gray-100 overflow-hidden rounded-2xl">
						<Image
							src={photo.url_max}
							alt={`Hotel photo ${idx + 2}`}
							fill
							className="object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
							unoptimized
						/>
						{idx === 3 && (
							<button
								onClick={() => setShowAll(true)}
								className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-sm hover:bg-black/60 transition-colors rounded-2xl cursor-pointer">
								View All
							</button>
						)}
					</div>
				))}
			</div>
			{showAll && (
				<div className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center p-8">
					<button
						onClick={() => setShowAll(false)}
						className="absolute top-4 right-4 text-white hover:text-gray-300">
						<X size={28} />
					</button>
					<div className="grid grid-cols-3 gap-3 max-w-4xl max-h-[80vh] overflow-y-auto">
						{photos.map((photo) => (
							<div
								key={photo.photo_id}
								className="relative h-56 rounded-xl overflow-hidden">
								<Image
									src={photo.url_max}
									alt="Hotel photo"
									fill
									className="w-full h-full object-cover"
									unoptimized
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

function RoomCard({ room }: { room: (typeof hotelDetailData.rooms)[0] }) {
	const { price_breakdown } = room;
	const discount = price_breakdown.strikethrough_price
		? Math.round(
				((price_breakdown.strikethrough_price - price_breakdown.gross_price) /
					price_breakdown.strikethrough_price) *
					100,
			)
		: 0;

	return (
		<div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
			<div className="flex gap-0">
				<div className="relative w-[220px] shrink-0 bg-gray-100">
					{room.photos[0] && (
						<Image
							src={room.photos[0].url_original}
							alt={room.room_name}
							fill
							className="object-cover"
							unoptimized
						/>
					)}
					{discount > 0 && (
						<div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
							−{discount}% OFF
						</div>
					)}
				</div>
				<div className="flex-1 p-5 flex flex-col justify-between">
					<div>
						<h4 className="text-lg font-bold text-gray-900 mb-2">
							{room.room_name}
						</h4>
						<div className="flex flex-wrap gap-2 mb-3">
							{room.highlights.map((h, i) => {
								const Icon = HIGHLIGHT_ICON_MAP[h.icon] || Check;
								return (
									<div
										key={i}
										className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
										<Icon
											size={11}
											className="text-[#5143d9]"
										/>
										{h.translated_name}
									</div>
								);
							})}
						</div>
						<div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
							<div className="flex items-center gap-1">
								<BedDouble size={14} />
								{room.bed_configurations[0]?.bed_types
									.map((b) => `${b.count} ${b.name}`)
									.join(", ")}
							</div>
							<div className="flex items-center gap-1">
								<Bath size={14} />
								{room.private_bathroom_count} Bathroom
							</div>
							<div className="flex items-center gap-1">
								<Users size={14} />
								{room.nr_adults} Guests
							</div>
						</div>
						{room.free_cancellation && (
							<p className="text-xs text-[#0cbc87] font-medium flex items-center gap-1">
								<Check size={12} />
								Free Cancellation
								{room.free_cancellation_until &&
									` till ${room.free_cancellation_until}`}
							</p>
						)}
						{room.breakfast_included && (
							<p className="text-xs text-orange-500 font-medium flex items-center gap-1 mt-1">
								<Check size={12} />
								Breakfast Included
							</p>
						)}
					</div>
					<div className="flex items-end justify-between mt-3">
						<button className="text-xs text-[#5143d9] underline underline-offset-2 font-medium">
							View room details
						</button>
						<div className="flex items-center gap-4">
							<div className="text-right">
								{price_breakdown.strikethrough_price && (
									<p className="text-sm text-gray-400 line-through">
										${price_breakdown.strikethrough_price}
									</p>
								)}
								<p className="text-xl font-bold text-gray-900">
									${price_breakdown.gross_price}
									<span className="text-sm font-normal text-gray-500 ml-1">
										/night
									</span>
								</p>
							</div>
							<a
								href={room.url}
								target="_blank"
								rel="noopener noreferrer">
								<Button className="bg-[#5143d9] hover:bg-[#4035b0] text-white px-5 text-sm flex items-center gap-1.5">
									Select Room
									<ExternalLink size={13} />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ReviewCard({
	review,
}: {
	review: (typeof hotelDetailData.reviews)[0];
}) {
	return (
		<div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
			<div className="flex items-start justify-between mb-3">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-full bg-[#5143d9]/10 flex items-center justify-center text-[#5143d9] font-bold text-lg">
						{review.reviewer.name.charAt(0)}
					</div>
					<div>
						<p className="font-semibold text-gray-900 text-sm">
							{review.reviewer.name}
						</p>
						<p className="text-xs text-gray-400">{review.date}</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="bg-[#5143d9] text-white text-sm font-bold px-2.5 py-1 rounded-lg">
						{review.average_score.toFixed(1)}
					</div>
					{review.reviewer.helpful_vote_count > 0 && (
						<div className="flex items-center gap-1 text-xs text-gray-400">
							<ThumbsUp size={12} />
							{review.reviewer.helpful_vote_count}
						</div>
					)}
				</div>
			</div>
			<div className="mb-2">
				<div className="flex items-start gap-2">
					<div className="w-5 h-5 rounded-full bg-[#0cbc87]/10 flex items-center justify-center shrink-0 mt-0.5">
						<Check
							size={11}
							className="text-[#0cbc87]"
						/>
					</div>
					<p className="text-sm text-gray-600 leading-relaxed">{review.pros}</p>
				</div>
			</div>
			{review.cons && (
				<div className="mb-3">
					<div className="flex items-start gap-2">
						<div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
							<X
								size={11}
								className="text-red-400"
							/>
						</div>
						<p className="text-sm text-gray-600 leading-relaxed">
							{review.cons}
						</p>
					</div>
				</div>
			)}
			{review.review_photos.length > 0 && (
				<div className="flex gap-2 mb-3">
					{review.review_photos.map((photo, i) => (
						<div
							key={i}
							className="relative w-20 h-16 rounded-lg overflow-hidden bg-gray-100">
							<Image
								src={photo.url_max300}
								alt="Review photo"
								fill
								className="object-cover"
								unoptimized
							/>
						</div>
					))}
				</div>
			)}
			{review.hotel_response && (
				<div className="bg-gray-50 rounded-xl p-3 border-l-3 border-[#5143d9] mt-2">
					<p className="text-xs font-semibold text-gray-700 mb-1">
						Management response:
					</p>
					<p className="text-xs text-gray-500 leading-relaxed">
						{review.hotel_response}
					</p>
				</div>
			)}
		</div>
	);
}

export default function HotelDetail() {
	const hotel = hotelDetailData;
	const [descExpanded, setDescExpanded] = useState(false);
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [activeRoomFilter, setActiveRoomFilter] = useState("All Rooms");
	const [visibleReviews, setVisibleReviews] = useState(2);

	const mapUrl = `https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}`;

	return (
		<div className="w-full min-h-screen mt-20">
			<div className="w-full pt-5 padding-x relative">
				<div className="flex items-center gap-3 flex-wrap">
					{[
						{ label: "Location", placeholder: "Select location" },
						{ label: "Check In - Out", placeholder: "Select date" },
						{ label: "Guests & Rooms", placeholder: "2 Adults 1 Room" },
					].map((field, i) => (
						<div
							key={i}
							className="flex-1 min-w-[160px] border border-gray-200 rounded-xl px-3 py-4 bg-white">
							<p className="text-[10px] text-gray-400 font-medium mb-0.5">
								{field.label}
							</p>
							<p className="text-sm text-gray-500">{field.placeholder}</p>
						</div>
					))}
					<Button className="absolute right-28 -bottom-5 bg-[#5143d9] hover:bg-[#4035b0] text-white px-6 rounded-xl">
						Search
					</Button>
				</div>
			</div>
			<div className="w-full padding-x padding-y">
				<div className="flex items-start justify-between mb-5">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 mb-2">
							{hotel.name}
						</h1>
						<div className="flex items-center gap-3 text-sm text-gray-500">
							<div className="flex items-center gap-1">
								<MapPin
									size={14}
									className="text-[#5143d9]"
								/>
								<span>{hotel.address}</span>
							</div>
							<a
								href={mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1 text-[#5143d9] hover:underline font-medium">
								<ExternalLink size={13} />
								View on Map
							</a>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<button
							onClick={() => setIsWishlisted(!isWishlisted)}
							className={cn(
								"w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all",
								isWishlisted
									? "border-red-400 bg-red-50"
									: "border-gray-200 bg-white hover:border-red-300",
							)}>
							<Heart
								size={18}
								className={
									isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
								}
							/>
						</button>
						<button className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:border-gray-300 transition-all">
							<Share2
								size={18}
								className="text-gray-400"
							/>
						</button>
					</div>
				</div>
				<div className="mb-8">
					<PhotoGallery photos={hotel.photos} />
				</div>
				<div className="grid grid-cols-3 gap-8">
					<div className="col-span-2 space-y-8">
						<div className="bg-white rounded-2xl padding-x py-8 shadow-sm border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								About This Hotel
							</h2>
							<div className="flex items-center gap-6 mb-6 p-4 bg-gray-50 rounded-xl">
								{[Wifi, Waves, Car, Dumbbell, UtensilsCrossed].map(
									(Icon, i) => (
										<div
											key={i}
											className="flex flex-col items-center gap-1.5">
											<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
												<Icon
													size={18}
													className="text-[#5143d9]"
												/>
											</div>
										</div>
									),
								)}
							</div>
							<div className="relative">
								<p
									className={cn(
										"text-gray-600 leading-relaxed text-sm",
										!descExpanded && "line-clamp-4",
									)}>
									{hotel.description}
								</p>
								<button
									onClick={() => setDescExpanded(!descExpanded)}
									className="flex items-center gap-1 text-[#5143d9] font-medium text-sm mt-2 hover:underline">
									{descExpanded ? (
										<>
											<ChevronUp size={14} /> Show less
										</>
									) : (
										<>
											<ChevronDown size={14} /> See more
										</>
									)}
								</button>
							</div>
							<div className="mt-6">
								<h4 className="font-semibold text-gray-800 mb-3">Advantages</h4>
								<ul className="space-y-2">
									{hotel.description_highlights.map((point, i) => (
										<li
											key={i}
											className="flex items-start gap-2 text-sm text-gray-600">
											<div className="w-5 h-5 rounded-full bg-[#0cbc87]/10 flex items-center justify-center shrink-0 mt-0.5">
												<Check
													size={11}
													className="text-[#0cbc87]"
												/>
											</div>
											{point}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="bg-white rounded-2xl padding-x py-8 shadow-sm border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Amenities
							</h2>
							<div className="grid grid-cols-2 gap-6">
								{hotel.facilities.map((group) => {
									const Icon =
										FACILITY_ICONS[group.facilitytype_name] || ShieldCheck;
									return (
										<div key={group.facilitytype_name}>
											<div className="flex items-center gap-2 mb-3">
												<Icon
													size={16}
													className="text-[#5143d9]"
												/>
												<h4 className="font-semibold text-gray-800 text-sm">
													{group.facilitytype_name}
												</h4>
											</div>
											<ul className="space-y-1.5">
												{group.facilities.map((f, i) => (
													<li
														key={i}
														className="flex items-center gap-2 text-sm text-gray-600">
														<div className="w-1.5 h-1.5 rounded-full bg-[#0cbc87]" />
														{f.name}
													</li>
												))}
											</ul>
										</div>
									);
								})}
								<div>
									<div className="flex items-center gap-2 mb-3">
										<Globe
											size={16}
											className="text-[#5143d9]"
										/>
										<h4 className="font-semibold text-gray-800 text-sm">
											Staff Language
										</h4>
									</div>
									<ul className="space-y-1.5">
										{hotel.languages.map((lang, i) => (
											<li
												key={i}
												className="flex items-center gap-2 text-sm text-gray-600">
												<div className="w-1.5 h-1.5 rounded-full bg-[#0cbc87]" />
												{lang}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-2xl padding-x py-8 shadow-sm border border-gray-100">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-2xl font-bold text-gray-900">
									Room Options
								</h2>
								<select
									value={activeRoomFilter}
									onChange={(e) => setActiveRoomFilter(e.target.value)}
									className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#5143d9]/20">
									<option>All Rooms</option>
									<option>With Breakfast</option>
									<option>Free Cancellation</option>
								</select>
							</div>
							<div className="space-y-4">
								{hotel.rooms
									.filter((r) => {
										if (activeRoomFilter === "With Breakfast")
											return r.breakfast_included;
										if (activeRoomFilter === "Free Cancellation")
											return r.free_cancellation;
										return true;
									})
									.map((room) => (
										<RoomCard
											key={room.room_id}
											room={room}
										/>
									))}
							</div>
						</div>
						<div className="bg-white rounded-2xl padding-x py-8 shadow-sm border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Customer Review
							</h2>
							<div className="flex gap-10 p-6 bg-gray-50 rounded-2xl mb-6">
								{/* Big score */}
								<div className="flex flex-col items-center justify-center">
									<div className="text-5xl font-bold text-gray-900 leading-none">
										{(hotel.review_scores.review_score / 2).toFixed(1)}
									</div>
									<Stars
										count={Math.round(hotel.review_scores.review_score / 2)}
										className="mt-2"
									/>
									<p className="text-xs text-gray-500 mt-1">
										Based on {hotel.review_scores.review_count} Reviews
									</p>
								</div>

								<Separator
									orientation="vertical"
									className="h-auto"
								/>
								<div className="flex-1 space-y-2">
									{Object.entries(hotel.review_scores.percentage_breakdown)
										.reverse()
										.map(([key, pct], i) => (
											<div
												key={key}
												className="flex items-center gap-3">
												<div className="flex items-center gap-0.5 w-20">
													{Array.from({ length: 5 - i }).map((_, si) => (
														<Star
															key={si}
															size={11}
															className="fill-yellow-400 text-yellow-400"
														/>
													))}
												</div>
												<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
													<div
														className="h-full bg-yellow-400 rounded-full transition-all duration-700"
														style={{ width: `${pct}%` }}
													/>
												</div>
												<span className="text-xs text-gray-500 w-8 text-right">
													{pct}%
												</span>
											</div>
										))}
								</div>
							</div>
							<div className="grid grid-cols-3 gap-4 mb-6">
								{Object.entries(hotel.review_scores.score_breakdown).map(
									([key, score]) => (
										<div
											key={key}
											className="text-center p-3 bg-gray-50 rounded-xl">
											<p className="text-xs text-gray-500 capitalize mb-1">
												{key.replace(/_/g, " ")}
											</p>
											<p className="text-lg font-bold text-[#5143d9]">
												{score.toFixed(1)}
											</p>
											<div className="w-full h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
												<div
													className="h-full bg-[#5143d9] rounded-full"
													style={{ width: `${(score / 10) * 100}%` }}
												/>
											</div>
										</div>
									),
								)}
							</div>
							<div className="space-y-4">
								{hotel.reviews.slice(0, visibleReviews).map((review) => (
									<ReviewCard
										key={review.review_id}
										review={review}
									/>
								))}
							</div>
							{visibleReviews < hotel.reviews.length && (
								<button
									onClick={() => setVisibleReviews((v) => v + 2)}
									className="w-full mt-4 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-[#5143d9] hover:text-[#5143d9] transition-colors">
									Load More
								</button>
							)}
						</div>
						<div className="bg-white rounded-2xl padding-x py-8 shadow-sm border border-gray-100">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								Hotel Policies
							</h2>
							<div className="space-y-3">
								{hotel.policies.map((policy, i) => (
									<div
										key={i}
										className="flex items-start gap-2 text-sm text-gray-600 pb-3 border-b border-gray-50 last:border-0">
										<div className="w-1.5 h-1.5 rounded-full bg-[#5143d9] mt-1.5 shrink-0" />
										{policy}
									</div>
								))}
							</div>
							<div className="mt-6 grid grid-cols-2 gap-4">
								<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
									<p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
										Check-in
									</p>
									<p className="text-sm text-gray-700">
										From{" "}
										<span className="font-bold text-gray-900">
											{hotel.checkin.from}
										</span>
									</p>
									<p className="text-sm text-gray-700">
										Until{" "}
										<span className="font-bold text-gray-900">
											{hotel.checkin.to}
										</span>
									</p>
								</div>
								<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
									<p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
										Check-out
									</p>
									<p className="text-sm text-gray-700">
										From{" "}
										<span className="font-bold text-gray-900">
											{hotel.checkout.from}
										</span>
									</p>
									<p className="text-sm text-gray-700">
										Until{" "}
										<span className="font-bold text-gray-900">
											{hotel.checkout.to}
										</span>
									</p>
								</div>
							</div>
							<div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl">
								<p className="text-xs text-red-600 font-medium leading-relaxed">
									During the COVID-19 pandemic, all hotel guests must make and
									follow Booking.com&apos;s social distancing and other
									COVID-19-related guidelines.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-1 space-y-5 sticky-sidebar">
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
							<p className="text-xs text-gray-400 font-medium mb-1">
								Price Start at
							</p>
							<div className="flex items-baseline gap-2 mb-1">
								<span className="text-3xl font-bold text-gray-900">
									${hotel.price_from.toLocaleString()}
								</span>
							</div>
							<p className="text-xs text-gray-400 mb-3">
								1 room per night · taxes & fees included
							</p>
							<div className="flex items-center gap-2 mb-4">
								<Stars count={hotel.star_rating} />
								<ScoreBadge
									score={hotel.review_scores.review_score}
									word={hotel.review_scores.review_score_word}
									size="sm"
								/>
							</div>
							<div className="flex items-center gap-2 mb-4 text-sm text-[#0cbc87] font-medium">
								<Check size={14} />
								Free breakfast available
							</div>
							<a
								href={hotel.rooms[0]?.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block">
								<Button className="w-full bg-[#5143d9] hover:bg-[#4035b0] text-white rounded-xl py-5 text-base font-semibold">
									View {hotel.rooms.length} Room Options
								</Button>
							</a>
						</div>
						<div className="bg-linear-to-br from-[#5143d9] to-[#7c3aed] rounded-2xl p-6 text-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
							<div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
							<p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-2">
								Today&apos;s Best Deal
							</p>
							<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
								<Sparkles
									size={22}
									className="text-white"
								/>
							</div>
							<h4 className="font-bold text-lg leading-tight mb-1">
								Travel Plan
							</h4>
							<p className="text-sm text-white/70 mb-4">
								Get up to $10,000 for your trip
							</p>
							<Button className="bg-white text-[#5143d9] hover:bg-white/90 text-sm font-bold w-full">
								Get Offer →
							</Button>
						</div>
						<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
							<a
								href={mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block">
								<div className="relative h-40 bg-gray-100">
									<Image
										src={`https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80`}
										alt="Map"
										fill
										className="object-cover opacity-80 hover:opacity-100 transition-opacity"
										unoptimized
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="bg-white rounded-full p-2 shadow-lg">
											<MapPin
												size={20}
												className="text-[#5143d9]"
											/>
										</div>
									</div>
								</div>
								<div className="p-4">
									<p className="text-sm font-semibold text-gray-900 mb-0.5">
										{hotel.city}
									</p>
									<p className="text-xs text-gray-400">{hotel.address}</p>
									<p className="text-xs text-[#5143d9] font-medium mt-1 flex items-center gap-1">
										<ExternalLink size={11} />
										View on Google Maps
									</p>
								</div>
							</a>
						</div>
						<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
							<ScoreBadge
								score={hotel.review_scores.review_score}
								word={hotel.review_scores.review_score_word}
								size="lg"
							/>
							<p className="text-xs text-gray-400 mt-2">
								Based on {hotel.review_scores.review_count} verified reviews
							</p>
							<Separator className="my-4" />
							<div className="space-y-2">
								{Object.entries(hotel.review_scores.score_breakdown).map(
									([key, score]) => (
										<div
											key={key}
											className="flex items-center justify-between text-sm">
											<span className="text-gray-500 capitalize">
												{key.replace(/_/g, " ")}
											</span>
											<div className="flex items-center gap-2">
												<div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
													<div
														className="h-full bg-[#5143d9] rounded-full"
														style={{ width: `${(score / 10) * 100}%` }}
													/>
												</div>
												<span className="font-semibold text-gray-800 w-7 text-right">
													{score.toFixed(1)}
												</span>
											</div>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
