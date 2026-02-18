import {
	blog01,
	blog02,
	blog03,
	blog04,
	brand01,
	brand02,
	brand03,
	brand04,
	brand05,
	brand06,
	cab01,
	cab02,
	cab03,
	cab04,
	cab05,
	cab06,
	car,
	category01,
	category02,
	category03,
	category04,
	category05,
	category06,
	category07,
	category08,
	client1,
	client2,
	client3,
	client4,
	client5,
	client6,
	destination01,
	destination02,
	destination03,
	destination04,
	feturedHotel01,
	feturedHotel02,
	feturedHotel03,
	feturedHotel04,
	flight,
	hotel,
	hotel01,
	hotel02,
	hotel03,
	hotel04,
	hotel05,
	hotel06,
	hotel07,
	hotel08,
	hotel09,
	hotel10,
	hotel11,
	hotel12,
	moment01,
	moment02,
	moment03,
	moment04,
	moment05,
	moment06,
	moment07,
	moment08,
	offer1,
	offer2,
	offer3,
	offer4,
	package01,
	package02,
	package03,
	package04,
	smile,
	specialoffer01,
	specialoffer02,
	specialoffer03,
	team01,
	team02,
	team03,
	team04,
	tour,
	wow,
} from "@/public";
import {
	User,
	Ticket,
	Users,
	CreditCard,
	Heart,
	Settings,
	Trash,
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
	Utensils,
	Timer,
	ShieldCheck,
	Zap,
	Leaf,
	Car,
	Wifi,
	Accessibility,
} from "lucide-react";
import { THotelDetail } from "@/types";

export const testimonialsData = [
	{
		id: 1,
		image: client1,
		badge: wow,
		name: "Billy Vasquez",
		role: "CEO of Apple",
		text: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young.",
	},
	{
		id: 2,
		image: client2,
		badge: smile,
		name: "Sophia Turner",
		role: "Product Manager at Google",
		text: "Exceptional service and seamless booking experience. Everything was well organized and exceeded my expectations.",
	},
	{
		id: 3,
		image: client3,
		badge: wow,
		name: "Daniel Roberts",
		role: "CTO of Meta",
		text: "The interface is intuitive and the hotel options are top-notch. It made planning my trip effortless and enjoyable.",
	},
	{
		id: 4,
		image: client4,
		badge: smile,
		name: "Emily Watson",
		role: "Founder of Airbnb",
		text: "A beautifully designed platform with reliable recommendations. I found exactly what I needed within minutes.",
	},
	{
		id: 5,
		image: client5,
		badge: wow,
		name: "Michael Chen",
		role: "Marketing Lead at Amazon",
		text: "Fast, reliable, and user-friendly. The customer support was responsive and helped me every step of the way.",
	},
	{
		id: 6,
		image: client6,
		badge: smile,
		name: "Olivia Brown",
		role: "UX Director at Netflix",
		text: "From discovery to booking, the entire flow feels premium. The attention to detail really stands out.",
	},
];

