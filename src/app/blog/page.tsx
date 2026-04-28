import { Suspense } from 'react';
import { Metadata } from 'next';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';
import RevealOnView from '@core/components/reveal-on-view';
import { solutionPosts } from '@core/data/solutions';
import { createPageMetadata, absoluteUrl } from '@core/seo';

import Posts from './components/posts';

export const metadata: Metadata = createPageMetadata({
	title: 'Blog',
	description:
		'Insights on Venture Chase, Chase Prime, Flow Chase, CCX, Market Chase, and CIO.',
	path: '/blog',
	keywords: Array.from(new Set(solutionPosts.flatMap(({ tags }) => tags))),
});

export default function BlogPage() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': absoluteUrl('/blog#webpage'),
		url: absoluteUrl('/blog'),
		name: 'Recent Blog Posts',
		mainEntityOfPage: absoluteUrl('/blog'),
		hasPart: {
			'@type': 'ItemList',
			itemListElement: solutionPosts.map(({ id, title }, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: title,
				url: absoluteUrl(`/blog/${id}`),
			})),
		},
	};

	return (
		<>
			<RevealOnView from="up">
				<Heading title="Recent Blog Posts" />
			</RevealOnView>
			<Suspense>
				<Posts />
			</Suspense>
			<JsonLd data={schema} />
		</>
	);
}
