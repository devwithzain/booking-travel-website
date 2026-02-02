"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { contactbg } from "@/public";

export default function Form() {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const formRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.from(imageRef.current, {
				x: -50,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			});
			gsap.from(formRef.current, {
				x: 50,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				delay: 0.2,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			className="w-full padding-x padding-y"
			ref={containerRef}>
			<div className="w-full flex justify-center">
				<div className="w-[80%] flex justify-between gap-20">
					<div
						className="w-1/2"
						ref={imageRef}>
						<Image
							src={contactbg}
							alt="Contact Illustration"
							fill
							className="w-full h-full object-contain"
							priority
						/>
					</div>
					<div
						className="w-1/2 bg-[#f5f5f6] p-8 md:p-12 rounded-[20px] shadow-sm relative z-10"
						ref={formRef}>
						<h2 className="text-4xl font-bold text-black mb-8">
							Send Us Message
						</h2>
						<form className="relative space-y-6">
							<div className="w-full flex items-center gap-6">
								<div className="w-full flex flex-col gap-2">
									<label
										htmlFor="name"
										className="text-base font-normal text-[#85878a] leading-tight">
										Your name*
									</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-2 rounded-md border border-[#c5c5c7] focus:outline-none focus:ring-1 focus:ring-[#4539b8] transition-all bg-white"
										required
									/>
								</div>
								<div className="w-full flex flex-col gap-2">
									<label
										htmlFor="email"
										className="text-base font-normal text-[#85878a] leading-tight">
										Email address*
									</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-2 rounded-md border border-[#c5c5c7] focus:outline-none focus:ring-1 focus:ring-[#4539b8] transition-all bg-white"
										required
									/>
								</div>
							</div>
							<div className="w-full flex flex-col gap-2">
								<label
									htmlFor="mobile"
									className="text-base font-normal text-[#85878a] leading-tight">
									Mobile number*
								</label>
								<input
									type="tel"
									id="mobile"
									className="w-full px-4 py-2 rounded-md border border-[#c5c5c7] focus:outline-none focus:ring-1 focus:ring-[#4539b8] transition-all bg-white"
									required
								/>
							</div>
							<div className="w-full flex flex-col gap-2">
								<label
									htmlFor="message"
									className="text-base font-normal text-[#85878a] leading-tight">
									Message*
								</label>
								<textarea
									rows={4}
									id="message"
									className="w-full px-4 py-2 rounded-md border border-[#c5c5c7] focus:outline-none focus:ring-1 focus:ring-[#4539b8] transition-all bg-white resize-none"
									required
								/>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									id="terms"
									className="bg-[#c5c5c7] w-4 h-4 rounded-md text-blue-100 focus:ring-[#4539b8] cursor-pointer border border-black"
									required
								/>
								<label
									htmlFor="terms"
									className="text-base font-normal text-[#85878a] leading-tight cursor-pointer">
									By submitting this form you agree to our terms and conditions.
								</label>
							</div>
							<button
								type="submit"
								className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
								Send Message
							</button>
							<div className="absolute -bottom-16 -right-16">
								<svg
									className="fill-[#fd7e14]"
									width="104.2px"
									height="95.2px">
									<circle
										cx="2.6"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="2.6"
										cy="2.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="22.4"
										cy="2.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="42.2"
										cy="2.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="62"
										cy="2.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="81.8"
										cy="2.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="92.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="77.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="62.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="47.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="32.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="17.6"
										r="2.6"></circle>
									<circle
										cx="101.7"
										cy="2.6"
										r="2.6"></circle>
								</svg>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="w-full pt-20">
				<iframe
					className="w-full h-[500px] rounded-lg"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
					aria-hidden="false"
					loading="lazy"
					tabIndex={0}
					style={{ border: "0px" }}
				/>
			</div>
		</section>
	);
}
