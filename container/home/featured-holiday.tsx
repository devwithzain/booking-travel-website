import Image from "next/image";
import { Star } from "lucide-react";
import { featuresData } from "@/constants";
import { homeAbout, dotsbubbles, thumb } from "@/public";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FeaturedHoliday() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="grid grid-cols-2 gap-28 items-center">
				<div className="relative">
					<div className="absolute -top-8 -left-8 z-50">
						<svg
							width="77px"
							fill="#f7c32e"
							height="77px">
							<path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
						</svg>
					</div>
					<div className="w-full relative z-10 rounded-xl overflow-hidden shadow-xl">
						<Image
							src={homeAbout}
							alt="homeAbout"
							width={800}
							height={800}
							className="w-full h-full object-cover rounded-xl"
						/>
					</div>
					<div className="w-[350px] absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
						<div className="flex flex-col items-center gap-4">
							<div className="absolute -left-5 -top-3">
								<Image
									src={thumb}
									alt="icon"
									width={40}
									height={40}
								/>
							</div>
							<div className="w-full flex flex-col gap-3">
								<div className="w-full flex items-center justify-between">
									<h6 className="text-base font-normal text-black leading-tight">
										Client
									</h6>
									<h6 className="text-base font-normal text-black leading-tight">
										Rating
									</h6>
								</div>
								<div className="w-full flex items-start justify-between">
									<div className="w-full flex -space-x-3">
										{[1, 2, 3, 4].map((i) => (
											<Avatar
												key={i}
												className="w-12 h-12 border-2 border-white">
												<AvatarImage src={`/assets/images/avatar/0${i}.jpg`} />
												<AvatarFallback>U</AvatarFallback>
											</Avatar>
										))}
										<div className="w-12 h-12 rounded-full bg-primary text-sm text-white flex items-center justify-center border-2 border-white">
											1K+
										</div>
									</div>
									<div>
										<div className="flex items-center gap-1">
											<span className="font-bold text-lg">4.5</span>
											<Star className="w-5 h-5 text-yellow-400 fill-current" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-[80%] h-[80%] absolute -bottom-14 -right-14 z-0">
						<Image
							src={dotsbubbles}
							alt="About"
							width={1600}
							height={1600}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className="heading leading-tight text-black font-bold">
						The Best Holidays <br /> Start Here!
					</h2>
					<p className="paragraph text-muted-foreground mb-10">
						Book your hotel with us and don&apos;t forget to grab an awesome
						hotel deal to save massive on your stay.
					</p>
					<div className="w-full grid grid-cols-2 gap-8">
						{featuresData.map((feature, idx) => (
							<div key={idx}>
								<div
									className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bgColor} ${feature.color}`}>
									<feature.icon className="w-6 h-6" />
								</div>
								<h5 className="font-bold text-2xl leading-tight mb-2">
									{feature.title}
								</h5>
								<p className="paragraph text-muted-foreground font-normal">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
