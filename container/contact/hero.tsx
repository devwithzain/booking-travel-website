import { socialLinks } from "@/constants";

export default function Hero() {
	return (
		<section className="w-full padding-x padding-y mt-20">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex flex-col gap-5">
					<h1 className="text-6xl font-bold text-black leading-tight tracking-tight">
						Let&apos;s connect and get to know <br /> each other
					</h1>
					<p className="text-lg text-muted-foreground">
						Passage its ten led hearted removal cordial. Preference any
						astonished unreserved Mrs. Prosperous <br /> understood Middletons.
						Preference for any astonished unreserved.
					</p>
					<div className="w-full grid grid-cols-3 gap-8 pt-10">
						<div className="w-full group relative flex flex-col items-center justify-start gap-3 bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
							<div
								className={`w-14 h-14 rounded-full flex items-center justify-center bg-[#17a2b81a] leading-tight transition-transform duration-300 group-hover:scale-110`}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 16 16"
									fill="#17a2b8"
									role="img"
									focusable="false"
									className="fs-5">
									<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-black leading-tight">
								Call us
							</h3>
							<p className="text-base text-[#666666] leading-relaxed text-center">
								Imprudence attachment him his for sympathize. Large above be to
								means.
							</p>
							<div className="w-full flex items-center justify-center gap-4">
								<div className="p-1.5 rounded-md flex items-center bg-[#5143d91a]">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="#5143d9"
										role="img"
										focusable="false"
										className="me-1">
										<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
										<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
									</svg>
									<p className="text-[#5143d9] text-sm font-medium leading-tight">
										+123 456 7890
									</p>
								</div>
								<div className="p-1.5 rounded-md flex items-center bg-[#f5f5f6] border border-[#f5f5f6]">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										fill="currentColor"
										role="img"
										focusable="false"
										className="me-1">
										<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
									</svg>
									<p className="text-[#0b0a12] text-sm font-medium leading-tight">
										+(222)4567 586
									</p>
								</div>
							</div>
							<span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ring-1 ring-black/5" />
						</div>
						<div className="w-full group relative flex flex-col items-center justify-start gap-3 bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
							<div
								className={`w-14 h-14 rounded-full flex items-center justify-center bg-[#d6293e1a] leading-tight transition-transform duration-300 group-hover:scale-110`}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 16 16"
									fill="#d6293e"
									role="img"
									focusable="false"
									className="fs-5">
									<path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-black leading-tight">
								Email us
							</h3>
							<p className="text-base text-[#666666] leading-relaxed text-center">
								Large above be to means. Him his for sympathize.
							</p>
							<div className="w-full flex items-center justify-center gap-4">
								<div className="flex items-center gap-2 underline">
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										fill="#5143d9"
										role="img"
										focusable="false">
										<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
									</svg>
									<p className="text-[#5143d9] text-sm font-medium leading-tight">
										example@gmail.com
									</p>
								</div>
							</div>
							<span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ring-1 ring-black/5" />
						</div>
						<div className="w-full group relative flex flex-col items-center justify-start gap-3 bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
							<div
								className={`w-14 h-14 rounded-full flex items-center justify-center bg-[#fd7e141a] leading-tight transition-transform duration-300 group-hover:scale-110`}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 16 16"
									fill="#fd7e14"
									role="img"
									focusable="false"
									className="fs-5">
									<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-black leading-tight">
								Social media
							</h3>
							<p className="text-base text-[#666666] leading-relaxed text-center">
								Sympathize Large above be to means.
							</p>
							<div className="w-full flex items-center justify-center gap-4">
								<div className="flex gap-2">
									{socialLinks.map((item, index) => {
										const Icon = item.icon;
										return (
											<a
												key={index}
												href="#"
												className={`w-8 h-8 rounded flex items-center justify-center text-white transition-colors ${item.className}`}>
												<Icon size={18} />
											</a>
										);
									})}
								</div>
							</div>
							<span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ring-1 ring-black/5" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
