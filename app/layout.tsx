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
	title: "Spell Bee",
	description: "A spelling game for everyone",
	keywords: "spell bee, spelling bee, guess the word game, word guess, spelling game, vocabulary, word puzzle, educational game",
};

const videoGameSchema = {
	"@context": "https://schema.org",
	"@type": "VideoGame",
	"name": "Spell Bee",
	"description": "A spelling game for everyone",
	"url": "https://spellbeenyt.github.io",
	"applicationCategory": "Game",
	"gamePlatform": "Web Browser",
	"genre": ["Educational", "Word Game", "Spelling", "Puzzle"],
	"keywords": "spell bee, spelling bee, guess the word game, word guess, spelling game, vocabulary, word puzzle, educational game, language game, spelling practice",
	"operatingSystem": "Web",
	"author": {
		"@type": "Person",
		"name": "spell bee"
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
		"suggestedMinAge": "6",
		"suggestedMaxAge": "99"
	},
	"softwareRequirements": "Web browser with JavaScript enabled",
	"educationalUse": "Spelling practice, vocabulary building, language learning",
	"learningResourceType": "Game",
	"typicalAgeRange": "6-99",
	"timeRequired": "PT5M",
	"interactivityType": "active",
	"isAccessibleForFree": true
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
				{/* Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schemaString }}
				/>
				
				{/* Google Analytics (GA4) */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-B86Q3W5JM6"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-B86Q3W5JM6');
					`}
				</Script>
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
