"use client";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { brandData } from "@/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Brands() {
	const marqueeRef = useRef<HTMLDivElement>(null);
	const tweenRef = useRef<gsap.core.Tween | null>(null);

	useGSAP(
		() => {
			tweenRef.current = gsap.to(marqueeRef.current, {
				xPercent: -50,
				repeat: -1,
				duration: 20,
				ease: "none",
			});

			ScrollTrigger.create({
				onUpdate: (self) => {
					if (tweenRef.current) {
						const direction = self.direction;
						gsap.to(tweenRef.current, {
							timeScale: direction,
							duration: 0.5,
							overwrite: true,
						});
					}
				},
			});
		},
		{ scope: marqueeRef },
	);

	const logos = brandData.map((item, idx) => (
		<div
			key={idx}
			className="shrink-0 px-10">
			<Image
				src={item.image}
				alt="clients-images"
				width={200}
				height={200}
				className="grayscale hover:grayscale-0 transition-all duration-300"
			/>
		</div>
	));

	return (
		<div className="w-full padding-x padding-y overflow-hidden">
			<div
				ref={marqueeRef}
				className="flex w-max items-center"
				onMouseEnter={() => tweenRef.current?.pause()}
				onMouseLeave={() => tweenRef.current?.play()}>
				{logos}
				{logos}
				{logos}
			</div>
		</div>
	);
}
