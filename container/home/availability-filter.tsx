"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CheckInOut } from "./check-in-out";
import { Combobox } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, MapPin, User, ChevronDown } from "lucide-react";

export default function AvailabilityFilter() {
	const [open, setOpen] = useState(false);

	const [guests, setGuests] = useState({
		adults: 2,
		children: 0,
		rooms: 1,
	});

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
						<Combobox />
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<MapPin className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Check In & Out
							</span>
						</div>
						<CheckInOut />
					</div>
					<div className="flex-1 bg-[#f5f5f6] rounded-xl p-4 transition-colors border border-transparent focus-within:border-primary/20">
						<div className="flex items-center gap-1 mb-2">
							<User className="w-5 h-5 text-gray-400" />
							<span className="text-sm font-normal text-gray-500">
								Guests & Rooms
							</span>
						</div>
						<Popover
							open={open}
							onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									className="w-full justify-between border-none py-5">
									{guests.adults} Adults, {guests.children} Children,{" "}
									{guests.rooms} Room
									<ChevronDown className="w-full" />
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
									<div className="flex items-center justify-between">
										<div className="text-sm">Adults</div>
										<div className="flex items-center gap-2">
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														adults: Math.max(1, prev.adults - 1),
													}))
												}>
												-
											</Button>
											<span className="w-4 text-center">{guests.adults}</span>
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														adults: prev.adults + 1,
													}))
												}>
												+
											</Button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="text-sm">Children</div>
										<div className="flex items-center gap-2">
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														children: Math.max(0, prev.children - 1),
													}))
												}>
												-
											</Button>
											<span className="w-4 text-center">{guests.children}</span>
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														children: prev.children + 1,
													}))
												}>
												+
											</Button>
										</div>
									</div>
									<div className="flex items-center justify-between">
										<div className="text-sm">Rooms</div>
										<div className="flex items-center gap-2">
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														rooms: Math.max(1, prev.rooms - 1),
													}))
												}>
												-
											</Button>
											<span className="w-4 text-center">{guests.rooms}</span>
											<Button
												variant="outline"
												size="icon"
												className="h-8 w-8"
												onClick={() =>
													setGuests((prev) => ({
														...prev,
														rooms: prev.rooms + 1,
													}))
												}>
												+
											</Button>
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
			<div className="bg-black px-4 py-3 cursor-pointer rounded-md flex items-center gap-2 absolute -bottom-5 right-10">
				<Send className="w-4 h-4 text-white" />
				<button className="text-base font-medium text-white leading-tight pointer-events-none">
					Search
				</button>
			</div>
		</div>
	);
}
