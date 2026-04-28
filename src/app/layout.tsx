import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import './globals.css';

import Header from './core/components/header';
import Footer from './core/components/footer';
import JsonLd from './core/components/json-ld';
import { createPageMetadata, seoConfig } from './core/seo';

export const metadata: Metadata = {
	...createPageMetadata(),
	title: {
		default: 'FuChase',
		template: '%s | FuChase',
	},
	metadataBase: new URL(seoConfig.siteUrl),
	applicationName: 'FuChase',
	authors: [{ name: 'FuChase' }],
	creator: 'FuChase',
	publisher: 'FuChase',
	category: 'finance',
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
		'@id': `${seoConfig.siteUrl}/#organization`,
		name: 'FuChase',
		url: seoConfig.siteUrl,
		logo: `${seoConfig.siteUrl}/logo.svg`,
		description: seoConfig.defaultDescription,
		email: 'ceo@fuchase.com',
		telephone: '+971506125001',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Dubai International Financial Centre, Sheikh Zayed Road',
			addressLocality: 'Dubai',
			addressCountry: 'AE',
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+971506125001',
			email: 'ceo@fuchase.com',
			contactType: 'institutional support',
		},
		sameAs: ['https://www.linkedin.com/company/fuchase/'],
	};

	return (
		<html lang="en">
			<body>
				<Script
					id="figma-capture-prep"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function () {
								if (!window.location.hash.includes('figmacapture=')) return;

								var style = document.createElement('style');
								style.textContent = [
									'* { transition-duration: 0s !important; animation-duration: 0s !important; animation-delay: 0s !important; scroll-behavior: auto !important; }',
									'.opacity-0 { opacity: 1 !important; }',
									'.translate-y-10, .-translate-x-10, .translate-x-10 { transform: translate(0, 0) !important; }',
									'.animate-marquee { animation-play-state: paused !important; transform: translateX(0) !important; }'
								].join('\\n');
								document.documentElement.appendChild(style);

								var NativeIntersectionObserver = window.IntersectionObserver;
								window.IntersectionObserver = function (callback) {
									return {
										observe: function (target) {
											callback([{ isIntersecting: true, intersectionRatio: 1, target: target }]);
										},
										unobserve: function () {},
										disconnect: function () {},
										takeRecords: function () { return []; }
									};
								};
								window.IntersectionObserver.prototype = NativeIntersectionObserver && NativeIntersectionObserver.prototype;

								window.addEventListener('load', function () {
									var positions = [0, 0.25, 0.5, 0.75, 1];
									positions.forEach(function (position, index) {
										window.setTimeout(function () {
											var max = Math.max(
												document.body.scrollHeight,
												document.documentElement.scrollHeight
											) - window.innerHeight;
											window.scrollTo(0, Math.max(0, max * position));
										}, 400 + index * 500);
									});
									window.setTimeout(function () { window.scrollTo(0, 0); }, 3600);
								});
							})();
						`,
					}}
				/>
				<Script
					src="https://mcp.figma.com/mcp/html-to-design/capture.js"
					strategy="afterInteractive"
				/>
				<Header />
				<main className="min-h-[calc(100vh-70px-468px)]">{children}</main>
				<Footer />
				<JsonLd data={schema} />
			</body>
		</html>
	);
}
