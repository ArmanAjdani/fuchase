import { Metadata } from 'next';

import LegalPage, { LegalSection } from '@core/components/legal-page';

export const metadata: Metadata = {
	title: 'Cookie Policy',
	description: 'Cookie Policy for the Fuchase website.',
};

const sections: LegalSection[] = [
	{
		title: 'What Cookies Are',
		paragraphs: [
			'Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit and can support core functionality, analytics, and performance.',
		],
	},
	{
		title: 'How Fuchase Uses Cookies',
		paragraphs: [
			'Fuchase may use cookies and similar technologies to operate the website, understand traffic patterns, improve usability, and support security and performance monitoring.',
		],
		bullets: [
			'Essential cookies required for website functionality and security.',
			'Performance and analytics cookies used to understand traffic and usage patterns.',
			'Preference cookies that remember certain display or interaction settings.',
		],
	},
	{
		title: 'Third-Party Technologies',
		paragraphs: [
			'Some cookies or similar technologies may be placed by third-party service providers used for hosting, analytics, security, or communication tools. Their use is subject to their own policies and controls.',
		],
	},
	{
		title: 'Managing Cookies',
		paragraphs: [
			'Most browsers allow you to review, disable, or delete cookies through browser settings. Restricting cookies may affect how certain parts of the website function.',
			'You can also use device and browser controls to limit tracking technologies where such controls are available.',
		],
	},
	{
		title: 'Policy Updates',
		paragraphs: [
			'We may update this Cookie Policy from time to time to reflect technical, operational, or regulatory changes. The latest version will remain available on this page.',
		],
	},
];

export default function CookiesPage() {
	return (
		<LegalPage
			title="Cookie Policy"
			subtitle="This policy outlines how cookies and similar technologies may be used across the Fuchase website."
			updatedOn="April 20, 2026"
			sections={sections}
		/>
	);
}
