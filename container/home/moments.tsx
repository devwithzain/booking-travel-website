"use client";
import Image from "next/image";
import { momentsData } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Moments() {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
		},
		[Autoplay({ delay: 4000 })],
	);

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
					</div>
				</div>
			</div>
		</div>
	);
}
