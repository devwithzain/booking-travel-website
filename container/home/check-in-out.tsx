import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

export function CheckInOut() {
	const [open, setOpen] = useState(false);
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(new Date().getFullYear(), 0, 12),
		to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
	});

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between border-none py-5">
					{dateRange?.from ? (
						dateRange.to ? (
							<>
								{format(dateRange.from, "LLL dd, y")} -{" "}
								{format(dateRange.to, "LLL dd, y")}
							</>
						) : (
							format(dateRange.from, "LLL dd, y")
						)
					) : (
						<span>Pick a date</span>
					)}
					<ChevronDown className="w-full" />
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
					onSelect={setDateRange}
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
