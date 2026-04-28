import type { MetadataRoute } from 'next';
import { absoluteUrl, seoConfig } from '@core/seo';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: absoluteUrl('/sitemap.xml'),
		host: seoConfig.siteUrl,
	};
}
