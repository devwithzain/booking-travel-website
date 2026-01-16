import Image from "next/image";
import { exploreNearbyData } from "@/constants";

export default function ExploreNearby() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex flex-col items-center gap-14">
				<div>
					<h2 className="heading leading-tight text-black font-bold">
						Explore Nearby
					</h2>
				</div>
				<div className="w-full grid grid-cols-6 gap-20">
					{exploreNearbyData.map((item, idx) => (
						<div
							key={idx}
							className="w-full h-full space-y-2 text-center group cursor-pointer">
							<div className="overflow-hidden rounded-full aspect-square">
								<Image
									src={item.image}
									alt="clients-images"
									width={200}
									height={200}
									className="transition-transform duration-500 group-hover:scale-110 object-cover w-full h-full"
								/>
							</div>
							<h2 className="text-xl leading-tight text-black font-bold">
								{item.name}
							</h2>
							<p className="text-base font-normal text-black">
								{item.driveTime}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
