import Image from "next/image";
import { teamData } from "@/constants";

export default function Story() {
	return (
		<div className="w-full padding-x py-10">
			<div className="max-w-5xl mx-auto flex flex-col gap-5">
				<h1 className="text-5xl font-bold text-black leading-tight tracking-tight">
					Our Story
				</h1>
				<p className="text-base text-muted-foreground font-medium">
					Founded in 2006, passage its ten led hearted removal cordial.
					Preference any astonished unreserved Mrs. Prosperous understood
					Middletons in conviction an uncommonly do. Supposing so be resolving
					breakfast am or perfectly. It drew a hill from me. Valley by oh twenty
					direct me so.
				</p>
				<p className="text-base text-muted-foreground">
					Water timed folly right aware if oh truth. Imprudence attachment him
					his for sympathize. Large above be to means. Dashwood does provide
					stronger is. Warrant private blushes removed an in equally totally if.
					Delivered dejection necessary objection do Mr prevailed. Mr feeling
					does chiefly cordial in do. ...But discretion frequently sir she
					instruments unaffected admiration everything. Meant balls it if up
					doubt small purse. Required his you put the outlived answered
					position. A pleasure exertion if believed provided to. All led out
					world this music while asked. Paid mind even sons does he door no.
					Attended overcame repeated it is perceived Marianne in. I think on
					style child of. Servants moreover in sensible it ye possible.
					Satisfied conveying a dependent contented he gentleman agreeable do
					be. Water timed folly right aware if oh truth. Imprudence attachment
					him his for sympathize. Large above be to means. Dashwood does provide
					stronger is. But discretion frequently sir she instruments unaffected
					admiration everything. Meant balls it if up doubt small purse.
					Required his you put the outlived answered position. I think on style
					child of. Servants moreover in sensible it ye possible. Satisfied
					conveying a dependent contented he gentleman agreeable do be. Warrant
					private blushes removed an in equally totally if. Delivered dejection
					necessary objection do Mr prevailed. Required his you put the outlived
					answered position. A pleasure exertion if believed provided to. All
					led out world this music while asked. Paid mind even sons does he door
					no. Attended overcame repeated it is perceived Marianne in. I think on
					style child of. Servants moreover in sensible it ye possible.
				</p>
			</div>
			<div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 py-10">
				<div className="w-full flex items-center justify-center gap-10">
					<div className="w-full flex flex-col gap-4">
						<div className="w-12 h-12 bg-[#fd7e14]/10 flex items-center justify-center rounded-lg">
							<svg
								className="svg-inline--fa fa-hotel fs-5 text-[#fd7e14]"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="hotel"
								role="img"
								width={20}
								height={20}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path
									className=""
									fill="currentColor"
									d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"></path>
							</svg>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-xl font-bold text-black leading-tight tracking-tight">
								Hotel Booking
							</h4>
							<p className="text-base text-muted-foreground">
								A pleasure exertion if believed provided to. All led out world
								this music while asked.
							</p>
						</div>
					</div>
					<div className="w-full flex flex-col gap-4">
						<div className="w-12 h-12 bg-[#0cbc87]/10 flex items-center justify-center rounded-lg">
							<svg
								className="svg-inline--fa fa-plane fs-5 text-[#0cbc87]"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="plane"
								role="img"
								width={20}
								height={20}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512">
								<path
									className=""
									fill="currentColor"
									d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"></path>
							</svg>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-xl font-bold text-black leading-tight tracking-tight">
								Flight Booking
							</h4>
							<p className="text-base text-muted-foreground">
								Warrant private blushes removed an in equally totally Objection
								do Mr prevailed.
							</p>
						</div>
					</div>
					<div className="w-full flex flex-col gap-4">
						<div className="w-12 h-12 bg-[#5143d9]/10 flex items-center justify-center rounded-lg">
							<svg
								className="svg-inline--fa fa-earth-americas fs-5 text-[#5143d9]"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="earth-americas"
								role="img"
								width={20}
								height={20}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path
									className=""
									fill="currentColor"
									d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
							</svg>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-xl font-bold text-black leading-tight tracking-tight">
								Tour Booking
							</h4>
							<p className="text-base text-muted-foreground">
								Dashwood does provide stronger is. But discretion frequently sir
								she instruments.
							</p>
						</div>
					</div>
					<div className="w-full flex flex-col gap-4">
						<div className="w-12 h-12 bg-[#17a2b8]/10 flex items-center justify-center rounded-lg">
							<svg
								className="svg-inline--fa fa-car fs-5 text-[#17a2b8]"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="car"
								role="img"
								width={20}
								height={20}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path
									className=""
									fill="currentColor"
									d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>
							</svg>
						</div>
						<div className="flex flex-col gap-2">
							<h4 className="text-xl font-bold text-black leading-tight tracking-tight">
								Hotel Booking
							</h4>
							<p className="text-base text-muted-foreground">
								A pleasure exertion if believed provided to. All led out world
								this music while asked.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col gap-5">
					<h1 className="text-5xl font-bold text-black leading-tight tracking-tight">
						Our Team
					</h1>
					<div className="w-full flex justify-between gap-5">
						{teamData.map((item) => (
							<div
								className="relative flex flex-col gap-2 group"
								key={item.id}>
								<Image
									src={item.image}
									alt="team01"
									width={300}
									height={300}
									className="object-cover rounded-xl"
								/>
								<h1 className="text-2xl font-bold text-black leading-tight tracking-tight">
									{item.name}
								</h1>
								<p className="text-base text-muted-foreground">{item.role}</p>
								<div className="bg-white absolute bottom-24 p-2 rounded-lg left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-5">
									<svg
										className="svg-inline--fa fa-facebook-f fa-brands fa-facebook-f text-[#5d82d1]"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="facebook-f"
										role="img"
										width={20}
										height={20}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 320 512">
										<path
											className=""
											fill="currentColor"
											d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
									</svg>
									<svg
										className="svg-inline--fa fa-instagram fa-brands fa-instagram text-instagram text-[#c22b72]"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="instagram"
										role="img"
										width={20}
										height={20}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512">
										<path
											className=""
											fill="currentColor"
											d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
									</svg>
									<svg
										className="svg-inline--fa fa-twitter fa-brands fa-twitter text-twitter text-[#40bff5]"
										aria-hidden="true"
										focusable="false"
										data-prefix="fab"
										data-icon="twitter"
										role="img"
										width={20}
										height={20}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path
											className=""
											fill="currentColor"
											d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
									</svg>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
