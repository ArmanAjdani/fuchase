import type { MetadataRoute } from 'next';
import { solutionPosts } from '@core/data/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: 'https://yourdomain.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/about-us',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/blog',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/contact-us',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/faq',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/who-we-are',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/who-we-serve',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://yourdomain.com/privacy',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://yourdomain.com/cookies',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: 'https://yourdomain.com/terms',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	];

	const blogRoutes: MetadataRoute.Sitemap = solutionPosts.map(({ id, publishedAt }) => ({
		url: `https://yourdomain.com/blog/${id}`,
		lastModified: new Date(publishedAt),
		changeFrequency: 'monthly',
		priority: 0.8,
	}));

	return [...staticRoutes, ...blogRoutes];
}
