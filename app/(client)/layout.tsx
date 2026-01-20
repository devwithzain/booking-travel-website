import { AppLink, Footer, NavBar } from "@/components/index";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body>
			<NavBar />
			{children}
			<AppLink />
			<Footer />
		</body>
	);
}
