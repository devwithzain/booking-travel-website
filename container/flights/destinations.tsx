"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { destinationsData } from "@/constants";

export default function Destinations() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[80%] flex flex-col gap-5">
					<div>
						<h2 className="text-black heading font-bold leading-tight text-center">
							Popular Destinations
						</h2>
					</div>
					<div className="w-full flex items-center gap-5">
						{destinationsData.map((destination, index) => (
							<div
								className="group flex flex-col"
								key={index}>
								<div className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 shadow-sm">
									<Image
										alt={destination.location}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										src={destination.image}
									/>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<div className="flex items-center justify-between mt-2">
										<h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
											{destination.location}
										</h3>
										<div className="flex items-center gap-1">
											<span className="font-bold text-gray-900 dark:text-white text-base">
												{destination.ratings}
											</span>
											<Star
												size={20}
												className="text-yellow-400 text-lg"
											/>
										</div>
									</div>
									<span className="text-sm font-normal leading-tight text-[#666666]">
										{destination.next}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
