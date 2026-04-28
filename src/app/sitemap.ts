import type { MetadataRoute } from 'next';
import { solutionPosts } from '@core/data/solutions';
import { absoluteUrl } from '@core/seo';

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: absoluteUrl('/'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/about-us'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/blog'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/contact-us'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/faq'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/who-we-are'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/who-we-serve'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: absoluteUrl('/privacy'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: absoluteUrl('/cookies'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: absoluteUrl('/terms'),
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	];

	const blogRoutes: MetadataRoute.Sitemap = solutionPosts.map(({ id, publishedAt }) => ({
		url: absoluteUrl(`/blog/${id}`),
		lastModified: new Date(publishedAt),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	return [...staticRoutes, ...blogRoutes];
}
