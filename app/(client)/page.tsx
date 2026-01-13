"use client";
import {
	Hero,
	Brands,
	AppLink,
	OfferSlider,
	ExploreNearby,
	FeaturedHotels,
	FeaturedHoliday,
} from "@/container";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<OfferSlider />
			<FeaturedHoliday />
			<FeaturedHotels />
			<Brands />
			<Testimonials />
			<ExploreNearby />
			<AppLink />
		</>
	);
}
