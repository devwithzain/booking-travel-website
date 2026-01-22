"use client";
import { useState } from "react";
import { faqData } from "@/constants";

export default function FAQSection() {
	const [activeId, setActiveId] = useState<number | null>(1);

	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[70%] flex flex-col gap-10">
					<h1 className="text-black heading font-bold leading-tight text-center">
						Frequently Asked Questions
					</h1>
					<div className="flex flex-col gap-4">
						{faqData.map((item) => {
							const isActive = activeId === item.id;
							return (
								<div
									key={item.id}
									className="rounded-xl bg-[#f7f7f7] overflow-hidden transition-all duration-300">
									<button
										onClick={() => setActiveId(isActive ? null : item.id)}
										className="w-full flex items-center justify-between px-6 py-4 text-left group">
										<span className="text-lg font-semibold text-black">
											{item.question}
										</span>
										<span
											className={`text-xl font-medium transition-transform duration-300 ${
												isActive ? "rotate-180" : ""
											}`}>
											{isActive ? "−" : "+"}
										</span>
									</button>
									<div
										className={`grid transition-all duration-300 ease-in-out ${
											isActive
												? "grid-rows-[1fr] opacity-100"
												: "grid-rows-[0fr] opacity-0"
										}`}>
										<div className="overflow-hidden">
											<p className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
												{item.answer}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
