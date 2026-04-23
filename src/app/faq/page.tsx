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
			question: 'What is FuChase and how is it structured?',
			answer:
				'FuChase is a connected financial ecosystem made of specialized entities, each focused on a distinct function such as brokerage infrastructure, capital flow, investment intelligence, education, or marketplace coordination.',
		},
		{
			question: 'Who does FuChase serve?',
			answer:
				'FuChase serves institutional participants, brokers, funds, asset managers, service providers, family offices, HNWIs, and UHNWIs operating in structured financial environments.',
		},
		{
			question: 'Can I engage with one solution without using the full ecosystem?',
			answer:
				'Yes. Each solution can operate independently. Clients can work with one platform directly and later integrate with other entities when expansion or cross-platform coordination is needed.',
		},
		{
			question: 'How are solutions matched to clients?',
			answer:
				'Initial matching is based on strategic fit, operational requirements, jurisdiction, and risk profile. The objective is to route each request to the most relevant FuChase entity from the start.',
		},
		{
			question: 'Do you support cross-border activity?',
			answer:
				'Yes. Several FuChase entities are designed for cross-border use cases, including capital movement, institutional connectivity, and multi-jurisdiction infrastructure planning.',
		},
		{
			question: 'How can my company join Market Chase?',
			answer:
				'You can submit an onboarding request through the contact channel. The team reviews business profile, service relevance, and network fit before listing or partnership activation.',
		},
		{
			question: 'What is the difference between Venture Chase and CIO?',
			answer:
				'Venture Chase connects investors with curated opportunities, while CIO focuses on data intelligence that helps investors identify where and when to allocate capital.',
		},
		{
			question: 'How do I start a conversation with FuChase?',
			answer:
				'Use the Contact Us page and share your objective, operating region, and preferred timeline. The team will route your request to the appropriate solution lead.',
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
