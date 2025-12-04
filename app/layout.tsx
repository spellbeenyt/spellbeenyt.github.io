import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Reddit_Mono as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Spell It",
	description: "A spelling game for everyone",
};

const videoGameSchema = {
	"@context": "https://schema.org",
	"@type": "VideoGame",
	"name": "Spell It",
	"description": "A spelling game for everyone",
	"applicationCategory": "Game",
	"gamePlatform": "Web Browser",
	"genre": "Educational, Word Game, Spelling",
	"operatingSystem": "Web",
	"author": {
		"@type": "Person",
		"name": "Your Name or Company Name"
	},
	"offers": {
		"@type": "Offer",
		"price": "0",
		"priceCurrency": "USD"
	},
	"playMode": "SinglePlayer",
	"gameLocation": "Online",
	"audience": {
		"@type": "PeopleAudience",
		"suggestedMinAge": "6"
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const schemaString = JSON.stringify(videoGameSchema);
	
	return (
		<html
			lang='tr'
			maximum-scale='1'>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schemaString }}
				/>
			</head>
			<body
				className={cn(
					"max-h-screen flex items-center justify-center font-sans antialiased ",
					fontSans.variable
				)}>
				{children}
				<Analytics />
				<Navbar />
			</body>
		</html>
	);
}
