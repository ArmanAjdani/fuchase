import { Metadata } from 'next';

import LegalPage, { LegalSection } from '@core/components/legal-page';
import { createPageMetadata } from '@core/seo';

export const metadata: Metadata = createPageMetadata({
	title: 'Privacy Policy',
	description: 'Privacy Policy for the FuChase website, including information collection, usage, retention, and user choices.',
	path: '/privacy',
	keywords: ['FuChase privacy policy', 'privacy', 'data protection'],
});

const sections: LegalSection[] = [
	{
		title: 'Information We Collect',
		paragraphs: [
			'Fuchase may collect information that you voluntarily submit through contact forms, email correspondence, or other direct interactions with the website.',
			'We may also collect limited technical and usage information, including browser type, device information, referral sources, and on-site activity, to help us operate and improve the website.',
		],
	},
	{
		title: 'How We Use Information',
		paragraphs: [
			'We use information to respond to enquiries, maintain website functionality, improve user experience, support security monitoring, and comply with applicable legal or regulatory obligations.',
		],
		bullets: [
			'Respond to contact requests and business enquiries.',
			'Operate, secure, and improve the website and related communications.',
			'Analyze website usage trends and performance.',
			'Meet legal, regulatory, and internal compliance requirements.',
		],
	},
	{
		title: 'Sharing of Information',
		paragraphs: [
			'Fuchase does not sell personal information. Information may be shared with trusted service providers who support website operations, analytics, hosting, or communications, and only to the extent reasonably necessary.',
			'Information may also be disclosed where required by law, regulatory obligation, legal process, or to protect the rights, security, and integrity of Fuchase and its users.',
		],
	},
	{
		title: 'Retention and Security',
		paragraphs: [
			'Information is retained only for as long as reasonably necessary for the purposes described in this policy, including legal, operational, and compliance needs.',
			'We use reasonable administrative, technical, and organizational safeguards to protect information, but no transmission or storage system can be guaranteed as completely secure.',
		],
	},
	{
		title: 'Your Choices',
		paragraphs: [
			'Depending on your jurisdiction, you may have rights relating to access, correction, deletion, or restriction of personal information. Requests can be submitted using the contact details provided on this website.',
			'If you no longer wish to receive communications from us, you may contact us directly to request removal or update of your information.',
		],
	},
	{
		title: 'Updates to This Policy',
		paragraphs: [
			'We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. The latest version will always be posted on this page with the updated effective date.',
		],
	},
];

export default function PrivacyPage() {
	return (
		<LegalPage
			title="Privacy Policy"
			subtitle="This policy explains how Fuchase collects, uses, and protects information when you interact with our website and related communications."
			updatedOn="April 20, 2026"
			sections={sections}
		/>
	);
}
