import type { MetadataRoute } from 'next';
import { solutionPosts } from '@core/data/solutions';
import { absoluteUrl } from '@core/seo';

const siteLastModified = new Date('2026-04-28');

const staticRoutes = [
	{ path: '/', priority: 1 },
	{ path: '/about-us', priority: 0.9 },
	{ path: '/blog', priority: 0.9 },
	{ path: '/contact-us', priority: 0.9 },
	{ path: '/faq', priority: 0.8 },
	{ path: '/who-we-are', priority: 0.9 },
	{ path: '/who-we-serve', priority: 0.9 },
	{ path: '/privacy', priority: 0.5 },
	{ path: '/cookies', priority: 0.5 },
	{ path: '/terms', priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const pages: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
		url: absoluteUrl(path),
		lastModified: siteLastModified,
		changeFrequency: 'monthly',
		priority,
	}));

	const blogRoutes: MetadataRoute.Sitemap = solutionPosts.map(({ id, publishedAt }) => ({
		url: absoluteUrl(`/blog/${id}`),
		lastModified: new Date(publishedAt),
		changeFrequency: 'monthly',
		priority: 0.7,
	}));

	return [...pages, ...blogRoutes];
}
