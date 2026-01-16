"use client";
import { useCallback } from "react";
import OfferCard from "./offer-card";
import { momentsData } from "@/constants";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Moments() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="w-full padding-y p-5">
			<div className="w-full flex items-center justify-center flex-col gap-14">
				<div>
					<h2 className="heading leading-tight text-black font-bold">
						Our Hotel Precious Moments
					</h2>
				</div>
				<div
					className="overflow-hidden"
					ref={emblaRef}>
					<div className="flex items-end gap-2">
						{momentsData.map((moment, index) => (
							<div
								key={index}
								className="flex-[0_0_25%]">
								<Image
									src={moment.image}
									alt={moment.id.toString()}
									width={800}
									height={800}
									className="w-full h-full object-cover rounded-xl"
								/>
							</div>
						))}
						<div className="w-full absolute top-1/2 -translate-y-1/2 z-20">
							<button
								title="Previous testimonial"
								className="absolute -left-16 group-hover:-left-8 p-2 rounded-full bg-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white border-2 border-black"
								onClick={scrollPrev}>
								<ChevronLeft size={24} />
							</button>
							<button
								title="Next testimonial"
								className="absolute -right-16 group-hover:-right-8 p-2 rounded-full bg-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white border-2 border-black"
								onClick={scrollNext}>
								<ChevronRight size={24} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
