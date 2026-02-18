import { AppLink, Footer, NavBar, NewsLetter } from "@/components/index";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<NavBar />
			{children}
			<NewsLetter />
			<AppLink />
			<Footer />
		</div>
	);
}
