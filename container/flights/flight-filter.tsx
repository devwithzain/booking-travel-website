"use client";
import {
	Send,
	MapPin,
	ArrowRightLeft,
	Calendar as CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Combobox, DatePicker } from "@/components/index";

export default function FlightFilter() {
	const [activeTab, setActiveTab] = useState<"oneway" | "roundtrip">("oneway");

	return (
		<div className="w-full relative z-20">
			<div className="w-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-7 relative">
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
					<div className="flex items-center gap-4">
						<div className="w-[170px] border border-black/10 rounded-lg">
							<Combobox />
						</div>
						<div className="w-[170px] border border-black/10 rounded-lg">
							<Combobox />
						</div>
					</div>
				</div>
				<div className="w-full flex items-center gap-3 relative">
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors relative border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">From</span>
						</div>
						<Combobox />
						<div className="absolute top-1/2 -right-[26px] -translate-y-1/2 z-10">
							<button className="w-10 h-10 bg-white border border-black/10 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
								<ArrowRightLeft className="w-5 h-5 text-black" />
							</button>
						</div>
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">To</span>
						</div>
						<Combobox />
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<CalendarIcon className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Departure
							</span>
						</div>
						<DatePicker />
					</div>
					{activeTab === "roundtrip" && (
						<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
							<div className="flex items-center gap-1 mb-2">
								<CalendarIcon className="w-5 h-5 text-gray-400" />
								<span className="text-sm font-normal text-gray-500">
									Return
								</span>
							</div>
							<DatePicker />
						</div>
					)}
				</div>
			</div>
			<div className="bg-black px-4 py-3 cursor-pointer rounded-md flex items-center gap-2 absolute -bottom-5 right-10">
				<Send className="w-4 h-4 text-white" />
				<button className="text-base font-medium text-white leading-tight pointer-events-none">
					Find Ticket
				</button>
			</div>
		</div>
	);
}
