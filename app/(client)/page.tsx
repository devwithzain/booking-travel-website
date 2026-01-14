import {
	Brands,
	AppLink,
	HomeHero,
	OfferSlider,
	ExploreNearby,
	FeaturedHotels,
	FeaturedHoliday,
} from "@/container";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
			<HomeHero />
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
