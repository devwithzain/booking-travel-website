import Link from "next/link";
import Image from "next/image";
import { TOfferCardProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

export default function OfferCard({ offer }: TOfferCardProps) {
	return (
		<Card className="w-full h-[150px] shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-2xl overflow-hidden bg-white p-0">
			<CardContent className="p-0 flex h-full">
				<div className="relative w-1/2 h-full shrink-0">
					<Image
						src={offer.image}
						alt={offer.title}
						fill
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-1/2 flex-1 p-5 flex flex-col justify-center gap-2">
					<Link
						href={offer.href}
						className="hover:text-primary transition-colors">
						<h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2">
							{offer.title}
						</h3>
					</Link>
					<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
						{offer.description}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
