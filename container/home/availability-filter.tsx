"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { addDays } from "date-fns";
import { TDestination } from "@/types";
import { CheckInOut } from "./check-in-out";
import { useRouter } from "next/navigation";
import { Combobox } from "@/components/index";
import { formatDate } from "@/lib/booking-api";
import { Button } from "@/components/ui/button";
import { type DateRange } from "react-day-picker";
import { Separator } from "@/components/ui/separator";
import { Send, MapPin, User, ChevronDown } from "lucide-react";

export default function AvailabilityFilter() {
	const router = useRouter();
	const [guestsOpen, setGuestsOpen] = useState(false);
	const [selectedDest, setSelectedDest] = useState<TDestination | null>(null);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 3),
	});
	const [guests, setGuests] = useState({
		adults: 0,
		children: 0,
		rooms: 0,
	});

	const handleSearch = () => {
		if (!selectedDest) {
			alert("Please select a destination first!");
			return;
		}

		const checkin = dateRange?.from
			? formatDate(dateRange.from)
			: formatDate(new Date());
		const checkout = dateRange?.to
			? formatDate(dateRange.to)
			: formatDate(addDays(new Date(), 3));

		const params = new URLSearchParams({
			dest_id: selectedDest.dest_id,
			dest_type: selectedDest.search_type || selectedDest.dest_type,
			dest_label: selectedDest.label || selectedDest.city_name,
			checkin,
			checkout,
			adults: String(guests.adults),
			children: String(guests.children),
			rooms: String(guests.rooms),
		});

		router.push(`/hotels?${params.toString()}`);
	};

	return (
		<div className="w-full relative z-20">
			<div className="sm:hidden block mb-3 text-white">
				<h6 className="font-semibold text-lg drop-shadow-md text-black">
					Check Availability
				</h6>
			</div>
			<div className="w-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-xl p-7 relative">
				<div className="w-full flex items-center gap-3 relative">
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors relative border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Location
							</span>
						</div>
						<Combobox
							placeholder="Where are you going?"
							onSelect={(dest) => setSelectedDest(dest)}
							value={selectedDest}
						/>
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Check In & Out
							</span>
						</div>
						<CheckInOut
							dateRange={dateRange}
							onDateRangeChange={setDateRange}
						/>
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<User className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Guests & Rooms
							</span>
						</div>
						<Popover
							open={guestsOpen}
							onOpenChange={setGuestsOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={guestsOpen}
									className="w-full justify-between border-none py-5">
									{guests.adults} Adults, {guests.children} Children,{" "}
									{guests.rooms} Room
									<ChevronDown className="w-4 h-4" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-80 p-4">
								<div className="grid gap-4">
									<div className="space-y-2">
										<h4 className="font-medium leading-none">Guests & Rooms</h4>
										<p className="text-sm text-muted-foreground">
											Select the number of guests and rooms.
										</p>
									</div>
									<Separator />
									{(["adults", "children", "rooms"] as const).map((key) => (
										<div
											key={key}
											className="flex items-center justify-between">
											<div className="text-sm capitalize">{key}</div>
											<div className="flex items-center gap-2">
												<Button
													variant="outline"
													size="icon"
													className="h-8 w-8"
													onClick={() =>
														setGuests((prev) => ({
															...prev,
															[key]: Math.max(
																key === "children" ? 0 : 1,
																prev[key] - 1,
															),
														}))
													}>
													−
												</Button>
												<span className="w-4 text-center">{guests[key]}</span>
												<Button
													variant="outline"
													size="icon"
													className="h-8 w-8"
													onClick={() =>
														setGuests((prev) => ({
															...prev,
															[key]: prev[key] + 1,
														}))
													}>
													+
												</Button>
											</div>
										</div>
									))}
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
			<div
				onClick={handleSearch}
				className="bg-black px-4 py-3 cursor-pointer rounded-md flex items-center gap-2 absolute -bottom-5 right-10 hover:bg-gray-800 transition-colors">
				<Send className="w-4 h-4 text-white" />
				<span className="text-base font-medium text-white leading-tight">
					Search
				</span>
			</div>
		</div>
	);
}
