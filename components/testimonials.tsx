"use client";
import Image from "next/image";
import { useCallback } from "react";
import { dotsbubbles } from "@/public";
import { testimonialsData } from "@/constants";
import useEmblaCarousel from "embla-carousel-react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className="relative w-full padding-x padding-y">
			<div ref={emblaRef}>
				<div className="flex">
					{testimonialsData.map((item) => (
						<div
							className="flex-[0_0_100%] min-w-0 flex items-center justify-center"
							key={item.id}>
							<div className="w-[65%] relative flex items-center justify-between gap-12 group">
								<div className="w-1/2 relative">
									<div className="absolute -top-4 -left-4 z-10 bg-orange-500 p-3 rounded-lg shadow-lg">
										<Image
											src={item.badge}
											alt="badge"
											width={20}
											height={20}
											className="w-10 h-10 object-cover"
										/>
									</div>
									<div className="absolute -bottom-12 right-8">
										<Image
											src={dotsbubbles}
											alt="dotsbubbles"
											width={1600}
											height={1600}
											className="w-full h-full object-cover"
										/>
									</div>
									<Image
										src={item.image}
										alt={item.name}
										width={450}
										height={500}
										className="rounded-2xl relative z-0"
									/>
								</div>
								<div className="w-1/2 ">
									<div className="text-primary text-6xl font-bold leading-none">
										“
									</div>
									<p className="text-lg font-light text-gray-700 leading-relaxed">
										{item.text}
									</p>
									<div className="flex items-center gap-1 text-yellow-400 mt-4">
										<Star fill="currentColor" />
										<Star fill="currentColor" />
										<Star fill="currentColor" />
										<Star fill="currentColor" />
										<StarHalf fill="currentColor" />
									</div>
									<div className="mt-4">
										<h6 className="font-semibold text-gray-900">{item.name}</h6>
										<span className="text-sm text-gray-500">{item.role}</span>
									</div>
								</div>
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
					))}
				</div>
			</div>
		</div>
	);
}
