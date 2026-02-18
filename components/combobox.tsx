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
import { TComboboxProps } from "@/types";
import { Button } from "@/components/ui/button";
import { useState, useCallback, useEffect } from "react";
import { Check, ChevronDown, MapPin, Loader2 } from "lucide-react";
import { searchHotelDestinations, type TDestination } from "@/lib/booking-api";

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);
	return debouncedValue;
}

export default function Combobox({
	placeholder = "Search destination...",
	onSelect,
	value,
}: TComboboxProps) {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<TDestination[]>([]);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<TDestination | null>(value || null);

	const debouncedQuery = useDebounce(query, 400);
	useEffect(() => {
		if (debouncedQuery.length < 2) {
			setResults([]);
			return;
		}

		const fetchDestinations = async () => {
			setLoading(true);
			try {
				const data = await searchHotelDestinations(debouncedQuery);
				setResults(data.slice(0, 8));
			} catch {
				setResults([]);
			} finally {
				setLoading(false);
			}
		};

		fetchDestinations();
	}, [debouncedQuery]);

	const handleSelect = useCallback(
		(destination: TDestination) => {
			setSelected(destination);
			setOpen(false);
			setQuery("");
			onSelect?.(destination);
		},
		[onSelect],
	);

	const getDestTypeLabel = (type: string) => {
		switch (type) {
			case "CITY":
				return "City";
			case "HOTEL":
				return "Hotel";
			case "AIRPORT":
				return "Airport";
			case "REGION":
				return "Region";
			case "COUNTRY":
				return "Country";
			default:
				return type;
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
					{selected ? (
						<span className="flex items-center gap-2 truncate">
							<MapPin className="w-4 h-4 text-gray-400 shrink-0" />
							<span className="truncate">
								{selected.label || selected.city_name}
							</span>
						</span>
					) : (
						<span className="text-gray-400">{placeholder}</span>
					)}
					<ChevronDown className="w-4 h-4 shrink-0 text-gray-400" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-[320px] p-0"
				align="start">
				<Command shouldFilter={false}>
					<CommandInput
						placeholder="Type a city or hotel..."
						value={query}
						onValueChange={setQuery}
						className="h-10"
					/>
					<CommandList className="max-h-[260px]">
						{loading && (
							<div className="flex items-center justify-center py-6 gap-2 text-sm text-muted-foreground">
								<Loader2 className="w-4 h-4 animate-spin" />
								Searching...
							</div>
						)}
						{!loading && query.length >= 2 && results.length === 0 && (
							<CommandEmpty>No destinations found.</CommandEmpty>
						)}
						{!loading && query.length < 2 && (
							<div className="py-6 text-center text-sm text-muted-foreground">
								Type to search destinations...
							</div>
						)}
						{!loading && results.length > 0 && (
							<CommandGroup heading="Destinations">
								{results.map((dest) => (
									<CommandItem
										key={`${dest.dest_id}-${dest.dest_type}`}
										value={dest.dest_id}
										onSelect={() => handleSelect(dest)}
										className="flex items-center gap-3 py-3 cursor-pointer">
										<div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 shrink-0">
											<MapPin className="w-4 h-4 text-gray-500" />
										</div>
										<div className="flex-1 min-w-0">
											<p className="font-medium text-sm truncate">
												{dest.city_name || dest.label}
											</p>
											<p className="text-xs text-muted-foreground truncate">
												{getDestTypeLabel(dest.dest_type)}
												{dest.country ? ` · ${dest.country}` : ""}
												{dest.nr_hotels
													? ` · ${dest.nr_hotels.toLocaleString()} hotels`
													: ""}
											</p>
										</div>
										<Check
											className={cn(
												"w-4 h-4 shrink-0",
												selected?.dest_id === dest.dest_id
													? "opacity-100 text-primary"
													: "opacity-0",
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
