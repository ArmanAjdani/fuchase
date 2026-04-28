import type { Metadata } from 'next';

const siteName = 'FuChase';
const siteUrl = 'https://fuchase.com';
const defaultDescription =
	'FuChase is a financial ecosystem connecting capital, infrastructure, technology, and specialized entities for institutional-scale market participation.';

type PageMetadataInput = {
	title?: string;
	description?: string;
	path?: string;
	keywords?: string[];
	image?: string;
	type?: 'website' | 'article';
	publishedTime?: string;
	modifiedTime?: string;
};

export const absoluteUrl = (path = '/') => new URL(path, siteUrl).toString();

export function createPageMetadata({
	title,
	description = defaultDescription,
	path = '/',
	keywords = [],
	image = '/opengraph-image',
	type = 'website',
	publishedTime,
	modifiedTime,
}: PageMetadataInput = {}): Metadata {
	const url = absoluteUrl(path);
	const fullTitle = title ? `${title} | ${siteName}` : siteName;

	return {
		title,
		description,
		keywords: [
			'FuChase',
			'financial ecosystem',
			'institutional finance',
			'capital infrastructure',
			...keywords,
		],
		alternates: {
			canonical: path,
		},
		openGraph: {
			title: fullTitle,
			description,
			url,
			siteName,
			type,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: `${siteName} preview`,
				},
			],
			...(publishedTime ? { publishedTime } : {}),
			...(modifiedTime ? { modifiedTime } : {}),
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description,
			images: [image],
		},
	};
}

export const seoConfig = {
	siteName,
	siteUrl,
	defaultDescription,
};
