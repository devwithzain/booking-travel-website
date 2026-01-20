"use client";
import {
	Send,
	MapPin,
	ArrowRight,
	ArrowRightLeft,
	Calendar as CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Combobox, DatePicker } from "@/components/index";

export default function FlightFilter() {
	const [activeTab, setActiveTab] = useState<"oneway" | "roundtrip">("oneway");

	return (
		<div className="w-full relative z-20">
			<div className="w-full bg-white rounded-3xl shadow-xl p-5">
				<div className="flex flex-row items-center justify-between gap-6 mb-5">
					<div className="flex items-center bg-[#DFDEE3] rounded-lg">
						<button
							onClick={() => setActiveTab("oneway")}
							className={cn(
								"px-4 py-2 rounded-l-md text-base font-semibold transition-all",
								activeTab === "oneway" ? "bg-black text-white shadow-sm" : "",
							)}>
							One Way
						</button>
						<button
							onClick={() => setActiveTab("roundtrip")}
							className={cn(
								"px-4 py-2 rounded-r-md text-base font-semibold transition-all",
								activeTab === "roundtrip"
									? "bg-black text-white shadow-sm"
									: "text-black",
							)}>
							Round Trip
						</button>
					</div>

					{/* Right Filters */}
					<div className="flex items-center gap-4">
						<div className="w-[170px] border border-black/10 rounded-lg">
							<Combobox />
						</div>
						<div className="w-[170px] border border-black/10 rounded-lg">
							<Combobox />
						</div>
					</div>
				</div>

				{/* Inputs Row */}
				<div className="w-full flex items-center gap-5 relative">
					{/* From */}
					<div className="w-full bg-[#f5f5f6] rounded-xl p-4 transition-colors relative border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">From</span>
						</div>
						<Combobox />
						{/* Switch Icon */}
						<div className="absolute top-1/2 -right-7 -translate-y-1/2 flex items-center z-10">
							<div className="w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center cursor-pointer hover:rotate-180 transition-transform duration-300 border border-gray-100">
								<ArrowRightLeft className="w-5 h-5 font-bold text-black" />
							</div>
						</div>
					</div>

					{/* To */}
					<div className="w-full bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="w-full flex items-center gap-2 mb-2">
							<Send className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">To</span>
						</div>
						<Combobox />
					</div>

					{/* Departure */}
					<div className="w-full bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-2 mb-2">
							<CalendarIcon className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">
								Departure
							</span>
						</div>
						<DatePicker />
					</div>
				</div>

				{/* Bottom Action */}
				<div className="w-full flex justify-end mt-5 relative">
					<Button
						size="lg"
						className="bg-[#5143d9] hover:bg-[#4336c5] text-white rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-purple-500/20 gap-2">
						Find ticket
						<ArrowRight className="w-5 h-5" />
					</Button>
				</div>
			</div>
		</div>
	);
}
