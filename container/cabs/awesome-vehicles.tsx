import Image from "next/image";
import { awesomeVehiclesData } from "@/constants";

export default function AwesomeVehicles() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[70%] flex flex-col gap-5">
					<h1 className="text-black heading font-bold leading-tight text-center">
						Our Awesome Vehicles
					</h1>
					<div className="flex items-center justify-center gap-4">
						{awesomeVehiclesData.map((item) => (
							<div
								key={item.id}
								className="px-10 py-5 rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col gap-3 group">
								<div className="bg-[#f5f5f5] rounded-full h-[120px] w-[120px] p-5 flex items-center justify-center">
									<Image
										src={item.image}
										alt={item.name}
										width={500}
										height={500}
										className="w-full object-cover"
									/>
								</div>
								<div className="w-full flex flex-col gap-1 items-center justify-center">
									<h2 className="text-xl font-bold text-black group-hover:text-[#5143d9] transition-all duration-300">
										{item.name}
									</h2>
									<p className="text-base text-[#666666] leading-tight font-normal">
										{item.seats}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
