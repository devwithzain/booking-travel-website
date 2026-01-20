import {
	FlightsCTA,
	FlightsHero,
	FlightsBlogs,
	SpecialOffers,
	FlightsProcess,
	FlightsDestinations,
} from "@/container";

export default function Flights() {
	return (
		<>
			<FlightsHero />
			<SpecialOffers />
			<FlightsDestinations />
			<FlightsProcess />
			<FlightsCTA />
			<FlightsBlogs />
		</>
	);
}
