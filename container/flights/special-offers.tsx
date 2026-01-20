import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { specialOffersData } from "@/constants";

export default function SpecialOffers() {
	return (
		<div className="w-full padding-x pb-10">
			<div className="w-full flex items-center justify-center">
				<div className="w-[80%] relative group">
					<div className="overflow-hidden">
						<div className="grid grid-cols-3 gap-6 embla__container">
							{specialOffersData.map((item) => (
								<div
									key={item.id}
									className={`relative rounded-2xl p-6 flex flex-col justify-between ${item.bg}`}>
									<div className="flex items-center gap-3">
										<Image
											src={item.logo}
											alt={item.brand}
											className="h-8 w-auto"
											width={32}
											height={32}
										/>
									</div>
									<div className="mt-6">
										<p className="text-sm text-muted-foreground">
											{item.flatLabel}
										</p>
										<h3 className="text-3xl font-bold mt-1">{item.offer}</h3>
										<p className="text-sm mt-1 font-medium">
											{item.description}
										</p>
									</div>
									<div className="mt-8 flex items-center justify-between">
										<div className="bg-[#5143d91A] text-black text-lg border-2 border-dashed border-indigo-500 rounded-lg px-4 py-2 font-semibold">
											{item.coupon}
										</div>
										<button className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition">
											<ArrowRight className="h-5 w-5 text-black" />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
