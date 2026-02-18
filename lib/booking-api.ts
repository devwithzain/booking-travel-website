const RAPIDAPI_HOST = "booking-com15.p.rapidapi.com";
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!;
const BASE_URL = "https://booking-com15.p.rapidapi.com/api/v1";
import { TDestination, THotel, THotelSearchParams } from "@/types";

const headers = {
	"x-rapidapi-host": RAPIDAPI_HOST,
	"x-rapidapi-key": RAPIDAPI_KEY,
};

export async function searchHotelDestinations(
	query: string,
): Promise<TDestination[]> {
	if (!query || query.length < 2) return [];

	try {
		const res = await fetch(
			`${BASE_URL}/hotels/searchDestination?query=${encodeURIComponent(query)}`,
			{ headers },
		);
		const data = await res.json();
		if (data.status && data.data) {
			return data.data as TDestination[];
		}
		return [];
	} catch (err) {
		console.error("searchHotelDestinations error:", err);
		return [];
	}
}

export async function searchHotels(params: THotelSearchParams): Promise<{
	hotels: THotel[];
	totalCount: number;
}> {
	try {
		const queryParams = new URLSearchParams({
			dest_id: params.dest_id,
			search_type: params.search_type,
			arrival_date: params.arrival_date,
			departure_date: params.departure_date,
			adults: String(params.adults),
			room_qty: String(params.room_qty),
			page_number: String(params.page_number || 1),
			currency_code: params.currency_code || "USD",
			languagecode: params.languagecode || "en-us",
			units: "metric",
			temperature_unit: "c",
		});

		if (params.children_age)
			queryParams.set("children_age", params.children_age);
		if (params.categories_filter)
			queryParams.set("categories_filter", params.categories_filter);
		if (params.sort_by) queryParams.set("sort_by", params.sort_by);
		if (params.price_min)
			queryParams.set("price_min", String(params.price_min));
		if (params.price_max)
			queryParams.set("price_max", String(params.price_max));

		const res = await fetch(`${BASE_URL}/hotels/searchHotels?${queryParams}`, {
			headers,
		});
		const data = await res.json();

		if (data.status && data.data) {
			return {
				hotels: data.data.hotels || [],
				totalCount: data.data.meta?.totalCount || 0,
			};
		}
		return { hotels: [], totalCount: 0 };
	} catch (err) {
		console.error("searchHotels error:", err);
		return { hotels: [], totalCount: 0 };
	}
}

export async function getHotelDetails(
	hotel_id: number,
	arrival_date: string,
	departure_date: string,
	adults: number,
	room_qty: number,
	currency_code = "USD",
) {
	try {
		const queryParams = new URLSearchParams({
			hotel_id: String(hotel_id),
			arrival_date,
			departure_date,
			adults: String(adults),
			room_qty: String(room_qty),
			currency_code,
			languagecode: "en-us",
			units: "metric",
			temperature_unit: "c",
		});

		const res = await fetch(
			`${BASE_URL}/hotels/getHotelDetails?${queryParams}`,
			{ headers },
		);
		const data = await res.json();
		return data.status ? data.data : null;
	} catch (err) {
		console.error("getHotelDetails error:", err);
		return null;
	}
}

export async function getHotelPhotos(hotel_id: number) {
	try {
		const res = await fetch(
			`${BASE_URL}/hotels/getHotelPhotos?hotel_id=${hotel_id}`,
			{ headers },
		);
		const data = await res.json();
		return data.status ? data.data : [];
	} catch (err) {
		console.error("getHotelPhotos error:", err);
		return [];
	}
}

export async function getRooms(
	hotel_id: number,
	arrival_date: string,
	departure_date: string,
	adults: number,
	room_qty: number,
	currency_code = "USD",
) {
	try {
		const queryParams = new URLSearchParams({
			hotel_id: String(hotel_id),
			arrival_date,
			departure_date,
			adults: String(adults),
			room_qty: String(room_qty),
			currency_code,
			languagecode: "en-us",
			units: "metric",
			temperature_unit: "c",
		});

		const res = await fetch(`${BASE_URL}/hotels/getRooms?${queryParams}`, {
			headers,
		});
		const data = await res.json();
		return data.status ? data.data : [];
	} catch (err) {
		console.error("getRooms error:", err);
		return [];
	}
}

export async function getHotelReviews(hotel_id: number, page = 1) {
	try {
		const queryParams = new URLSearchParams({
			hotel_id: String(hotel_id),
			languagecode: "en-us",
			sort_type: "SORT_MOST_RELEVANT",
			page_number: String(page),
		});

		const res = await fetch(
			`${BASE_URL}/hotels/getHotelReviews?${queryParams}`,
			{ headers },
		);
		const data = await res.json();
		return data.status ? data.data : null;
	} catch (err) {
		console.error("getHotelReviews error:", err);
		return null;
	}
}

export async function getSurroundingInfo(hotel_id: number) {
	try {
		const res = await fetch(
			`${BASE_URL}/hotels/getSurroundingInfo?hotel_id=${hotel_id}&languagecode=en-us`,
			{ headers },
		);
		const data = await res.json();
		return data.status ? data.data : null;
	} catch (err) {
		console.error("getSurroundingInfo error:", err);
		return null;
	}
}

export async function getHotelReviewScores(hotel_id: number) {
	try {
		const res = await fetch(
			`${BASE_URL}/hotels/getHotelReviewScores?hotel_id=${hotel_id}`,
			{ headers },
		);
		const data = await res.json();
		return data.status ? data.data : null;
	} catch (err) {
		console.error("getHotelReviewScores error:", err);
		return null;
	}
}

export function formatDate(date: Date): string {
	return date.toISOString().split("T")[0];
}

export function getDefaultDates() {
	const today = new Date();
	const checkout = new Date();
	checkout.setDate(today.getDate() + 3);
	return {
		checkin: formatDate(today),
		checkout: formatDate(checkout),
	};
}
