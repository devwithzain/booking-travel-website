import Link from "next/link";
import Image from "next/image";
import { error } from "@/public";

export default function NotFound() {
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<div className="flex items-center justify-center">
				<div className="w-full flex flex-col items-center">
					<Image
						alt="404"
						width={400}
						height={400}
						src={error}
						className="w-full h-full object-cover"
					/>
					<h1 className="text-7xl font-bold text-primary mb-0">404</h1>
					<h2 className="text-2xl font-bold mt-2">
						Oh no, something went wrong!
					</h2>
					<p className="mb-6 text-gray-500 mt-4">
						Either something went wrong or this page doesn&apos;t exist anymore.
					</p>
					<Link
						href="/"
						className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors">
						Take me to Homepage
					</Link>
				</div>
			</div>
		</section>
	);
}
