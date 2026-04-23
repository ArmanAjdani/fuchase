import { Metadata } from 'next';
import Image from 'next/image';

import LinkedinIcon from '@icons/linkedin.svg';
import AboutUsImage from '@assets/imgs/about-us.png';
import FounderImage from '@assets/imgs/about-us-footage.jpg';
import Ornament from '@assets/imgs/ornament.png';

import Heading from '@core/components/heading';
import RevealOnView from '@core/components/reveal-on-view';

export const metadata: Metadata = {
	title: 'About Us',
	description:
		'FuChase is a family-led financial ecosystem designed for long-term institutional value creation.',
	keywords: ['fuchase', 'about', 'family office mindset', 'financial ecosystem'],
};

const operatingPrinciples = [
	'Build for generational continuity, not short cycles.',
	'Keep governance disciplined while staying execution-focused.',
	'Treat trust, confidentiality, and accountability as core assets.',
	'Scale through systems that remain modular and interoperable.',
];

const founderStory = [
	'Niki Saki built FuChase from a systems perspective: capital, infrastructure, and operations must be designed to work as one architecture.',
	'That approach extends into a family-and-business model where long-term stewardship sits alongside institutional execution standards.',
	'Each platform is structured as a strategic unit that performs independently while creating stronger value as part of one integrated network.',
	'The result is a framework for families, principals, and institutions that require durability, precision, and scalable cross-border operations.',
];

export default function AboutUsPage() {
	return (
		<>
			<RevealOnView from="up">
				<Heading
					name="About FuChase"
					title="Built Like Family. Operated Like Institution."
					subtitle="FuChase combines long-term family-office thinking with institutional-grade financial infrastructure, creating a disciplined ecosystem for sustainable growth."
				/>
			</RevealOnView>
			<div className="mx-auto max-w-1440 px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
				<section className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
					<RevealOnView from="left" className="relative overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)]">
						<Image
							src={AboutUsImage}
							alt="About FuChase image"
							className="h-auto w-full object-cover"
							priority
						/>
					</RevealOnView>
					<RevealOnView from="right" className="relative py-4">
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute -top-2 left-0 hidden rotate-0 sm:block"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute -top-2 right-0 hidden rotate-90 sm:block"
						/>
						<div className="space-y-5 pt-6 sm:pt-8">
							<p className="text-display-r leading-[1.75] text-content">
								FuChase was structured to unify specialized financial entities under one
								governance logic while preserving each entity&apos;s strategic autonomy.
							</p>
							<p className="text-display-r leading-[1.75] text-content">
								The ecosystem serves institutional participants, capital allocators, and
								private principals through a controlled model built for clarity,
								interoperability, and resilience.
							</p>
							<ul className="space-y-3 pt-1">
								{operatingPrinciples.map((principle) => (
									<li
										key={principle}
										className="flex items-start gap-3 text-display-r leading-[1.75] text-content"
									>
										<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
										<span>{principle}</span>
									</li>
								))}
							</ul>
						</div>
					</RevealOnView>
				</section>
				<section className="mx-auto mt-16 max-w-6xl sm:mt-20">
					<RevealOnView from="up">
						<h2 className="text-center text-heading-4 text-heading">Founder Perspective</h2>
					</RevealOnView>
					<div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
						<RevealOnView from="left" className="space-y-5">
							{founderStory.map((paragraph) => (
								<p key={paragraph} className="text-display-r leading-[1.75] text-content">
									{paragraph}
								</p>
							))}
							<div className="pt-2">
								<a
									href="https://www.linkedin.com/company/fuchase/"
									target="_blank"
									rel="noreferrer"
									aria-label="FuChase on LinkedIn"
									className="inline-flex items-center gap-3 border border-light-white px-4 py-2 text-display-r text-base"
								>
									<Image src={LinkedinIcon} width={20} height={20} alt="linkedin icon" />
									LinkedIn
								</a>
							</div>
						</RevealOnView>
						<RevealOnView from="right" className="overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)]">
							<Image
								src={FounderImage}
								alt="Founder portrait"
								className="h-auto w-full object-cover"
							/>
						</RevealOnView>
					</div>
				</section>
			</div>
		</>
	);
}

