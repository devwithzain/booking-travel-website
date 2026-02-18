"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { THotel, THotelCardProps } from "@/types";
import { searchHotels, getDefaultDates } from "@/lib/booking-api";
import { MapPin, Star, Wifi, Coffee, Car, Dumbbell } from "lucide-react";

function HotelCard({
	hotel,
	checkin,
	checkout,
	adults,
	rooms,
}: THotelCardProps) {
	const p = hotel.property;
	const photo = p.photoUrls?.[0];
	const stars = p.accuratePropertyClass || 0;
	const price = p.priceBreakdown?.grossPrice?.value;
	const currency = p.priceBreakdown?.grossPrice?.currency || "USD";

	const detailParams = new URLSearchParams({
		checkin,
		checkout,
		adults: String(adults),
		rooms: String(rooms),
	});

	return (
		<Link
			href={`/hotels/${hotel.hotel_id}?${detailParams}`}
			className="group flex flex-col cursor-pointer">
			<div className="w-full relative overflow-hidden rounded-xl bg-gray-200 shadow-sm">
				{photo ? (
					<Image
						alt={p.name}
						src={photo}
						width={800}
						height={400}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						unoptimized
					/>
				) : (
					<div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
						<span className="text-gray-400 text-sm">No photo</span>
					</div>
				)}
				<div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
					<MapPin size={14} />
					<span className="text-xs font-medium">
						{p.countryCode?.toUpperCase()}
					</span>
				</div>
				{p.freeCancellation && (
					<div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
						Free Cancel
					</div>
				)}
				{stars > 0 && (
					<div className="absolute top-4 left-4 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-0.5">
						{Array.from({ length: stars }).map((_, i) => (
							<Star
								key={i}
								size={15}
								className="text-yellow-400 fill-yellow-400"
							/>
						))}
					</div>
				)}
			</div>
			<div className="flex flex-col gap-1 mt-3">
				<h3 className="text-xl font-bold text-gray-900 leading-tight truncate group-hover:text-[#5143d9] transition-colors">
					{p.name}
				</h3>
				{p.reviewScore > 0 ? (
					<div className="flex items-center gap-2">
						<div className="bg-[#5143d9] text-white text-xs font-bold px-2 py-0.5 rounded">
							{p.reviewScore.toFixed(1)}
						</div>
						<span className="text-sm text-gray-600">{p.reviewScoreWord}</span>
						{p.reviewCount > 0 && (
							<span className="text-xs text-gray-400">
								({p.reviewCount.toLocaleString()} reviews)
							</span>
						)}
					</div>
				) : (
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-600">No reviews</span>
					</div>
				)}
				<div className="flex items-center justify-between">
					<div className="flex items-baseline gap-1">
						{p.priceBreakdown?.strikethroughPrice && (
							<span className="text-sm text-gray-400 line-through">
								{currency}{" "}
								{Math.round(p.priceBreakdown.strikethroughPrice.value)}
							</span>
						)}
						<span className="text-lg font-bold text-[#0cbc87]">
							{currency} {price ? Math.round(price) : "N/A"}
						</span>
						<span className="text-sm text-[#0cbc87] font-medium">/night</span>
					</div>
					<div className="flex items-center gap-1">
						<Star
							size={16}
							className="text-yellow-400 fill-yellow-400"
						/>
						<span className="font-bold text-gray-900 text-sm">
							{p.reviewScore > 0 ? (p.reviewScore / 2).toFixed(1) : "New"}
						</span>
					</div>
				</div>
				<div className="flex items-center gap-3">
					{[Wifi, Coffee, Car, Dumbbell].map((Icon, i) => (
						<Icon
							key={i}
							size={14}
							className="text-gray-300"
						/>
					))}
				</div>
			</div>
		</Link>
	);
}

export default function FeaturedHotels() {
	const { checkin, checkout } = getDefaultDates();
	const [hotels, setHotels] = useState<THotel[]>([]);

	useEffect(() => {
		const fetchFeaturedHotels = async () => {
			try {
				const { hotels: data } = await searchHotels({
					dest_id: "-782831",
					search_type: "CITY",
					arrival_date: checkin,
					departure_date: checkout,
					adults: 2,
					room_qty: 1,
					currency_code: "USD",
					sort_by: "popularity",
				});
				setHotels(data.slice(0, 4));
			} catch (err) {
				console.error("FeaturedHotels fetch error:", err);
			}
		};

		fetchFeaturedHotels();
	}, [checkin, checkout]);

	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[80%] flex flex-col gap-10 items-center">
					<div className="flex items-end justify-between">
						<h2 className="text-black heading font-bold text-center">
							Featured Hotels
						</h2>
					</div>
					{hotels.length > 0 ? (
						<div className="w-full grid grid-cols-4 gap-5">
							{hotels.map((hotel) => (
								<HotelCard
									key={hotel.hotel_id}
									hotel={hotel}
									checkin={checkin}
									checkout={checkout}
									adults={2}
									rooms={1}
								/>
							))}
						</div>
					) : (
						<div className="text-center py-10 text-gray-400">
							<p>Unable to load hotels. Please check your API key.</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
