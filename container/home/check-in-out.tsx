"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { TCheckInOutProps } from "@/types";
import { Button } from "@/components/ui/button";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

export function CheckInOut({
	dateRange: externalDateRange,
	onDateRangeChange,
}: TCheckInOutProps) {
	const [open, setOpen] = useState(false);
	const [internalDateRange, setInternalDateRange] = useState<
		DateRange | undefined
	>({
		from: new Date(),
		to: addDays(new Date(), 3),
	});

	const dateRange =
		externalDateRange !== undefined ? externalDateRange : internalDateRange;

	const handleSelect = (range: DateRange | undefined) => {
		if (onDateRangeChange) {
			onDateRangeChange(range);
		} else {
			setInternalDateRange(range);
		}
	};

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between border-none py-5 font-normal">
					{dateRange?.from ? (
						dateRange.to ? (
							<>
								{format(dateRange.from, "LLL dd, y")} −{" "}
								{format(dateRange.to, "LLL dd, y")}
							</>
						) : (
							format(dateRange.from, "LLL dd, y")
						)
					) : (
						<span className="text-gray-400">Pick a date</span>
					)}
					<ChevronDown className="w-4 h-4 text-gray-400" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0"
				align="start">
				<Calendar
					initialFocus
					mode="range"
					defaultMonth={dateRange?.from}
					selected={dateRange}
					onSelect={handleSelect}
					numberOfMonths={2}
					disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
					classNames={{
						months: "flex",
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
