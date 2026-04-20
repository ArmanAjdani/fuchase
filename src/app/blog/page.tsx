import { Suspense } from 'react';
import { Metadata } from 'next';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';

import Posts from './components/posts';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'bla bla bla',
	keywords: ['first', 'second', 'third'],
};

export default function BlogPage() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Blog',
		hasPart: {
			'@type': 'ItemList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					url: 'https://example.com/blog/post-1',
				},
			],
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
