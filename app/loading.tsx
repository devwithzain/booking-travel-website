import { logo } from "@/public";
import Image from "next/image";

export default function Loading() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Image
				src={logo}
				alt="logo"
				width={400}
				height={400}
				className="object-cover"
			/>
		</div>
	);
}
