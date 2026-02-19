"use client";
import {
	X,
	Plane,
	Clock,
	Check,
	Loader2,
	ChevronUp,
	ArrowRight,
	ChevronDown,
	ArrowRightLeft,
} from "lucide-react";
import Image from "next/image";
import { TFlight } from "@/types";
import { flightsData } from "@/constants";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";

function formatTime(dateStr: string) {
	return new Date(dateStr).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});
}

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

function formatDuration(minutes: number) {
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${h}h ${m}m`;
}

function FlightCard({ flight, index }: { flight: TFlight; index: number }) {
	const [expanded, setExpanded] = useState(false);
	const seg = flight.segments[0];
	const firstLeg = seg.legs[0];
	const lastLeg = seg.legs[seg.legs.length - 1];
	const carrier = firstLeg.carriersData[0];
	const isMultiLeg = seg.legs.length > 1;
	const totalStops =
		seg.legs.reduce((acc, l) => acc + (l.stopCount > 0 ? 1 : 0), 0) +
		(isMultiLeg ? seg.legs.length - 1 : 0);

	return (
		<div
			className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
			style={{ animationDelay: `${index * 80}ms` }}>
			<div className="p-5">
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center gap-1.5 w-[110px] shrink-0">
						<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden p-1">
							{carrier?.logo ? (
								<Image
									width={200}
									height={200}
									src={carrier.logo}
									alt={carrier.name}
									className="w-full h-full object-contain"
								/>
							) : (
								<Plane className="w-6 h-6 text-gray-400" />
							)}
						</div>
						<span className="text-xs font-semibold text-gray-700 text-center leading-tight line-clamp-2">
							{carrier?.name}
						</span>
						<span className="text-[10px] text-gray-400 font-mono">
							{firstLeg.flightInfo.flightNumber}
						</span>
					</div>
					<div className="flex-1 flex items-center gap-3">
						<div className="text-center min-w-[80px]">
							<p className="text-2xl font-bold text-gray-900 font-mono tracking-tight">
								{formatTime(firstLeg.departureTime)}
							</p>
							<p className="text-sm font-bold text-gray-700">
								{firstLeg.departureAirport.code}
							</p>
							<p className="text-xs text-gray-400 truncate max-w-[90px]">
								{firstLeg.departureAirport.cityName}
							</p>
							{firstLeg.departureAirport.terminal && (
								<p className="text-[10px] text-gray-400">
									Terminal {firstLeg.departureAirport.terminal}
								</p>
							)}
						</div>
						<div className="flex-1 flex flex-col items-center gap-1">
							<span className="text-xs font-semibold text-gray-500">
								{formatDuration(seg.totalTime)}
							</span>
							<div className="w-full flex items-center gap-1">
								<div className="flex-1 h-px bg-gray-200" />
								<div className="relative">
									<Plane className="w-4 h-4 text-[#5143d9] rotate-90" />
								</div>
								<div className="flex-1 h-px bg-gray-200" />
							</div>
							<span
								className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
									totalStops === 0
										? "text-green-600 bg-green-50"
										: totalStops === 1
											? "text-orange-500 bg-orange-50"
											: "text-red-500 bg-red-50"
								}`}>
								{totalStops === 0
									? "Non-Stop"
									: `${totalStops} Stop${totalStops > 1 ? "s" : ""}`}
							</span>
						</div>
						<div className="text-center min-w-[80px]">
							<p className="text-2xl font-bold text-gray-900 font-mono tracking-tight">
								{formatTime(lastLeg.arrivalTime)}
							</p>
							<p className="text-sm font-bold text-gray-700">
								{lastLeg.arrivalAirport.code}
							</p>
							<p className="text-xs text-gray-400 truncate max-w-[90px]">
								{lastLeg.arrivalAirport.cityName}
							</p>
							{lastLeg.arrivalAirport.terminal && (
								<p className="text-[10px] text-gray-400">
									Terminal {lastLeg.arrivalAirport.terminal}
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col items-end gap-2 min-w-[140px]">
						<div className="text-right">
							<p className="text-2xl font-bold text-gray-900">
								{flight.priceBreakdown.total.currencyCode}{" "}
								{flight.priceBreakdown.total.units.toLocaleString()}
							</p>
							<p className="text-xs text-gray-400">
								Base: {flight.priceBreakdown.baseFare.currencyCode}{" "}
								{flight.priceBreakdown.baseFare.units.toLocaleString()}
							</p>
						</div>
						<a
							href={flight.shareableUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full bg-[#5143d9] hover:bg-[#4035b0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors text-center">
							Book Now
						</a>
						<button
							onClick={() => setExpanded(!expanded)}
							className="flex items-center gap-1 text-xs text-[#5143d9] hover:underline font-medium">
							Flight Details
							{expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
						</button>
					</div>
				</div>
				<div className="flex items-center gap-2 mt-3 flex-wrap">
					{flight.isRefundable ? (
						<span className="text-xs text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
							<Check size={10} /> Refundable
						</span>
					) : (
						<span className="text-xs text-red-500 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full font-medium">
							Non-Refundable
						</span>
					)}
					{flight.seatsLeft && flight.seatsLeft <= 10 && (
						<span className="text-xs text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full font-medium">
							Only {flight.seatsLeft} seats left!
						</span>
					)}
					<span className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full font-medium capitalize">
						{flight.travellerCabinClass.toLowerCase()}
					</span>
					{firstLeg.flightInfo.planeType && (
						<span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
							{firstLeg.flightInfo.planeType}
						</span>
					)}
					<span className="ml-auto text-xs text-gray-400">
						{formatDate(firstLeg.departureTime)}
					</span>
				</div>
			</div>
			{expanded && (
				<div className="border-t border-gray-100 bg-gray-50 p-5">
					<h4 className="text-sm font-bold text-gray-700 mb-4">
						Flight Route Details
					</h4>
					<div className="space-y-4">
						{seg.legs.map((leg, i) => (
							<div key={i}>
								{i > 0 && (
									<div className="flex items-center gap-2 my-3 px-4 py-2 bg-orange-50 rounded-lg border border-orange-100">
										<Clock
											size={14}
											className="text-orange-500"
										/>
										<span className="text-xs text-orange-600 font-medium">
											Layover at {seg.legs[i - 1].arrivalAirport.cityName} —{" "}
											{seg.legs[i - 1].arrivalAirport.code}
										</span>
									</div>
								)}
								<div className="bg-white rounded-xl p-4 border border-gray-100">
									<div className="flex items-center justify-between mb-3">
										<div className="flex items-center gap-2">
											<div className="w-8 h-8 rounded-lg bg-gray-50 border flex items-center justify-center overflow-hidden p-0.5">
												{leg.carriersData[0]?.logo ? (
													<Image
														width={200}
														height={200}
														src={leg.carriersData[0].logo}
														alt=""
														className="w-full h-full object-contain"
													/>
												) : (
													<Plane
														size={14}
														className="text-gray-400"
													/>
												)}
											</div>
											<div>
												<p className="text-sm font-semibold text-gray-800">
													{leg.carriersData[0]?.name}
												</p>
												<p className="text-xs text-gray-400 font-mono">
													{leg.flightInfo.flightNumber}
												</p>
											</div>
										</div>
										<span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
											{formatDuration(leg.totalTime)}
										</span>
									</div>
									<div className="flex items-center gap-4">
										<div>
											<p className="text-lg font-bold font-mono text-gray-900">
												{formatTime(leg.departureTime)}
											</p>
											<p className="text-sm font-semibold text-gray-700">
												{leg.departureAirport.code}
											</p>
											<p className="text-xs text-gray-400">
												{leg.departureAirport.cityName}
											</p>
											{leg.departureAirport.terminal && (
												<p className="text-[10px] text-gray-400">
													Terminal {leg.departureAirport.terminal}
												</p>
											)}
										</div>
										<div className="flex-1 flex flex-col items-center">
											<div className="w-full flex items-center gap-1">
												<div className="flex-1 h-px border-t border-dashed border-gray-300" />
												<Plane
													size={12}
													className="text-[#5143d9] rotate-90"
												/>
												<div className="flex-1 h-px border-t border-dashed border-gray-300" />
											</div>
											<span className="text-[10px] text-gray-400 mt-1">
												{leg.stopCount === 0
													? "Direct"
													: `${leg.stopCount} stop`}
											</span>
										</div>
										<div className="text-right">
											<p className="text-lg font-bold font-mono text-gray-900">
												{formatTime(leg.arrivalTime)}
											</p>
											<p className="text-sm font-semibold text-gray-700">
												{leg.arrivalAirport.code}
											</p>
											<p className="text-xs text-gray-400">
												{leg.arrivalAirport.cityName}
											</p>
											{leg.arrivalAirport.terminal && (
												<p className="text-[10px] text-gray-400">
													Terminal {leg.arrivalAirport.terminal}
												</p>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="mt-4 bg-white rounded-xl p-4 border border-gray-100">
						<h5 className="text-sm font-bold text-gray-700 mb-3">
							Price Breakdown
						</h5>
						<div className="space-y-2">
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Base Fare</span>
								<span className="font-medium">
									{flight.priceBreakdown.baseFare.currencyCode}{" "}
									{flight.priceBreakdown.baseFare.units.toLocaleString()}
								</span>
							</div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Taxes & Fees</span>
								<span className="font-medium">
									{flight.priceBreakdown.tax.currencyCode}{" "}
									{flight.priceBreakdown.tax.units.toLocaleString()}
								</span>
							</div>
							<Separator />
							<div className="flex justify-between text-sm font-bold">
								<span>Total</span>
								<span className="text-[#5143d9]">
									{flight.priceBreakdown.total.currencyCode}{" "}
									{flight.priceBreakdown.total.units.toLocaleString()}
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function FilterSidebar({
	filters,
	setFilters,
	flights,
}: {
	filters: Record<string, boolean>;
	setFilters: (f: Record<string, boolean>) => void;
	flights: TFlight[];
}) {
	const toggle = (key: string) =>
		setFilters({ ...filters, [key]: !filters[key] });

	const refundableCount = flights.filter((f) => f.isRefundable).length;
	const nonStopCount = flights.filter(
		(f) =>
			f.segments[0].legs[0].stopCount === 0 && f.segments[0].legs.length === 1,
	).length;
	const oneStopCount = flights.filter(
		(f) => f.segments[0].legs.length > 1,
	).length;
	const airlines = [
		...new Set(
			flights
				.map((f) => f.segments[0].legs[0].carriersData[0]?.name)
				.filter(Boolean),
		),
	];

	return (
		<div className="w-[240px] shrink-0 space-y-5">
			<div className="bg-white rounded-2xl border border-gray-100 p-4">
				<h3 className="font-bold text-gray-800 mb-3">Popular Filters</h3>
				<div className="space-y-2.5">
					{[
						{
							key: "refundable",
							label: "Refundable Fare",
							count: refundableCount,
						},
						{ key: "oneStop", label: "1 Stop", count: oneStopCount },
						{ key: "nonStop", label: "Non-Stop", count: nonStopCount },
					].map((f) => (
						<label
							key={f.key}
							className="flex items-center justify-between cursor-pointer group">
							<div className="flex items-center gap-2">
								<div
									onClick={() => toggle(f.key)}
									className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
										filters[f.key]
											? "bg-[#5143d9] border-[#5143d9]"
											: "border-gray-300 group-hover:border-[#5143d9]"
									}`}>
									{filters[f.key] && (
										<Check
											size={10}
											className="text-white"
										/>
									)}
								</div>
								<span className="text-sm text-gray-600">{f.label}</span>
							</div>
							<span className="text-xs text-gray-400">({f.count})</span>
						</label>
					))}
				</div>
			</div>
			<div className="bg-white rounded-2xl border border-gray-100 p-4">
				<h3 className="font-bold text-gray-800 mb-3">Stops</h3>
				<div className="flex gap-2 flex-wrap">
					{["Direct", "1 Stop", "2+ Stops"].map((s) => (
						<button
							key={s}
							onClick={() => toggle(s)}
							className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
								filters[s]
									? "bg-[#5143d9] text-white border-[#5143d9]"
									: "border-gray-200 text-gray-600 hover:border-[#5143d9]"
							}`}>
							{s}
						</button>
					))}
				</div>
			</div>
			<div className="bg-white rounded-2xl border border-gray-100 p-4">
				<h3 className="font-bold text-gray-800 mb-3">Preferred Airline</h3>
				<div className="space-y-2">
					{airlines.map((airline) => (
						<label
							key={airline}
							className="flex items-center gap-2 cursor-pointer group">
							<div
								onClick={() => toggle(airline)}
								className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
									filters[airline]
										? "bg-[#5143d9] border-[#5143d9]"
										: "border-gray-300 group-hover:border-[#5143d9]"
								}`}>
								{filters[airline] && (
									<Check
										size={10}
										className="text-white"
									/>
								)}
							</div>
							<span className="text-sm text-gray-600 truncate">{airline}</span>
						</label>
					))}
				</div>
			</div>
			<button
				onClick={() => setFilters({})}
				className="w-full text-sm text-red-500 hover:text-red-600 font-medium py-2">
				Clear All Filters
			</button>
		</div>
	);
}

function PromoBanner() {
	const [show, setShow] = useState(true);
	if (!show) return null;
	return (
		<div className="relative bg-linear-to-r from-[#5143d9] to-[#7c6ef0] rounded-2xl p-5 flex items-center justify-between overflow-hidden mb-4">
			<div className="absolute right-20 top-0 bottom-0 w-32 opacity-10">
				<div className="w-full h-full bg-white rounded-full transform translate-x-10" />
			</div>
			<div className="flex items-center gap-4">
				<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl">
					✈️
				</div>
				<div>
					<h4 className="text-white font-bold text-base">
						International Guidelines
					</h4>
					<p className="text-white/70 text-sm mt-0.5">
						COVID safety measures, VISA restrictions, quarantine rules
					</p>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button className="bg-white text-[#5143d9] font-semibold text-sm px-4 py-2 rounded-xl hover:bg-white/90 transition">
					View Guidelines
				</button>
				<button
					onClick={() => setShow(false)}
					className="text-white/60 hover:text-white">
					<X size={18} />
				</button>
			</div>
		</div>
	);
}

function FlightResultsContent() {
	const searchParams = useSearchParams();
	const from = searchParams.get("from") || "KHI";
	const to = searchParams.get("to") || "DXB";
	const fromLabel = searchParams.get("fromLabel") || "Karachi";
	const toLabel = searchParams.get("toLabel") || "Dubai";
	const date = searchParams.get("date") || "2026-03-01";
	const adults = searchParams.get("adults") || "1";
	const tripType = searchParams.get("tripType") || "oneway";
	const cabinClass = searchParams.get("cabinClass") || "ECONOMY";

	const [flights] = useState<TFlight[]>(flightsData);
	const [sortBy, setSortBy] = useState<"price" | "duration" | "departure">(
		"price",
	);
	const [filters, setFilters] = useState<Record<string, boolean>>({});

	const sortedFlights = [...flights].sort((a, b) => {
		if (sortBy === "price")
			return a.priceBreakdown.total.units - b.priceBreakdown.total.units;
		if (sortBy === "duration")
			return a.segments[0].totalTime - b.segments[0].totalTime;
		if (sortBy === "departure")
			return (
				new Date(a.segments[0].legs[0].departureTime).getTime() -
				new Date(b.segments[0].legs[0].departureTime).getTime()
			);
		return 0;
	});

	const filteredFlights = sortedFlights.filter((f) => {
		if (filters["refundable"] && !f.isRefundable) return false;
		if (
			filters["nonStop"] &&
			(f.segments[0].legs.length > 1 || f.segments[0].legs[0].stopCount > 0)
		)
			return false;
		if (filters["oneStop"] && f.segments[0].legs.length < 2) return false;
		const selectedAirlines = Object.keys(filters).filter(
			(k) =>
				[
					"Emirates",
					"Pakistan International",
					"Turkish Airlines",
					"flydubai",
					"Air Arabia",
				].includes(k) && filters[k],
		);
		if (
			selectedAirlines.length > 0 &&
			!selectedAirlines.includes(f.segments[0].legs[0].carriersData[0]?.name)
		)
			return false;
		return true;
	});

	const cheapest = Math.min(
		...flights.map((f) => f.priceBreakdown.total.units),
	);
	const fastest = Math.min(...flights.map((f) => f.segments[0].totalTime));

	return (
		<div className="w-full min-h-screen">
			<div className="w-full mt-20">
				<div className="max-w-7xl mx-auto px-6 py-3">
					<div className="flex items-center gap-3 flex-wrap">
						<div className="flex items-center bg-gray-100 rounded-xl p-1">
							{["oneway", "roundtrip"].map((t) => (
								<button
									key={t}
									className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
										tripType === t ? "bg-black text-white" : "text-gray-500"
									}`}>
									{t === "oneway" ? "One Way" : "Round Trip"}
								</button>
							))}
						</div>
						<div className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
							<p className="text-[10px] text-gray-400 font-medium">From</p>
							<p className="text-sm font-bold text-gray-800">
								{fromLabel} ({from})
							</p>
						</div>
						<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50">
							<ArrowRightLeft
								size={14}
								className="text-gray-500"
							/>
						</button>
						<div className="flex-1 min-w-[150px] bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
							<p className="text-[10px] text-gray-400 font-medium">To</p>
							<p className="text-sm font-bold text-gray-800">
								{toLabel} ({to})
							</p>
						</div>
						<div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
							<p className="text-[10px] text-gray-400 font-medium">Departure</p>
							<p className="text-sm font-bold text-gray-800">{date}</p>
						</div>
						<div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
							<p className="text-[10px] text-gray-400 font-medium">Class</p>
							<p className="text-sm font-bold text-gray-800 capitalize">
								{cabinClass.toLowerCase()}
							</p>
						</div>
						<div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
							<p className="text-[10px] text-gray-400 font-medium">
								Passengers
							</p>
							<p className="text-sm font-bold text-gray-800">
								{adults} Adult{parseInt(adults) > 1 ? "s" : ""}
							</p>
						</div>
						<button className="bg-[#5143d9] hover:bg-[#4035b0] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
							Find Ticket <ArrowRight size={14} />
						</button>
					</div>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-6 py-6">
				<div className="mb-4">
					<h1 className="text-2xl font-bold text-gray-900">
						<span className="text-[#5143d9]">
							{filteredFlights.length} Flight
							{filteredFlights.length !== 1 ? "s" : ""}
						</span>{" "}
						Available
					</h1>
					<p className="text-sm text-gray-500 mt-0.5">
						{date} · {tripType === "roundtrip" ? "Round Trip" : "One Way"} ·{" "}
						{fromLabel} → {toLabel}
					</p>
				</div>
				<PromoBanner />
				<div className="flex items-center gap-2 mb-5">
					<span className="text-sm text-gray-500 font-medium">Sort by:</span>
					{[
						{
							key: "price",
							label: `Cheapest · PKR ${cheapest.toLocaleString()}`,
						},
						{ key: "duration", label: `Fastest · ${formatDuration(fastest)}` },
						{ key: "departure", label: "Earliest Departure" },
					].map((s) => (
						<button
							key={s.key}
							onClick={() => setSortBy(s.key)}
							className={`text-sm px-4 py-2 rounded-xl border font-medium transition-all ${
								sortBy === s.key
									? "bg-[#5143d9] text-white border-[#5143d9]"
									: "bg-white text-gray-600 border-gray-200 hover:border-[#5143d9]"
							}`}>
							{s.label}
						</button>
					))}
				</div>
				<div className="flex gap-5">
					<FilterSidebar
						filters={filters}
						setFilters={setFilters}
						flights={flights}
					/>
					<div className="flex-1 space-y-3">
						{filteredFlights.length === 0 ? (
							<div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
								<Plane className="w-12 h-12 text-gray-200 mx-auto mb-3" />
								<p className="text-gray-500 font-medium">
									No flights match your filters
								</p>
								<button
									onClick={() => setFilters({})}
									className="mt-3 text-[#5143d9] text-sm hover:underline">
									Clear filters
								</button>
							</div>
						) : (
							filteredFlights.map((flight, i) => (
								<FlightCard
									key={flight.token}
									flight={flight}
									index={i}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function FlightResultsPage() {
	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center min-h-screen">
					<Loader2 className="w-8 h-8 animate-spin text-[#5143d9]" />
				</div>
			}>
			<FlightResultsContent />
		</Suspense>
	);
}
