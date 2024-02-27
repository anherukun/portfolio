import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ['latin'],
})

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
	title: "Angel G Jimenez Reyes - Portfolio",
	description: "Este es mi CV, espero y nos contactemos pronto.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={poppins.className}>{children}</body>
			<Analytics />
		</html>
	);
}
