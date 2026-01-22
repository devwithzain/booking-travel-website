"use client";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Clock } from "lucide-react";

export default function TimePicker() {
	const [value, setValue] = useState("");
	const [open, setOpen] = useState(false);

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
					<div className="flex items-center gap-2">
						<Clock className="w-4 h-4 text-muted-foreground" />
						{value || "Select time"}
					</div>
					<ChevronDown className="w-4 h-4 opacity-60" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-full p-0">
				<Command>
					<CommandInput
						placeholder="Search time..."
						className="h-9"
					/>

					<CommandList>
						<CommandEmpty>No time found.</CommandEmpty>

						<CommandGroup>
							{timeOptions.map((time) => (
								<CommandItem
									key={time.value}
									value={time.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}>
									{time.label}
									<Check
										className={cn(
											"ml-auto h-4 w-4",
											value === time.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

// utils/timeOptions.ts
const timeOptions = (() => {
	const times = [];
	const periods = ["AM", "PM"];

	for (let hour = 1; hour <= 12; hour++) {
		for (let minute = 0; minute < 60; minute += 15) {
			for (const period of periods) {
				const h = hour.toString().padStart(2, "0");
				const m = minute.toString().padStart(2, "0");

				times.push({
					value: `${h}:${m} ${period}`,
					label: `${h}:${m} ${period}`,
				});
			}
		}
	}

	return times;
})();
