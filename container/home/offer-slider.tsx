"use client";
import { useCallback } from "react";
import OfferCard from "./offer-card";
import { offerData } from "@/constants";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OfferSlider() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="w-full padding-x pb-10">
			<div className="w-full flex items-center justify-center">
				<div className="w-[70%] relative group">
					<div>
						<button
							title="Previous slide"
							className="absolute top-1/2 -left-12 group-hover:-left-6 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
							onClick={scrollPrev}>
							<ChevronLeft
								size={24}
								className="text-gray-700"
							/>
						</button>
						<button
							title="Next slide"
							className="absolute top-1/2 -right-12 group-hover:-right-6 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
							onClick={scrollNext}>
							<ChevronRight
								size={24}
								className="text-gray-700"
							/>
						</button>
					</div>
					<div
						className="overflow-hidden"
						ref={emblaRef}>
						<div className="flex -ml-4">
							{offerData.map((offer, index) => (
								<div
									key={index}
									className="flex-[0_0_33.333%] min-w-0 pl-4">
									<OfferCard offer={offer} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
