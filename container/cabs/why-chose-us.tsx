import { whyChooseUsData } from "@/constants";

export default function WhyChooseUs() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex items-center justify-center">
				<div className="w-[75%] flex flex-col gap-5">
					<h1 className="text-black heading font-bold leading-tight text-center">
						Why Choose Us
					</h1>
					<div className="w-full grid grid-cols-3 gap-8">
						{whyChooseUsData.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.id}
									className="w-full group relative bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
									<div
										className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
										<Icon className={`w-5 h-5 ${item.color}`} />
									</div>
									<h3 className="text-xl font-semibold text-black mb-2">
										{item.title}
									</h3>
									<p className="text-base text-gray-600 leading-relaxed">
										{item.description}
									</p>
									<span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ring-1 ring-black/5" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
