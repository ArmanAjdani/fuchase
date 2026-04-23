import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	basePath: '',
	compress: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	// output: 'standalone',
};

export default nextConfig;
