import { Suspense } from 'react';
import { Metadata } from 'next';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';
import { solutionPosts } from '@core/data/solutions';

import Posts from './components/posts';

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Insights on Venture Chase, Chase Prime, Flow Chase, CCX, Market Chase, and CIO.',
	keywords: Array.from(new Set(solutionPosts.flatMap(({ tags }) => tags))),
};

export default function BlogPage() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Recent Blog Posts',
		hasPart: {
			'@type': 'ItemList',
			itemListElement: solutionPosts.map(({ id, title }, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: title,
				url: `https://yourdomain.com/blog/${id}`,
			})),
		},
	};

	return (
		<>
			<Heading title="Recent Blog Posts" />
			<Suspense>
				<Posts />
			</Suspense>
			<JsonLd data={schema} />
		</>
	);
}
