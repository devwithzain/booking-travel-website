import Image from "next/image";
import { topCategoriesData } from "@/constants";

export default function TopCategories() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex flex-col items-center gap-14">
				<div>
					<h2 className="heading leading-tight text-black font-bold">
						Top Categories
					</h2>
				</div>
				<div className="w-[80%] grid grid-cols-4 gap-10">
					{topCategoriesData.map((item, idx) => (
						<div
							key={idx}
							className="w-full h-full flex items-center gap-4 text-center group cursor-pointer">
							<div className="overflow-hidden rounded-md">
								<Image
									src={item.image}
									alt="clients-images"
									width={150}
									height={150}
									className="w-[150px] h-[150px] object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="flex flex-col gap-1 items-start">
								<h2 className="text-xl leading-tight text-black font-bold">
									{item.name}
								</h2>
								<p className="text-base font-normal text-black">
									{item.places}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
