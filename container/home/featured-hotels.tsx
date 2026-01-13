"use client";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { featuredHotelsData } from "@/constants";

export default function FeaturedHotels() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="space-y-10">
					<h2 className="text-black heading font-bold mb-4 text-center">
						Featured Hotels
					</h2>
					<div className="w-full flex items-center gap-5">
						{featuredHotelsData.map((hotel, index) => (
							<div
								className="group flex flex-col"
								key={index}>
								<div className="relative w-full h-[400px] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 shadow-sm">
									<Image
										alt="Modern hotel exterior in Los Angeles"
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										src={hotel.image}
									/>
									<div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
										<MapPin size={20} />
										<span className="text-sm font-medium tracking-wide">
											{hotel.location}
										</span>
									</div>
								</div>
								<div className="mt-4 px-1">
									<h3 className="text-xl font-bold font-display text-gray-900 dark:text-white leading-tight">
										{hotel.name}
									</h3>
									<div className="flex items-center justify-between mt-2">
										<div className="flex items-baseline gap-1">
											<span className="text-lg font-bold text-[#0cbc87]">
												$ {hotel.price}
											</span>
											<span className="text-sm text-[#0cbc87] font-medium">
												/starting at
											</span>
										</div>
										<div className="flex items-center gap-1">
											<span className="font-bold text-gray-900 dark:text-white text-base">
												4.6
											</span>
											<Star
												size={20}
												className="text-yellow-400 text-lg"
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
