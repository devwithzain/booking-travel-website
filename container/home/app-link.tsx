import Link from "next/link";
import Image from "next/image";
import { appStore, googlePlay } from "@/public";

export default function AppLink() {
	return (
		<div className="w-full bg-[#F5F5F6] padding-x padding-y">
			<div className="w-full flex justify-between gap-5">
				<div className="flex items-center gap-5">
					<div className="max-w-md flex items-center gap-5 p-6 rounded-2xl bg-white">
						<svg
							className="svg-inline--fa fa-hand-holding-heart text-black w-16 h-16"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="hand-holding-heart"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512">
							<path
								className=""
								d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
							/>
						</svg>
						<div className="flex flex-col gap-4">
							<h1 className="text-lg text-black font-semibold leading-tight">
								24x7 Help
							</h1>
							<p className="text-base font-normal text-[#747579]">
								If we fall short of your expectation in any way, let us know.
							</p>
						</div>
					</div>
					<div className="max-w-md flex items-center gap-5 p-6 rounded-2xl bg-white">
						<svg
							className="svg-inline--fa fa-hand-holding-heart text-black w-16 h-16"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="hand-holding-heart"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512">
							<path
								className=""
								d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
							/>
						</svg>
						<div className="flex flex-col gap-4">
							<h1 className="text-lg text-black font-semibold leading-tight">
								Payment Trust
							</h1>
							<p className="text-base font-normal text-[#747579]">
								All refunds come with no questions asked guarantee.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<h5 className="text-2xl leading-tight font-bold text-black">
						Download app
					</h5>
					<div className="flex items-center gap-4">
						<div>
							<Link href="">
								<Image
									src={googlePlay}
									alt="googleImg"
									width={150}
									height={150}
								/>
							</Link>
						</div>
						<div>
							<Link href="">
								<Image
									src={appStore}
									alt="appStore"
									width={150}
									height={150}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
