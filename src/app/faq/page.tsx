import { Metadata } from 'next';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';

import Qa from './components/qa';

export const metadata: Metadata = {
	title: 'FAQ',
	description: 'Frequently asked questions about FuChase solutions, onboarding, and collaboration.',
	keywords: ['fuchase faq', 'financial ecosystem', 'investment platforms', 'institutional solutions'],
};

export default function Faq() {
	const faqs = [
		{
			question: 'What is Fuchase?',
			answer:
				'Fuchase is an advanced financial ecosystem and a multi-layer holding structure composed of a portfolio of specialized sub-companies. Each entity operates independently within a specific segment of the broader financial markets industry, as well as complementary sectors, while remaining strategically aligned within a unified ecosystem.',
		},
		{
			question: 'Who is Fuchase designed for?',
			answer:
				'Fuchase is designed for high-net-worth individuals (HNWIs), ultra-high-net-worth individuals (UHNWIs), financial institutions, entrepreneurs, fintech companies, and investors seeking to build, scale, or participate in financial systems.',
		},
		{
			question: 'What differentiates Fuchase from traditional platforms?',
			answer:
				'Fuchase is not a single-service platform. It is an ecosystem architecture that integrates infrastructure, execution, capital, and strategic partnerships across multiple layers of the financial industry.',
		},
		{
			question: 'Is Fuchase a broker or financial institution?',
			answer:
				'No. Fuchase operates as a holding and ecosystem structure and does not directly function as a broker or financial intermediary. However, certain sub-companies operate within specialized domains. For example, Private Chase, as part of the Fuchase ecosystem, operates in asset management and trading platform services.',
		},
		{
			question: 'What services are provided within Fuchase?',
			answer:
				'Each sub-company within Fuchase delivers specialized services, including financial system design, brokerage setup, banking infrastructure advisory, liquidity solutions, technology integration, operational management, marketing, and business development.',
		},
		{
			question: 'Can Fuchase build a financial institution from the ground up?',
			answer:
				'Yes. Fuchase supports the full lifecycle, from concept and structuring to licensing, technology selection, infrastructure development, and full operational launch. This process is executed through its specialized entity, X-Chase.',
		},
		{
			question: 'Are services offered as full solutions or modular?',
			answer:
				'Both. Engagements can be structured as end-to-end turnkey solutions or as modular services tailored to specific needs.',
		},
		{
			question: 'How does Fuchase ensure scalability?',
			answer:
				'All systems are architected with long-term scalability in mind, allowing infrastructure, operations, and liquidity frameworks to grow alongside demand.',
		},
		{
			question: 'Which industries does Fuchase operate in?',
			answer:
				'In addition to core financial markets such as forex, crypto, banking, asset management, and funds, Fuchase is active in complementary industries including technology, data, real estate, and other strategic sectors.',
		},
		{
			question: 'Does Fuchase provide access to liquidity?',
			answer:
				'Yes. Through its network of partners and internal infrastructure, Fuchase facilitates access to institutional-grade liquidity.',
		},
		{
			question: 'Can existing financial businesses collaborate with Fuchase?',
			answer:
				'Yes. Fuchase offers optimization, restructuring, and scaling solutions for existing financial systems.',
		},
		{
			question: 'How does the ecosystem model work?',
			answer:
				'Each sub-company operates independently while contributing to a coordinated, value-generating ecosystem that enhances the overall structure.',
		},
		{
			question: 'What is Fuchase\'s geographic structure?',
			answer:
				'Fuchase sub-companies and partners operate across multiple jurisdictions, each under its own brand presence in specific regions, while aligned under a unified strategic framework.',
		},
		{
			question: 'What is Fuchase\'s regulatory approach?',
			answer:
				'Fuchase currently operates under a self-regulated internal framework based on professional standards. Over time, each sub-company is expected to obtain the appropriate regulatory licenses aligned with its specific activities and jurisdiction.',
		},
		{
			question: 'Does Fuchase provide banking and payment infrastructure?',
			answer:
				'Yes. This includes banking relationships, treasury structuring, and global payment integrations across both fiat and crypto systems.',
		},
		{
			question: 'Does Fuchase support venture capital and fundraising?',
			answer:
				'Yes. Fuchase acts as a strategic bridge, connecting investors with founders, ideas, and projects seeking capital.',
		},
		{
			question: 'What is Fuchase\'s approach to technology?',
			answer:
				'Fuchase integrates best-in-class technologies to build secure, scalable, and high-performance financial systems.',
		},
		{
			question: 'Is Fuchase suitable only for large institutions?',
			answer:
				'No. Fuchase is designed for both early-stage ventures and established institutions seeking growth or transformation.',
		},
		{
			question: 'What is the long-term vision of Fuchase?',
			answer:
				'To establish a global financial ecosystem that redefines how financial systems are designed, connected, and scaled.',
		},
		{
			question: 'How can collaboration with Fuchase begin?',
			answer:
				'To initiate collaboration, a request must first be submitted. This is followed by a private meeting, online or in person, to establish mutual understanding. Fuchase does not engage with every individual or entity. Partnerships are formed selectively, based on strategic alignment, trust, and long-term potential.',
		},
	];

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: answer,
			},
		})),
	};

	return (
		<>
			<Heading title="We Have Answers" />
			<div className="mx-auto max-w-1440 px-6 pb-16 sm:px-10 lg:px-24">
				{faqs.map(({ question, answer }) => (
					<Qa key={question} question={question} answer={answer} />
				))}
			</div>
			<JsonLd data={schema} />
		</>
	);
}
