"use client";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { avatar, logo } from "@/public";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, Bell, LogOut } from "lucide-react";
import { bookingHomeMenuItems, userProfileMenuItems } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavBar() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"w-full padding-x py-4 sticky top-0 z-100 transition-all duration-300",
				isScrolled
					? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-zinc-950/80"
					: "bg-transparent",
			)}>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Image
						src={logo}
						alt="logo"
						width={120}
						height={120}
						className="object-cover"
					/>
					<nav className="flex gap-6">
						{[
							{ label: "Home", href: "/" },
							{ label: "About", href: "/about" },
							{ label: "Services", href: "/services" },
							{ label: "Pricing", href: "/pricing" },
							{ label: "Contact", href: "/contact" },
						].map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className={cn(
									"flex items-center gap-2 text-base font-medium transition-colors hover:text-primary",
									pathname === item.href
										? "text-primary"
										: "text-muted-foreground",
								)}>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<nav className="flex gap-6">
					{bookingHomeMenuItems.map((item) => (
						<Link
							key={item.key}
							href={item.href}
							className={cn(
								"flex items-center gap-2 text-base font-medium transition-colors rounded-md",
								pathname === item.href
									? "text-[#5143d9] bg-[#5143d91a] px-2.5 py-1"
									: "text-muted-foreground",
							)}>
							<Image
								width={20}
								height={20}
								src={item.icon}
								alt={item.label}
								className={cn(
									"w-4 h-4 object-cover",
									pathname === item.href && "fill-[#000456]",
								)}
							/>
							{item.label}
						</Link>
					))}
					<div className="flex items-center gap-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="relative">
									<Bell className="h-5 w-5 text-muted-foreground" />
									<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
									<span className="sr-only">Notifications</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="w-80">
								<DropdownMenuLabel>Notifications</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<div className="p-4 text-center text-sm text-muted-foreground">
									No new notifications
								</div>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div>
									<Button variant="ghost">
										<Image
											src={avatar}
											alt="avatar"
											width={30}
											height={30}
											className="w-full object-cover rounded-lg"
										/>
									</Button>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="w-56">
								<DropdownMenuLabel>
									<div className="flex flex-col space-y-1">
										<p className="text-sm font-medium leading-none">
											Lori Ferguson
										</p>
										<p className="text-xs leading-none text-muted-foreground">
											example@gmail.com
										</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{userProfileMenuItems.map((item) => (
									<DropdownMenuItem
										key={item.key}
										asChild>
										<Link
											href={item.href}
											className="cursor-pointer">
											<item.icon className="mr-2 h-4 w-4" />
											<span>{item.label}</span>
										</Link>
									</DropdownMenuItem>
								))}
								<DropdownMenuSeparator />
								<DropdownMenuItem className="text-red-600 focus:text-red-600">
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<div className="sm:block xm:block hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="sm:hidden block">
										<Menu className="h-5 w-5" />
										<span className="sr-only">Toggle menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent side="right">
									<div className="flex flex-col gap-6 mt-6">
										{bookingHomeMenuItems.map((item) => (
											<Link
												key={item.key}
												href={item.href}
												className="flex items-center gap-2 text-lg font-medium">
												<Image
													src={item.icon}
													alt={item.label}
													width={20}
													height={20}
													className="object-cover"
												/>
												{item.label}
											</Link>
										))}
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</nav>
			</div>
		</nav>
	);
}
