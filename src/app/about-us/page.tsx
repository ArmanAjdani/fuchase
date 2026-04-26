import { Metadata } from 'next';
import Image from 'next/image';

import InstagramIcon from '@icons/instagram.svg';
import LinkedinIcon from '@icons/linkedin.svg';
import AboutUsImage from '@assets/imgs/about-us-office.jpg';
import FounderImage from '@assets/imgs/about-us-footage.jpg';
import Ornament from '@assets/imgs/ornament.png';
import NikiImage from '@assets/imgs/ceo/5972092188063632479.jpg';
import DanielImage from '@assets/imgs/team/Daniel.jpg';
import HamedImage from '@assets/imgs/team/Hamed.jpg';
import ManuelImage from '@assets/imgs/team/Manuel.jpg';
import SamImage from '@assets/imgs/team/Sam.jpg';

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

const teamMembers = [
	{
		name: 'Niki Saki',
		title: 'Founder, Chairman & Chief Executive Officer - FUCHASE',
		image: NikiImage,
		bio: [
			'Niki Saki is a financial systems architect with over a decade of experience across trading, brokerage operations, and institutional financial structuring.',
			'She leads FUCHASE with a clear vision of building a unified financial ecosystem where multiple entities operate as a single, integrated system designed for scalability, control, and long-term value creation.',
		],
	},
	{
		name: 'Daniel Baumgartner',
		title: 'Chairman - Play Global Capital | Institutional Strategic Alliance',
		image: DanielImage,
		bio: [
			'Daniel is a serial entrepreneur and Chairman of Play Global Capital, with extensive experience in launching, scaling, and structuring global businesses.',
			'Through a strategic alliance with FUCHASE, he contributes to high-level leadership, investment alignment, and global expansion strategy.',
		],
	},
	{
		name: 'Manuel Neuwirth',
		title: 'Vice Chairman - Play Global Capital | Institutional Strategic Alliance',
		image: ManuelImage,
		bio: [
			'With a strong background in investment and financial structuring, Manuel plays a key role in capital strategy, partnership development, and institutional expansion.',
			"Through the strategic alliance between Play Global Capital and FUCHASE, he supports the ecosystem's growth and global positioning.",
		],
	},
	{
		name: 'Sam Hesam',
		title: 'Co-Founder & Ecosystem Architect - FUCHASE',
		image: SamImage,
		bio: [
			'Sam is responsible for the conceptual design and structural architecture of the FUCHASE ecosystem.',
			"He leads the development of the system's long-term vision, ensuring alignment, integration, and synergy across all sub-companies and financial structures within the ecosystem.",
		],
	},
	{
		name: 'Hamed Hayali',
		title: 'Director of Forex Brokerage Division - X-Chase | Forex Brokerage Division - Private Chase',
		image: HamedImage,
		bio: [
			'Hamed leads the Forex brokerage vertical across both X-Chase and Private Chase.',
			'He is responsible for the design, development, and operational performance of brokerage systems, ensuring execution quality, risk management, and alignment with institutional standards.',
		],
	},
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
					<RevealOnView from="right" className="relative overflow-hidden rounded-[10px] px-4 py-8 sm:px-8 sm:py-10">
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute top-2 left-2 hidden rotate-0 sm:block"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute top-2 right-2 hidden rotate-90 sm:block"
						/>
						<div className="space-y-5 pt-2 sm:pt-6">
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
						<RevealOnView from="left" className="order-2 lg:order-1">
							<div className="space-y-5 pt-2">
								{founderStory.map((paragraph) => (
									<p key={paragraph} className="text-display-r leading-[1.75] text-content">
										{paragraph}
									</p>
								))}
							</div>
							<div className="flex justify-center gap-5 pt-4">
								<a
									href="https://www.linkedin.com/company/fuchase/"
									target="_blank"
									rel="noreferrer"
									aria-label="FuChase on LinkedIn"
									className="inline-flex items-center justify-center transition duration-200 hover:opacity-80"
								>
									<Image src={LinkedinIcon} width={24} height={24} alt="linkedin icon" />
								</a>
								<a
									href="https://www.instagram.com/fuchase/"
									target="_blank"
									rel="noreferrer"
									aria-label="FuChase on Instagram"
									className="inline-flex items-center justify-center transition duration-200 hover:opacity-80"
								>
									<Image src={InstagramIcon} width={24} height={24} alt="instagram icon" />
								</a>
							</div>
						</RevealOnView>
						<RevealOnView
							from="right"
							className="relative order-1 h-full min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] lg:order-2 lg:min-h-[520px]"
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
				<section className="mx-auto mt-16 max-w-6xl sm:mt-20">
					<RevealOnView from="up">
						<div className="text-center">
							<h2 className="text-heading-4 text-heading">Leadership & Core Team</h2>
							<p className="mx-auto mt-3 max-w-[620px] text-display-r leading-[1.7] text-content/80">
								The FUCHASE leadership structure combines ecosystem architecture,
								institutional alliance, and financial market execution.
							</p>
						</div>
					</RevealOnView>
					<div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map(({ bio, image, name, title }, index) => (
							<RevealOnView key={name} from="up" delayMs={index * 90}>
								<article className="border-t border-[rgba(44,49,25,0.24)] pt-5">
									<div className="relative aspect-[4/5] overflow-hidden bg-accent/35">
										<Image
											src={image}
											alt={name}
											fill
											sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
											className="object-cover object-center"
										/>
									</div>
									<div className="pt-5 text-center">
										<h3 className="text-heading-6 text-heading">{name}</h3>
										<p className="mt-1 text-display-r leading-[1.55] text-primary">{title}</p>
										<div className="mt-4 space-y-3 text-left">
											{bio.map((paragraph) => (
												<p
													key={paragraph}
													className="text-display-r leading-[1.65] text-content/82"
												>
													{paragraph}
												</p>
											))}
										</div>
									</div>
								</article>
							</RevealOnView>
						))}
					</div>
				</section>
			</div>
		</>
	);
}

