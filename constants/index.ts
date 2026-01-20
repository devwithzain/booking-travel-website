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
	car,
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
	smile,
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
} from "lucide-react";

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
