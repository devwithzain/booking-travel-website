import Image from "next/image";
import {
	avatar01,
	avatar02,
	avatar03,
	avatar04,
	client1,
	discover01,
	discover02,
	discover03,
} from "@/public";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Discover() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[80%] flex justify-between items-center gap-20">
					<div className="w-2/3 space-y-6">
						<h1 className="text-5xl text-black font-bold leading-tight">
							Discover the <br />
							best places to <br />
							visit <span className="inline-block text-primary">🔥</span>
						</h1>
						<div className="flex items-center justify-between space-x-4">
							<div className="w-full flex -space-x-4">
								{[avatar01, avatar02, avatar03, avatar04].map((i, idx) => (
									<Avatar
										key={idx}
										className="w-12 h-12 border-2 border-white">
										<AvatarImage src={i.src} />
										<AvatarFallback>U</AvatarFallback>
									</Avatar>
								))}
								<div className="w-12 h-12 rounded-full bg-primary text-sm text-white flex items-center justify-center border-2 border-white">
									1K+
								</div>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-2xl text-yellow-400">★</span>
								<span className="text-xl text-black leading-tight font-bold">
									4.5
								</span>
							</div>
						</div>
						<button className="inline-flex items-center px-6 py-3 bg-indigo-100 text-indigo-600 font-medium rounded-lg hover:bg-indigo-200 transition">
							Explore places
						</button>
					</div>
					<div className="w-full grid grid-cols-2 gap-5">
						<div className="relative">
							<Image
								width={420}
								height={420}
								src={discover01}
								alt="discover01"
								className="w-full h-[400px] rounded-xl object-cover"
							/>
							<div className="absolute bottom-10 left-6 right-6 bg-white rounded-xl shadow-lg p-2 flex items-center space-x-4">
								<Image
									width={420}
									height={420}
									src={client1}
									className="w-20 h-20 rounded-xl"
									alt="discover02"
								/>
								<div className="flex flex-col gap-3">
									<p className="text-sm text-[#666666] leading-tight font-normal">
										Farther-related bed and passage comfort civilly.
									</p>
									<p className="text-base font-semibold text-black leading-tight">
										Louis Ferguson
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col space-y-5">
							<Image
								width={420}
								height={420}
								src={discover02}
								alt="discover01"
								className="w-full h-60 rounded-xl object-cover"
							/>
							<Image
								width={420}
								height={420}
								src={discover03}
								alt="discover03"
								className="w-full h-60 rounded-xl object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
