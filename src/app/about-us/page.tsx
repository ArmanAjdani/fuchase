import { Metadata } from 'next';
import Image from 'next/image';

import LinkedinIcon from '@icons/linkedin.svg';
import AboutUsImage from '@assets/imgs/about-us-office.jpg';
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
	'Niki Saki is a financial systems architect, entrepreneur, and Founder and CEO of FuChase, with over a decade of experience operating at the intersection of financial markets, infrastructure, and institutional strategy.',
	'Her career began within the financial markets, where she developed a deep, practical understanding of both trading environments and the structural mechanics behind them. This foundation evolved into a broader specialization in the design, development, and execution of financial systems across multiple sectors.',
	'Over the years, she has been directly involved in the architecture, launch, and management of complex financial infrastructures, including brokerage systems, asset management structures, and institutional-grade financial platforms. Her expertise lies not only in building these systems, but in structuring them for scalability, operational efficiency, and long-term sustainability.',
	'As a strategist, she approaches financial markets not from a transactional perspective, but from a systems-level viewpoint, focusing on how capital, technology, and operational frameworks integrate to create enduring financial ecosystems.',
	'Through FuChase, Niki Saki is leading the development of a modular and interconnected financial ecosystem, designed to unify different layers of the market into a cohesive, scalable, and strategically aligned structure.',
	'Her work reflects a consistent focus on precision, structure, and execution, positioning her as a builder of financial systems rather than a participant within them.',
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
						<div className="space-y-5 pt-4 sm:pt-6">
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
					<div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-10">
						<RevealOnView from="left">
							<div className="space-y-5 pt-2">
								{founderStory.map((paragraph) => (
									<p key={paragraph} className="text-display-r leading-[1.75] text-content">
										{paragraph}
									</p>
								))}
							</div>
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
						<RevealOnView
							from="right"
							className="relative h-full min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] lg:min-h-[520px]"
						>
							<Image
								src={FounderImage}
								alt="Founder portrait"
								fill
								sizes="(min-width: 1024px) 38vw, 100vw"
								className="object-cover object-center"
							/>
						</RevealOnView>
					</div>
				</section>
			</div>
		</>
	);
}