export const featuresData = [
	{
		id: 1,
		icon: Utensils,
		title: "Quality Food",
		description:
			"Departure defective arranging rapturous did. Conduct denied adding worthy little.",
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		id: 2,
		icon: Timer,
		title: "Quick Services",
		description: "Supposing so be resolving breakfast am or perfectly.",
		color: "text-red-500",
		bgColor: "bg-red-500/10",
	},
	{
		id: 3,
		icon: ShieldCheck,
		title: "High Security",
		description: "Arranging rapturous did believe him all had supported.",
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
	},
	{
		id: 4,
		icon: Zap,
		title: "24 Hours Alert",
		description: "Rapturous did believe him all had supported.",
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
];

export const bookingHomeMenuItems = [
	{
		key: "hotels-home",
		label: "Hotel",
		href: "/",
		icon: hotel,
	},
	{
		key: "flights-home",
		label: "Flight",
		href: "/flights",
		icon: flight,
	},
	{
		key: "tour-home",
		label: "Tour",
		href: "/tours",
		icon: tour,
	},
	{
		key: "cabs-home",
		label: "Cab",
		href: "/cabs",
		icon: car,
	},
];

export const userProfileMenuItems = [
	{
		key: "profile",
		label: "My Profile",
		href: "/user/profile",
		icon: User,
	},
	{
		key: "bookings",
		label: "My Bookings",
		href: "/user/bookings",
		icon: Ticket,
	},
	{
		key: "travelers",
		label: "Travelers",
		href: "/user/travelers",
		icon: Users,
	},
	{
		key: "payment",
		label: "Payment Details",
		href: "/user/payment",
		icon: CreditCard,
	},
	{
		key: "wishlist",
		label: "Wishlist",
		href: "/user/wishlist",
		icon: Heart,
	},
	{
		key: "settings",
		label: "Settings",
		href: "/user/settings",
		icon: Settings,
	},
	{
		key: "delete",
		label: "Delete Profile",
		href: "/user/delete",
		icon: Trash,
	},
];

export const offerData = [
	{
		image: offer1,
		title: "Daily 50 Lucky Winners get a Free Stay",
		description: "Valid till: 15 Nov",
		href: "/offer-detail",
	},
	{
		image: offer4,
		title: "Up to 60% OFF",
		description: "On Hotel Bookings Online",
		href: "/offer-detail",
	},
	{
		image: offer3,
		title: "Book & Enjoy",
		description: "20% Off on the best available room rate",
		href: "/offer-detail",
	},
	{
		image: offer2,
		title: "Hot Summer Nights",
		description: "Up to 3 nights free!",
		href: "/offer-detail",
	},
];

export const specialOffersData = [
	{
		id: 1,
		brand: "ProNature",
		logo: specialoffer01,
		flatLabel: "Flat",
		offer: "$899",
		description: "On Domestic Flights",
		coupon: "8B99OFF",
		bg: "bg-emerald-50",
	},
	{
		id: 2,
		brand: "Snowflake",
		logo: specialoffer02,
		flatLabel: "Flat",
		offer: "13%",
		description: "On Domestic Flights",
		coupon: "13POT7F",
		bg: "bg-rose-50",
	},
	{
		id: 3,
		brand: "Mindfulness",
		logo: specialoffer03,
		flatLabel: "Flat",
		offer: "$2,400",
		description: "On International Flights",
		coupon: "LOG165F",
		bg: "bg-cyan-50",
	},
];

export const featuredHotelsData = [
	{
		location: "New York",
		image: feturedHotel01,
		name: "Baga Comfort",
		price: 455,
		ratings: 4.5,
		href: "/hotels.details",
	},
	{
		location: "California",
		image: feturedHotel02,
		name: "New Apollo Hotel",
		price: 585,
		ratings: 4.8,
		href: "/hotels.details",
	},
	{
		location: "Los Angeles",
		image: feturedHotel03,
		name: "New Age Hotel",
		price: 385,
		ratings: 4.6,
		href: "/hotels.details",
	},
	{
		location: "Chicago",
		image: feturedHotel04,
		name: "Helios Beach Resort",
		price: 665,
		ratings: 4.8,
		href: "/hotels.details",
	},
];

export const toursPackagesData = [
	{
		location: "Lombok, Indonesia",
		image: package01,
		tag: "Adventure",
		price: 1385,
		ratings: 4.3,
		days: "6 Days / 5 Nights",
		href: "/tours",
	},
	{
		location: "Northern Lights Escape",
		image: package02,
		tag: "History",
		price: 2569,
		ratings: 4.5,
		days: "8 Days / 7 Nights",
		href: "/tours",
	},
	{
		location: "Essential Egypt",
		image: package03,
		tag: "Desert",
		price: 1885,
		ratings: 4.2,
		days: "9 Days / 8 Nights",
		href: "/tours",
	},
	{
		location: "Phi Phi Islands",
		image: package04,
		tag: "Beach",
		price: 3585,
		ratings: 4.6,
		days: "9 Days / 8 Nights",
		href: "/tours",
	},
];

export const destinationsData = [
	{
		location: "Thailand",
		image: destination01,
		next: "The next flight is on 26th Dec",
		ratings: 4.5,
		href: "hotels",
	},
	{
		location: "Hong Kong",
		image: destination02,
		next: "Daily 1 flight",
		ratings: 4.8,
		href: "hotels",
	},
	{
		location: "Maldives",
		image: destination03,
		next: "2 flights every week",
		ratings: 4.6,
		href: "hotels",
	},
	{
		location: "Switzerland",
		image: destination04,
		next: "Filling fast, next available flight on 2nd Oct",
		ratings: 4.8,
		href: "hotels",
	},
];

export const topLinks = [
	"Flights",
	"Hotels",
	"Tour",
	"Cabs",
	"About",
	"Contact us",
	"Blogs",
	"Services",
	"Detail page",
	"Policy",
	"Testimonials",
	"Newsletters",
	"Podcasts",
	"Protests",
	"News",
	"Cyber",
	"Education",
	"Sports",
	"Tech and Auto",
	"Opinion",
	"Share Market",
];

export const footerColumns = [
	{
		title: "Pages",
		links: ["About us", "Contact us", "News and Blog", "Meet a Team"],
	},
	{
		title: "Link",
		links: [
			"Sign up",
			"Sign in",
			"Privacy Policy",
			"Terms",
			"Cookie",
			"Support",
		],
	},
	{
		title: "Global Site",
		links: ["India", "California", "Indonesia", "Canada", "Malaysia"],
	},
	{
		title: "Booking",
		links: ["Hotel", "Flight", "Tour", "Cab"],
	},
];

export const socialLinks = [
	{
		icon: Facebook,
		className: "bg-blue-500 hover:bg-blue-500/80",
	},
	{
		icon: Instagram,
		className: "bg-pink-500 hover:bg-pink-500/80",
	},
	{
		icon: Twitter,
		className: "bg-sky-500 hover:bg-sky-500/80",
	},
	{
		icon: Linkedin,
		className: "bg-blue-500 hover:bg-blue-500/80",
	},
];

export const exploreNearbyData = [
	{
		id: 1,
		name: "San Francisco",
		driveTime: "13 mins drive",
		image: hotel01,
	},
	{
		id: 2,
		name: "Los Angeles",
		driveTime: "25 mins drive",
		image: hotel02,
	},
	{
		id: 3,
		name: "Miami",
		driveTime: "45 mins drive",
		image: hotel03,
	},
	{
		id: 4,
		name: "Sanjosh",
		driveTime: "55 mins drive",
		image: hotel04,
	},
	{
		id: 5,
		name: "New York",
		driveTime: "1 hour drive",
		image: hotel05,
	},
	{
		id: 6,
		name: "North Justen",
		driveTime: "2 hours drive",
		image: hotel06,
	},
	{
		id: 7,
		name: "Rio",
		driveTime: "20 mins drive",
		image: hotel07,
	},
	{
		id: 8,
		name: "Las Vegas",
		driveTime: "3 hours drive",
		image: hotel08,
	},
	{
		id: 9,
		name: "Texas",
		driveTime: "55 mins drive",
		image: hotel09,
	},
	{
		id: 10,
		name: "Chicago",
		driveTime: "13 mins drive",
		image: hotel10,
	},
	{
		id: 11,
		name: "New Keagan",
		driveTime: "35 mins drive",
		image: hotel11,
	},
	{
		id: 12,
		name: "Oslo",
		driveTime: "1 hour 13 mins drive",
		image: hotel12,
	},
];

export const brandData = [
	{
		id: 1,
		image: brand01,
	},
	{
		id: 2,
		image: brand02,
	},
	{
		id: 3,
		image: brand03,
	},
	{
		id: 4,
		image: brand04,
	},
	{
		id: 5,
		image: brand05,
	},
	{
		id: 6,
		image: brand06,
	},
];

export const teamData = [
	{
		id: 1,
		image: team01,
		name: "Dennis Barrett",
		role: "UK Tourist Guide",
	},
	{
		id: 2,
		image: team02,
		name: "Jacqueline Miller",
		role: "Us Tourist Guide",
	},
	{
		id: 3,
		image: team03,
		name: "Larry Lawson",
		role: "Editor in Chief",
	},
	{
		id: 4,
		image: team04,
		name: "Louis Ferguson",
		role: "CEO & Founder",
	},
];

export const blogsData = [
	{
		id: 1,
		title: "10 Ways on How to Improve your Hotel Operations",
		image: blog01,
		featured: true,
	},
	{
		id: 2,
		title: "Story of water world adventure",
		author: "Jacqueline Miller",
		image: blog02,
	},
	{
		id: 3,
		title: "How Hotel Technology Can Help Small Hotel Businesses",
		author: "Frances Guerrero",
		image: blog03,
	},
	{
		id: 4,
		title: "Hotel Service - Become a Guide for Your Guests",
		author: "Louis Ferguson",
		image: blog04,
	},
];

export const momentsData = [
	{
		id: 1,
		image: moment01,
	},
	{
		id: 2,
		image: moment02,
	},
	{
		id: 3,
		image: moment03,
	},
	{
		id: 4,
		image: moment04,
	},
	{
		id: 5,
		image: moment05,
	},
	{
		id: 6,
		image: moment06,
	},
	{
		id: 7,
		image: moment07,
	},
	{
		id: 8,
		image: moment08,
	},
];

export const topCategoriesData = [
	{
		id: 1,
		name: "Beach",
		places: "4568 places",
		image: category01,
	},
	{
		id: 2,
		name: "Heritage",
		places: "2845 places",
		image: category02,
	},
	{
		id: 3,
		name: "Desert",
		places: "1587",
		image: category03,
	},
	{
		id: 4,
		name: "Tower",
		places: "986 places",
		image: category04,
	},
	{
		id: 5,
		name: "Mountain",
		places: "786 places",
		image: category05,
	},
	{
		id: 6,
		name: "Safari",
		places: "568 places",
		image: category06,
	},
	{
		id: 7,
		name: "Temple",
		places: "256 places",
		image: category07,
	},
	{
		id: 8,
		name: "Festival",
		places: "654 places",
		image: category08,
	},
];

export const faqData = [
	{
		id: 1,
		question: "How Does it Work?",
		answer:
			"Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
	},
	{
		id: 2,
		question: "What are monthly tracked users?",
		answer:
			"Monthly tracked users are unique users who interact with your product within a given month. This metric helps measure engagement and growth trends.",
	},
	{
		id: 3,
		question: "What if I go with my prepaid monthly",
		answer:
			"If you choose a prepaid monthly plan, your services remain active until the plan expires, regardless of usage limits.",
	},
	{
		id: 4,
		question: "What's the difference between cabs and taxi",
		answer:
			"Cabs are typically app-based ride services, while taxis are traditionally hailed on the street or booked via dispatch.",
	},
	{
		id: 5,
		question: "How can I check the fare for my Booking ride?",
		answer:
			"You can view the estimated fare before confirming your ride directly in the booking flow.",
	},
	{
		id: 6,
		question: "Do and Don'ts – Tips for a Safe Trip",
		answer:
			"Always verify driver details, wear seat belts, and avoid sharing sensitive information during your ride.",
	},
];

export const awesomeVehiclesData = [
	{
		id: 1,
		name: "Sedan",
		seats: "(8 Sedans)",
		image: cab01,
	},
	{
		id: 2,
		name: "Micro",
		seats: "(8 Micros)",
		image: cab02,
	},
	{
		id: 3,
		name: "Micro",
		seats: "(8 Micros)",
		image: cab03,
	},
	{
		id: 4,
		name: "CUV",
		seats: "(4 CUVs)",
		image: cab04,
	},
	{
		id: 5,
		name: "Pick up",
		seats: "(3 Pick ups)",
		image: cab05,
	},
	{
		id: 6,
		name: "Coupe",
		seats: "(9 Coupes)",
		image: cab06,
	},
];

export const whyChooseUsData = [
	{
		id: 1,
		title: "Advance Booking",
		description:
			"Happiness prosperous impression had conviction For every delay in they Extremity now.",
		icon: Zap,
		bg: "bg-indigo-100",
		color: "text-indigo-600",
	},
	{
		id: 2,
		title: "Economical Trip",
		description:
			"Extremity now strangers contained breakfast him discourse additions Sincerity.",
		icon: Leaf,
		bg: "bg-emerald-100",
		color: "text-emerald-600",
	},
	{
		id: 3,
		title: "Secure and Safer",
		description:
			"Perpetual extremity now strangers contained breakfast him discourse additions.",
		icon: ShieldCheck,
		bg: "bg-yellow-100",
		color: "text-yellow-600",
	},
	{
		id: 4,
		title: "Vehicle Options",
		description:
			"The Prosperous impression had conviction For every delay in they Extremity now.",
		icon: Car,
		bg: "bg-rose-100",
		color: "text-rose-600",
	},
	{
		id: 5,
		title: "Cab Entertainment",
		description:
			"Extremity now strangers contained breakfast him discourse additions Sincerity.",
		icon: Wifi,
		bg: "bg-orange-100",
		color: "text-orange-600",
	},
	{
		id: 6,
		title: "Polite Driver",
		description:
			"Perpetual extremity now strangers contained breakfast him discourse additions.",
		icon: Accessibility,
		bg: "bg-cyan-100",
		color: "text-cyan-600",
	},
];

export const hotelDetailData: THotelDetail = {
	hotel_id: 10004,
	name: "Courtyard by Marriott New York",
	address: "9959 W Century Blvd, Los Angeles",
	city: "New York",
	country: "United States",
	latitude: 40.758,
	longitude: -73.9855,
	star_rating: 5,
	checkin: { from: "3:00 PM", to: "12:00 AM" },
	checkout: { from: "12:00 AM", to: "11:00 AM" },
	price_from: 3500,
	currency: "USD",
	description:
		"Departure defective arranging rapturous did believe him all had supported. Departure defective arranging rapturous did believe him all had supported. Water dried point her she threw took. Departure defective arranging rapturous did believe him all had supported. Departure defective arranging rapturous did believe him all had supported. Departure defective arranging rapturous did believe him all had supported did believe him all had. Departure defective arranging rapturous did believe him all had supported.",
	description_highlights: [
		"Every hotel staff to have proper PPT kit for COVID-19.",
		"Every staff member wears face masks and gloves at all service times.",
		"Hotel staff ensures to maintain social distancing at all times.",
		"The hotel has in-room dining options available.",
	],
	facilities: [
		{
			facilitytype_name: "Activities",
			facilities: [
				{ name: "Swimming pool" },
				{ name: "Spa" },
				{ name: "Kids' play area" },
				{ name: "Gym" },
			],
		},
		{
			facilitytype_name: "Services",
			facilities: [
				{ name: "Dry cleaning" },
				{ name: "Room service" },
				{ name: "Special service" },
				{ name: "Waiting Area" },
				{ name: "Souvenir smoking area" },
				{ name: "Concierge" },
				{ name: "Laundry facilities" },
				{ name: "Ironing Service" },
				{ name: "Lift" },
			],
		},
		{
			facilitytype_name: "Payment Method",
			facilities: [
				{ name: "Credit card (Visa, Master card)" },
				{ name: "Cash" },
				{ name: "Debit Card" },
			],
		},
		{
			facilitytype_name: "Safety & Security",
			facilities: [{ name: "Doctor on Call" }],
		},
	],
	languages: ["English", "Spanish", "Hindi"],
	payment_methods: ["Visa", "Mastercard", "Cash", "Debit Card"],
	policies: [
		"This is a family farmhouse, hence we request you to not budge.",
		"Smoking and smoking within controlled limits are permitted at the farmhouse, but please do not create a mess or nuisance at the house.",
		"Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.",
		"For any update, the customer shall pay applicable cancellation/modification charges.",
		"Check-in 1:00 pm - 9:00 pm",
		"Check-out 9:00 am",
		"Self check-in with building staff",
		"No pets",
		"No parties or events",
		"Smoking is allowed",
	],
	photos: [
		{
			photo_id: 1,
			url_max:
				"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
			url_square60:
				"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=60&q=80",
			tags: ["exterior", "pool"],
		},
		{
			photo_id: 2,
			url_max:
				"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
			url_square60:
				"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=60&q=80",
			tags: ["room", "bedroom"],
		},
		{
			photo_id: 3,
			url_max:
				"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
			url_square60:
				"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=60&q=80",
			tags: ["bathroom"],
		},
		{
			photo_id: 4,
			url_max:
				"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
			url_square60:
				"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=60&q=80",
			tags: ["room", "luxury"],
		},
		{
			photo_id: 5,
			url_max:
				"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
			url_square60:
				"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=60&q=80",
			tags: ["exterior", "pool"],
		},
	],
	rooms: [
		{
			room_id: "room_001",
			room_name: "Luxury Room with Balcony",
			photos: [
				{
					url_original:
						"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
				},
			],
			highlights: [
				{ icon: "ac", translated_name: "Air Conditioning" },
				{ icon: "wifi", translated_name: "Free WiFi" },
				{ icon: "kitchen", translated_name: "Kitchen" },
				{ icon: "tv", translated_name: "Flat-screen TV" },
			],
			bed_configurations: [{ bed_types: [{ name: "King Bed", count: 1 }] }],
			private_bathroom_count: 1,
			nr_adults: 2,
			price_breakdown: {
				gross_price: 750,
				currency: "USD",
				strikethrough_price: 950,
			},
			free_cancellation: true,
			free_cancellation_until: "Jan 2025",
			breakfast_included: false,
			url: "https://www.booking.com/hotel/us/courtyard-marriott-new-york.html",
		},
		{
			room_id: "room_002",
			room_name: "Deluxe Pool View with Breakfast",
			photos: [
				{
					url_original:
						"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80",
				},
			],
			highlights: [
				{ icon: "ac", translated_name: "Air Conditioning" },
				{ icon: "wifi", translated_name: "Free WiFi" },
				{ icon: "breakfast", translated_name: "Breakfast" },
				{ icon: "pool", translated_name: "Pool View" },
			],
			bed_configurations: [{ bed_types: [{ name: "Queen Bed", count: 2 }] }],
			private_bathroom_count: 1,
			nr_adults: 3,
			price_breakdown: {
				gross_price: 750,
				currency: "USD",
				strikethrough_price: 990,
			},
			free_cancellation: false,
			breakfast_included: true,
			url: "https://www.booking.com/hotel/us/courtyard-marriott-new-york.html",
		},
		{
			room_id: "room_003",
			room_name: "Presidential Suite",
			photos: [
				{
					url_original:
						"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80",
				},
			],
			highlights: [
				{ icon: "ac", translated_name: "Air Conditioning" },
				{ icon: "wifi", translated_name: "Free WiFi" },
				{ icon: "kitchen", translated_name: "Full Kitchen" },
				{ icon: "bathtub", translated_name: "Jacuzzi" },
			],
			bed_configurations: [
				{
					bed_types: [
						{ name: "King Bed", count: 1 },
						{ name: "Sofa Bed", count: 1 },
					],
				},
			],
			private_bathroom_count: 2,
			nr_adults: 4,
			price_breakdown: {
				gross_price: 1450,
				currency: "USD",
				strikethrough_price: 1800,
			},
			free_cancellation: true,
			free_cancellation_until: "Feb 2025",
			breakfast_included: true,
			url: "https://www.booking.com/hotel/us/courtyard-marriott-new-york.html",
		},
	],
	review_scores: {
		review_score: 8.9,
		review_score_word: "Superb",
		review_count: 122,
		score_breakdown: {
			staff: 9.2,
			facilities: 8.8,
			cleanliness: 9.1,
			comfort: 9.0,
			value_for_money: 8.5,
			location: 9.4,
		},
		percentage_breakdown: {
			score_10: 95,
			score_9: 75,
			score_8: 60,
			score_7: 30,
			score_6: 15,
		},
	},
	reviews: [
		{
			review_id: "rv_001",
			reviewer: {
				name: "Jacqueline Miller",
				country_flag_url: "https://flagcdn.com/w40/us.png",
				helpful_vote_count: 8,
			},
			date: "August 2024 · 2 Reviews written",
			pros: "Handsome not debating an dwelling apt material. As sure fixed he verse most. Object detect related so returns we private removed. Moderate do subjects to distance.",
			cons: "Nothing to complain about. Everything was perfect!",
			average_score: 8.2,
			review_photos: [
				{
					url_max300:
						"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80",
				},
				{
					url_max300:
						"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&q=80",
				},
			],
			hotel_response:
				"Su direction frequently do not inaccurate us unaffected adulterous everything. Thank you for your kind words!",
		},
		{
			review_id: "rv_002",
			reviewer: {
				name: "Dennis Barrett",
				country_flag_url: "https://flagcdn.com/w40/gb.png",
				helpful_vote_count: 4,
			},
			date: "August 2024 · 3 Reviews written",
			pros: "Departure defective arranging rapturous did believe him. Felt smells halls right away if on such. Large above be to means.",
			cons: "Dashwood does provide stronger to the customer service team.",
			average_score: 7.6,
			review_photos: [],
		},
		{
			review_id: "rv_003",
			reviewer: {
				name: "Sophia Turner",
				country_flag_url: "https://flagcdn.com/w40/au.png",
				helpful_vote_count: 12,
			},
			date: "July 2024 · 7 Reviews written",
			pros: "Absolutely stunning hotel. The pool view from our room was breathtaking and the breakfast spread was incredible.",
			cons: "Minor issue with AC noise at night, but staff fixed it immediately.",
			average_score: 9.4,
			review_photos: [
				{
					url_max300:
						"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&q=80",
				},
			],
		},
	],
};
