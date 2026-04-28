import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@core/seo';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin', '/private'],
			},
		],
		sitemap: absoluteUrl('/sitemap.xml'),
	};
}
