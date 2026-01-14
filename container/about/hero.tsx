import {
	about01,
	about02,
	about03,
	globalCustomers,
	happyCustomers,
	subscribers,
} from "@/public";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full min-h-screen padding-x padding-y">
			<div className="flex flex-col gap-10">
				<div className="w-full flex flex-col items-center justify-center gap-5">
					<h1 className="text-6xl font-bold text-black leading-tight text-center tracking-tight">
						If You Want To See The World <br /> We Will Help You
					</h1>
					<p className="text-lg text-muted-foreground text-center">
						Passage its ten led hearted removal cordial. Preference any
						astonished unreserved Mrs. Prosperous <br /> understood Middletons.
						Preference for any astonished unreserved.
					</p>
					<div className="w-full flex items-center justify-center gap-4">
						<div className="flex items-center gap-3 p-2.5 rounded-xl shadow-[0px_0px_40px_rgba(29,58,83,0.1)]">
							<Image
								src={globalCustomers}
								alt="globalCustomers"
								width={25}
								height={25}
							/>
							<p className="text-base text-black font-medium leading-tight">
								14K+ Global Customers
							</p>
						</div>
						<div className="flex items-center gap-3 p-2.5 rounded-xl shadow-[0px_0px_40px_rgba(29,58,83,0.1)]">
							<Image
								src={happyCustomers}
								alt="happyCustomers"
								width={25}
								height={25}
							/>
							<p className="text-base text-black font-medium leading-tight">
								10K+ Happy Customers
							</p>
						</div>
						<div className="flex items-center gap-3 p-2.5 rounded-xl shadow-[0px_0px_40px_rgba(29,58,83,0.1)]">
							<Image
								src={subscribers}
								alt="subscribers"
								width={25}
								height={25}
							/>
							<p className="text-base text-black font-medium leading-tight">
								1M+ Subscribers
							</p>
						</div>
					</div>
				</div>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-2 lg:grid-cols-2 gap-6 items-center">
						<div className="w-full h-[360px] sm:h-[380px] lg:h-full overflow-hidden rounded-2xl">
							<Image
								src={about01}
								alt="about01"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col gap-6">
							<div className="w-fit h-[280px] overflow-hidden rounded-2xl">
								<Image
									src={about02}
									alt="about02"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-full h-[380px] sm:h-[260px] overflow-hidden rounded-2xl">
								<Image
									src={about03}
									alt="about03"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
