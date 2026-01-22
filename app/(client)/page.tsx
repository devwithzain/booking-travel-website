import {
	Blogs,
	Brands,
	HomeHero,
	OfferSlider,
	ExploreNearby,
	FeaturedHotels,
	FeaturedHoliday,
	Moments,
} from "@/container";
import { Testimonials } from "@/components/index";

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
			<Blogs />
			<Moments />
		</>
	);
}
