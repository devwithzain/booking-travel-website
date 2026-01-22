"use client";
import { useState } from "react";
import { Popover } from "@/components/ui/popover";
import { Combobox, DatePicker } from "@/components/index";
import { Send, MapPin, Calendar, Binoculars } from "lucide-react";

export default function DateSelection() {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full relative z-20">
			<div className="w-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-7 relative">
				<div className="w-full flex items-center gap-3 relative">
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors relative border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">
								Location
							</span>
						</div>
						<Combobox />
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<Calendar className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">Date</span>
						</div>
						<DatePicker />
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<Binoculars className="w-5 h-5 text-gray-400" />
							<span className="text-base font-normal text-gray-500">
								Tour Type
							</span>
						</div>
						<Popover
							open={open}
							onOpenChange={setOpen}>
							<Combobox />
						</Popover>
					</div>
				</div>
			</div>
			<div className="bg-black px-4 py-3 cursor-pointer rounded-md flex items-center gap-2 absolute -bottom-5 right-10">
				<Send className="w-4 h-4 text-white" />
				<button className="text-base font-medium text-white leading-tight pointer-events-none">
					Take a Tour
				</button>
			</div>
		</div>
	);
}
