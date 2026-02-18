import { StaticImageData } from "next/image";
import { DateRange } from "react-day-picker";

export type TOfferCardProps = {
	offer: {
		image: StaticImageData;
		title: string;
		description: string;
		href: string;
	};
};

export type TDestination = {
	search_type: string;
	dest_id: string;
	dest_type: string;
	label: string;
	city_name: string;
	country: string;
	image_url?: string;
	nr_hotels?: number;
};

export type THotel = {
	hotel_id: number;
	property: {
		name: string;
		reviewScore: number;
		reviewScoreWord: string;
		reviewCount: number;
		latitude: number;
		longitude: number;
		mainPhotoId: number;
		photoUrls: string[];
		priceBreakdown: {
			grossPrice: {
				value: number;
				currency: string;
			};
			strikethroughPrice?: {
				value: number;
				currency: string;
			};
		};
		checkinDate: string;
		checkoutDate: string;
		countryCode: string;
		accuratePropertyClass: number;
		wishlistName: string;
		isPreferred: boolean;
		freeCancellation: boolean;
		url: string;
	};
};

export type THotelSearchParams = {
	dest_id: string;
	search_type: string;
	arrival_date: string;
	departure_date: string;
	adults: number;
	children_age?: string;
	room_qty: number;
	page_number?: number;
	currency_code?: string;
	languagecode?: string;
	categories_filter?: string;
	sort_by?: string;
	price_min?: number;
	price_max?: number;
};

export type TCheckInOutProps = {
	dateRange?: DateRange;
	onDateRangeChange?: (range: DateRange | undefined) => void;
};

export type TComboboxProps = {
	placeholder?: string;
	onSelect?: (destination: TDestination) => void;
	value?: TDestination | null;
};

export type THotelCardProps = {
	hotel: THotel;
	checkin: string;
	checkout: string;
	adults: number;
	rooms: number;
};

export type THotelPhoto = {
	photo_id: number;
	url_max: string;
	url_square60: string;
	tags: string[];
};

export type THotelFacility = {
	facility_id: number;
	name: string;
	facilitytype_id: number;
	facilitytype_name: string;
};

export type TRoomHighlight = {
	icon: string;
	translated_name: string;
};

export type TRoom = {
	room_id: string;
	room_name: string;
	photos: { url_original: string }[];
	highlights: TRoomHighlight[];
	bed_configurations: {
		bed_types: { name: string; count: number }[];
	}[];
	private_bathroom_count: number;
	nr_adults: number;
	price_breakdown: {
		gross_price: number;
		currency: string;
		strikethrough_price?: number;
	};
	free_cancellation: boolean;
	free_cancellation_until?: string;
	breakfast_included: boolean;
	url: string;
};

export type TReview = {
	review_id: string;
	reviewer: {
		name: string;
		country_flag_url: string;
		helpful_vote_count: number;
	};
	date: string;
	pros: string;
	cons: string;
	average_score: number;
	review_photos: { url_max300: string }[];
	hotel_response?: string;
};

export type TReviewScore = {
	review_score: number;
	review_score_word: string;
	review_count: number;
	score_breakdown: {
		staff: number;
		facilities: number;
		cleanliness: number;
		comfort: number;
		value_for_money: number;
		location: number;
	};
	percentage_breakdown: {
		score_10: number;
		score_9: number;
		score_8: number;
		score_7: number;
		score_6: number;
	};
};

export type THotelDetail = {
	hotel_id: number;
	name: string;
	address: string;
	city: string;
	country: string;
	latitude: number;
	longitude: number;
	star_rating: number;
	checkin: { from: string; to: string };
	checkout: { from: string; to: string };
	price_from: number;
	currency: string;
	description: string;
	description_highlights: string[];
	facilities: {
		facilitytype_name: string;
		facilities: { name: string }[];
	}[];
	languages: string[];
	payment_methods: string[];
	policies: string[];
	photos: THotelPhoto[];
	rooms: TRoom[];
	review_scores: TReviewScore;
	reviews: TReview[];
};
