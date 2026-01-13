"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format, addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Calendar as CalendarIcon, MapPin, User, Search } from "lucide-react";

export default function AvailabilityFilter() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 5),
	});

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

			<div className="w-full bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-4 pr-10">
				<div className="grid grid-cols-3 gap-4 items-center">
					{/* Location */}
					<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors border">
						<MapPin className="h-6 w-6 text-muted-foreground" />
						<div className="flex-1">
							<label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Location
							</label>
							<Select defaultValue="san-jacinto">
								<SelectTrigger className="border-0 p-0 h-auto shadow-none text-base font-semibold focus:ring-0">
									<SelectValue placeholder="Select location" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="san-jacinto">San Jacinto, USA</SelectItem>
									<SelectItem value="north-dakota">
										North Dakota, Canada
									</SelectItem>
									<SelectItem value="west-virginia">
										West Virginia, Paris
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Date Range */}
					<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors border">
						<CalendarIcon className="h-6 w-6 text-muted-foreground" />
						<div className="flex-1">
							<label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Check In - Out
							</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={"ghost"}
										className={cn(
											"w-full justify-start text-left font-semibold p-0 h-auto hover:bg-transparent hover:text-primary",
											!date && "text-muted-foreground",
										)}>
										{date?.from ? (
											date.to ? (
												<>
													{format(date.from, "LLL dd")} -{" "}
													{format(date.to, "LLL dd")}
												</>
											) : (
												format(date.from, "LLL dd")
											)
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent
									className="w-auto p-0"
									align="start">
									<Calendar
										initialFocus
										mode="range"
										defaultMonth={date?.from}
										selected={date}
										onSelect={setDate}
										numberOfMonths={2}
									/>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					{/* Guests */}
					<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors border">
						<User className="h-6 w-6 text-muted-foreground" />
						<div className="flex-1">
							<label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Guests & Rooms
							</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="ghost"
										className="w-full justify-start text-left font-semibold p-0 h-auto hover:bg-transparent hover:text-primary">
										{guests.adults} Adults, {guests.rooms} Room
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-80 p-4">
									<div className="grid gap-4">
										<div className="space-y-2">
											<h4 className="font-medium leading-none">
												Guests & Rooms
											</h4>
											<p className="text-sm text-muted-foreground">
												Select the number of guests and rooms.
											</p>
										</div>
										<Separator />

										{/* Adults */}
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

										{/* Children */}
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
												<span className="w-4 text-center">
													{guests.children}
												</span>
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
										{/* Rooms */}
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
				<div className="absolute transform top-1/2 -right-6 shadow-lg hover:scale-105 transition-transform bg-[#5143d9] hover:bg-[#5143d9] rounded-full">
					<button className="w-12 h-12 p-0 flex items-center justify-center rounded-full">
						<Search className="h-5 w-5 text-white" />
						<span className="sr-only">Search</span>
					</button>
				</div>
			</div>
		</div>
	);
}
