import { StaticImageData } from "next/image";

export type TOfferCardProps = {
	offer: {
		image: StaticImageData;
		title: string;
		description: string;
		href: string;
	};
};

export type THotelCardProps = {
	hotel: {
		image: StaticImageData;
		name: string;
		location: string;
		price: number;
		ratings: number;
		href: string;
	};
};
