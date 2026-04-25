import type { Metadata, Viewport } from 'next';

import './globals.css';

import Header from './core/components/header';
import Footer from './core/components/footer';
import JsonLd from './core/components/json-ld';

export const metadata: Metadata = {
	title: {
		default: 'FuChase',
		template: '%s | FuChase',
	},
	description: 'bla bla bla',
	keywords: ['first', 'second', 'third'],
	metadataBase: new URL('https://yourdomain.com'),
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'FuChase',
		url: 'https://yourwebsite.com',
		logo: 'https://yourwebsite.com/logo.png',
		sameAs: ['https://linkedin.com/company/yourcompany'],
	};

	return (
		<html lang="en">
			<body>
				<Header />
				<main className="min-h-[calc(100vh-70px-468px)]">{children}</main>
				<Footer />
				<JsonLd data={schema} />
			</body>
		</html>
	);
}
