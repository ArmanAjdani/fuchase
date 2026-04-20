import { Metadata } from 'next';

import LegalPage, { LegalSection } from '@core/components/legal-page';

export const metadata: Metadata = {
	title: 'Terms of Use',
	description: 'Terms of Use for the Fuchase website.',
};

const sections: LegalSection[] = [
	{
		title: 'Acceptance of Terms',
		paragraphs: [
			'By accessing or using the Fuchase website, you agree to these Terms of Use and to any applicable laws and regulations governing your access to the site.',
			'If you do not agree with these terms, you should discontinue use of the website.',
		],
	},
	{
		title: 'Informational Use Only',
		paragraphs: [
			'The content on this website is provided for general informational purposes only. It does not constitute legal, tax, investment, financial, or other professional advice.',
			'Nothing on this website should be interpreted as an offer, recommendation, solicitation, or commitment relating to any product, service, transaction, or investment activity.',
		],
	},
	{
		title: 'Intellectual Property',
		paragraphs: [
			'All content, branding, graphics, text, images, and site materials are owned by Fuchase or used under appropriate rights and may not be reproduced, distributed, modified, or republished without prior written permission, except where legally permitted.',
		],
	},
	{
		title: 'Acceptable Use',
		paragraphs: [
			'You agree to use the website lawfully and in a way that does not interfere with its operation, compromise security, or infringe the rights of Fuchase or any third party.',
		],
		bullets: [
			'Do not attempt unauthorized access to systems, data, or restricted areas.',
			'Do not copy, scrape, or reproduce website content beyond lawful personal use.',
			'Do not use the website for unlawful, misleading, abusive, or harmful purposes.',
		],
	},
	{
		title: 'Third-Party Links',
		paragraphs: [
			'The website may contain links to third-party websites or resources for convenience. Fuchase does not control and is not responsible for the availability, content, or practices of those external sites.',
		],
	},
	{
		title: 'Disclaimers and Limitation of Liability',
		paragraphs: [
			'The website is provided on an as-is and as-available basis without warranties of any kind, whether express or implied, to the extent permitted by law.',
			'To the fullest extent permitted by applicable law, Fuchase disclaims liability for any direct, indirect, incidental, consequential, or special loss arising out of or related to the use of, or reliance on, this website and its content.',
		],
	},
	{
		title: 'Changes to These Terms',
		paragraphs: [
			'Fuchase may update these Terms of Use from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
		],
	},
];

export default function TermsPage() {
	return (
		<LegalPage
			title="Terms of Use"
			subtitle="These terms govern access to and use of the Fuchase website and its informational content."
			updatedOn="April 20, 2026"
			sections={sections}
		/>
	);
}
