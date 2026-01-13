import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { topLinks, footerColumns, socialLinks } from "@/constants";
import { expresscard, logoLight, mastercard, paypal, visa } from "@/public";

export default function Footer() {
	return (
		<footer className="w-full bg-[#0B0A12] padding-x pt-20">
			<div className="w-full flex justify-between gap-10">
				<div className="w-full space-y-6">
					<Image
						src={logoLight}
						alt="logo"
						width={200}
						height={200}
					/>
					<p className="max-w-sm text-[#c5c5c7] text-[16px]">
						Departure defective arranging rapturous did believe him all had
						supported.
					</p>
					<Link
						href="tel:+1234568963"
						className="flex items-center gap-2 text-[#c5c5c7] text-[16px]">
						<Phone className="w-5 h-5" />
						+1234 568 963
					</Link>
					<Link
						href="mailto:example@gmail.com"
						className="flex items-center gap-2 text-[#c5c5c7] text-[16px]">
						<Mail className="w-5 h-5" />
						example@gmail.com
					</Link>
				</div>
				<div className="w-full flex gap-5">
					{footerColumns.map((col, index) => (
						<div
							key={index}
							className="w-full">
							<h5 className="text-white text-xl font-bold mb-4">{col.title}</h5>
							<ul className="space-y-2">
								{col.links.map((link, idx) => (
									<li key={idx}>
										<Link
											href="#"
											className="text-[#c5c5c7] text-[16px] hover:text-[#5143d9] transition-colors">
											{link}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="space-y-10 mt-20">
				<div>
					<h3 className="text-white text-xl font-bold mb-4">Top Links</h3>
					<div className="flex flex-wrap gap-x-4 gap-y-2">
						{topLinks.map((link, index) => (
							<a
								key={index}
								href="#"
								className="text-[#c5c5c7] text-[16px] hover:text-[#5143d9] transition-colors">
								{link}
							</a>
						))}
					</div>
				</div>
				<div className="w-full flex justify-between gap-5">
					<div>
						<h5 className="text-white text-xl font-bold mb-4">
							Payment & Security
						</h5>
						<div className="flex gap-2">
							{[paypal, visa, mastercard, expresscard].map((img, index) => (
								<Image
									key={index}
									src={img}
									alt="payment"
									width={70}
									height={70}
								/>
							))}
						</div>
					</div>

					{/* Social */}
					<div>
						<h5 className="text-white text-xl font-bold mb-4">Follow us on</h5>
						<div className="flex gap-2">
							{socialLinks.map((item, index) => {
								const Icon = item.icon;
								return (
									<a
										key={index}
										href="#"
										className={`w-10 h-10 rounded flex items-center justify-center text-white transition-colors ${item.className}`}>
										<Icon size={20} />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between border-t border-zinc-800 py-5 mt-10">
				<p className="text-[#c5c5c7] text-[16px]">
					Copyrights ©{new Date().getFullYear()} Booking. All rights reserved.
				</p>
				<div className="flex gap-6">
					{["Privacy policy", "Terms and conditions", "Refund policy"].map(
						(item, index) => (
							<Link
								key={index}
								href="#"
								className="text-[#c5c5c7] text-[16px] hover:text-[#5143d9] transition-colors">
								{item}
							</Link>
						),
					)}
				</div>
			</div>
		</footer>
	);
}
