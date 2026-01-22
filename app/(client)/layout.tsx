import { AppLink, Footer, NavBar, NewsLetter } from "@/components/index";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body>
			<NavBar />
			{children}
			<NewsLetter />
			<AppLink />
			<Footer />
		</body>
	);
}
