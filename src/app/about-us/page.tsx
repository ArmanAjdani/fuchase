import { Metadata } from 'next';
import Image from 'next/image';

import InstagramIcon from '@icons/instagram.svg';
import LinkedinIcon from '@icons/linkedin.svg';
import FounderImage from '@assets/imgs/about-us-footage.jpg';
import LegalImage from '@assets/imgs/legal.jpg';
import FooterLogo from '@assets/imgs/logo_footer/footer-logo-removebg-preview.png';
import NikiImage from '@assets/imgs/ceo/5972092188063632479.jpg';
import DanielImage from '@assets/imgs/team/Daniel.jpg';
import HamedImage from '@assets/imgs/team/Hamed.jpg';
import ManuelImage from '@assets/imgs/team/Manuel.jpg';
import SamImage from '@assets/imgs/team/Sam.jpg';

import Heading from '@core/components/heading';
import RevealOnView from '@core/components/reveal-on-view';
import { createPageMetadata } from '@core/seo';

export const metadata: Metadata = createPageMetadata({
	title: 'About Us',
	description:
		'FuChase is a family-led financial ecosystem designed for long-term institutional value creation.',
	path: '/about-us',
	keywords: ['fuchase', 'about', 'family office mindset', 'financial ecosystem'],
});

const founderStory = [
	'Niki Saki is a financial systems architect, entrepreneur, and Founder and CEO of FuChase, with over a decade of experience operating at the intersection of financial markets, infrastructure, and institutional strategy.',
	'Her career began within the financial markets, where she developed a deep, practical understanding of both trading environments and the structural mechanics behind them. This foundation evolved into a broader specialization in the design, development, and execution of financial systems across multiple sectors.',
	'Over the years, she has been directly involved in the architecture, launch, and management of complex financial infrastructures, including brokerage systems, asset management structures, and institutional-grade financial platforms. Her expertise lies not only in building these systems, but in structuring them for scalability, operational efficiency, and long-term sustainability.',
	'As a strategist, she approaches financial markets not from a transactional perspective, but from a systems-level viewpoint, focusing on how capital, technology, and operational frameworks integrate to create enduring financial ecosystems.',
	'Through FuChase, Niki Saki is leading the development of a modular and interconnected financial ecosystem, designed to unify different layers of the market into a cohesive, scalable, and strategically aligned structure.',
	'Her work reflects a consistent focus on precision, structure, and execution, positioning her as a builder of financial systems rather than a participant within them.',
];

const alliancePoints = [
	'Integration of financial and technological infrastructures at an institutional level',
	'Strategic deployment of capital, expertise, and global networks',
	'Targeted expansion into key markets through ecosystem synergy',
	'Design, launch, and management of financial institutions and systems at scale',
];

const legalPoints = [
	'Institutional-grade internal controls',
	'Advanced risk management architecture',
	'Structured governance and operational frameworks',
	'Compliance aligned with international standards',
];

const teamMembers = [
	{
		name: 'Niki Saki',
		title: 'Founder, Chairman & Chief Executive Officer - FUCHASE',
		image: NikiImage,
		linkedin: 'https://www.linkedin.com/in/niki-saki-584743254',
		bio: [
			'Niki Saki is a financial systems architect with over a decade of experience across trading, brokerage operations, and institutional financial structuring.',
			'She leads FUCHASE with a clear vision of building a unified financial ecosystem where multiple entities operate as a single, integrated system designed for scalability, control, and long-term value creation.',
		],
	},
	{
		name: 'Daniel Baumgartner',
		title: ['Chairman - PLAYGLOBAL Capital', 'Institutional Strategic Alliance'],
		image: DanielImage,
		linkedin: 'https://www.linkedin.com/in/daniel-baumgartner-pg',
		bio: [
			'Daniel is a serial entrepreneur and Chairman of PLAYGLOBAL Capital, with extensive experience in launching, scaling, and structuring global businesses.',
			'Through a strategic alliance with FUCHASE, he contributes to high-level leadership, investment alignment, and global expansion strategy.',
		],
	},
	{
		name: 'Manuel Neuwirth',
		title: ['Vice Chairman - PLAYGLOBAL Capital', 'Institutional Strategic Alliance'],
		image: ManuelImage,
		linkedin: 'https://www.linkedin.com/in/manuelneuwirth',
		bio: [
			'With a strong background in investment and financial structuring, Manuel plays a key role in capital strategy, partnership development, and institutional expansion.',
			"Through the strategic alliance between PLAYGLOBAL Capital and FUCHASE, he supports the ecosystem's growth and global positioning.",
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
		title: [
			'Director of Forex Brokerage Division - X-Chase',
			'Forex Brokerage Division - Private Chase',
		],
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
			<div className="mx-auto flex max-w-1440 flex-col px-6 pb-16 sm:px-10 xl:px-16 xl:pb-24">
				<section className="order-[70] mx-auto mt-16 max-w-6xl sm:mt-20">
					<RevealOnView from="up">
						<div className="text-center">
							<p className="text-display-r uppercase text-primary">Exclusive Strategic Alliance</p>
							<h2 className="mt-2 flex flex-col items-center justify-center gap-1 text-heading-4 text-heading sm:flex-row sm:gap-3">
								<span>PLAYGLOBAL Capital</span>
								<span>X</span>
								<span>FUCHASE</span>
							</h2>
						</div>
					</RevealOnView>
					<div className="mt-9 grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
						<RevealOnView from="left">
							<div className="flex flex-col items-center justify-center gap-5 border-y border-[rgba(44,49,25,0.2)] py-8 sm:flex-row sm:gap-8">
								<Image
									src="/partners/pg.jpg"
									width={210}
									height={120}
									alt="PLAYGLOBAL Capital logo"
									className="h-auto max-h-[92px] w-auto max-w-[72%] object-contain sm:max-w-[42%]"
								/>
								<span className="text-heading-6 text-primary sm:text-heading-5">X</span>
								<Image
									src={FooterLogo}
									width={190}
									height={110}
									alt="FUCHASE logo"
									className="h-auto max-h-[92px] w-auto max-w-[72%] object-contain sm:max-w-[42%]"
								/>
							</div>
						</RevealOnView>
						<RevealOnView from="right">
							<div className="space-y-5">
								<p className="text-display-r leading-[1.75] text-content">
									PLAYGLOBAL Capital and FUCHASE operate under an Exclusive Strategic
									Alliance, forming a unified institutional collaboration focused on the
									design, development, and management of complex financial ecosystems
									across global markets.
								</p>
								<p className="text-display-r leading-[1.75] text-content">
									Both entities are structured as multi-layered, institutional platforms,
									composed of specialized subsidiaries operating across financial markets,
									investment management, fintech, and related industries. While each group
									maintains its independent operational identity, they are strategically
									aligned to function as an integrated ecosystem with enhanced capabilities,
									scalability, and global reach.
								</p>
							</div>
						</RevealOnView>
					</div>
					<div className="mt-9 grid gap-8 xl:grid-cols-2">
						<RevealOnView from="left">
							<div className="border-t border-[rgba(44,49,25,0.24)] pt-5">
								<h3 className="text-heading-6 text-heading">This alliance enables</h3>
								<ul className="mt-4 space-y-3">
									{alliancePoints.map((point) => (
										<li key={point} className="flex gap-3 text-display-r leading-[1.7] text-content">
											<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</RevealOnView>
						<RevealOnView from="right">
							<div className="border-t border-[rgba(44,49,25,0.24)] pt-5">
								<h3 className="text-heading-6 text-heading">Leadership & Strategic Alignment</h3>
								<div className="mt-4 grid gap-5 sm:grid-cols-2">
									<div>
										<p className="text-display-l text-heading">PLAYGLOBAL Capital</p>
										<p className="mt-2 text-display-r leading-[1.7] text-content">
											Daniel Baumgartner - Chairman
											<br />
											Manuel Neuwirth - Vice Chairman
										</p>
									</div>
									<div>
										<p className="text-display-l text-heading">FUCHASE</p>
										<p className="mt-2 text-display-r leading-[1.7] text-content">
											Niki Saki - Founder, Chairman & CEO
											<br />
											Sam Hessam - Co-Founder & Ecosystem Architect
										</p>
									</div>
								</div>
								<p className="mt-5 text-display-r leading-[1.75] text-content">
									PLAYGLOBAL Capital and FUCHASE represent a strategic convergence of
									capital, infrastructure, and vision, focused on building institutional-grade
									platforms, launching scalable financial systems, and creating long-term
									value across global markets.
								</p>
								<p className="mt-5 text-display-r leading-[1.75] text-content">
									This is not merely a partnership. It is an advanced ecosystem model where
									each entity contributes its strengths to define a new standard in financial
									system design, execution, and expansion.
								</p>
							</div>
						</RevealOnView>
					</div>
				</section>
				<section className="order-[10] mx-auto max-w-6xl">
					<RevealOnView from="up">
						<div className="text-center">
							<p className="text-link-t uppercase text-primary">Legal Foundation</p>
							<h2 className="mt-2 text-heading-4 text-heading">FUCHASE - Legal Foundation</h2>
						</div>
					</RevealOnView>
					<div className="mt-9 grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-center">
						<RevealOnView from="left" className="order-2 xl:order-1">
							<div className="space-y-5">
								<p className="text-display-r leading-[1.75] text-content">
									Fuchase LLC is a U.S.-registered entity, incorporated in the State of
									Wyoming on April 6, 2026, under filing ID 2026-001942730.
								</p>
								<p className="text-display-r leading-[1.75] text-content">
									The company operates as a Limited Liability Company (LLC), providing a
									solid legal foundation for building and scaling a global financial ecosystem.
								</p>
								<div className="border-t border-[rgba(44,49,25,0.24)] pt-5">
									<h3 className="text-heading-6 text-heading">Self-Regulated Structure</h3>
									<p className="mt-3 text-display-r leading-[1.75] text-content">
										FUCHASE is designed as a self-regulated financial ecosystem, built on
										internal frameworks of governance, risk management, and compliance.
									</p>
									<ul className="mt-4 space-y-3">
										{legalPoints.map((point) => (
											<li key={point} className="flex gap-3 text-display-r leading-[1.7] text-content">
												<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>
								<p className="text-display-r leading-[1.75] text-content">
									Fuchase serves as the core legal entity within a broader financial
									ecosystem, composed of specialized sub-companies operating across financial
									markets and related industries.
								</p>
							</div>
						</RevealOnView>
						<RevealOnView
							from="right"
							className="relative order-1 min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] md:max-xl:min-h-0 md:max-xl:aspect-[16/10] xl:order-2 xl:min-h-[540px]"
						>
							<Image
								src={LegalImage}
								alt="Legal foundation"
								fill
								sizes="(min-width: 1280px) 38vw, 100vw"
								className="object-cover object-center md:max-xl:object-[center_35%]"
							/>
						</RevealOnView>
					</div>
				</section>
				<section className="order-[30] mx-auto mt-16 max-w-6xl sm:mt-20">
					<RevealOnView from="up">
						<h2 className="text-center text-heading-4 text-heading">Founder Perspective</h2>
					</RevealOnView>
					<div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-stretch xl:gap-10">
						<RevealOnView from="left" className="order-2 xl:order-1">
							<div className="space-y-5 pt-2">
								{founderStory.map((paragraph) => (
									<p key={paragraph} className="text-display-r leading-[1.75] text-content">
										{paragraph}
									</p>
								))}
							</div>
							<div className="flex justify-center gap-5 pt-4">
								<a
									href="https://www.linkedin.com/in/niki-saki-584743254"
									target="_blank"
									rel="noreferrer"
									aria-label="FuChase on LinkedIn"
									className="inline-flex items-center justify-center transition duration-200 hover:opacity-80"
								>
									<Image src={LinkedinIcon} width={24} height={24} alt="linkedin icon" />
								</a>
								<a
									href="https://www.instagram.com/sadafsakii"
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
							className="relative order-1 h-full min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] md:max-xl:min-h-0 md:max-xl:aspect-[16/10] xl:order-2 xl:min-h-[520px]"
						>
							<Image
								src={FounderImage}
								alt="Founder portrait"
								fill
								sizes="(min-width: 1280px) 38vw, 100vw"
								className="object-cover object-center md:max-xl:object-[center_35%]"
							/>
						</RevealOnView>
					</div>
				</section>
				<section className="order-[50] mx-auto mt-16 max-w-6xl sm:mt-20">
					<RevealOnView from="up">
						<div className="text-center">
							<h2 className="text-heading-4 text-heading">Leadership & Core Team</h2>
							<p className="mx-auto mt-3 max-w-[620px] text-display-r leading-[1.7] text-content/80">
								The FUCHASE leadership structure combines ecosystem architecture,
								institutional alliance, and financial market execution.
							</p>
						</div>
					</RevealOnView>
					<div className="mt-9 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
						{teamMembers.map(({ bio, image, linkedin, name, title }, index) => (
							<RevealOnView key={name} from="up" delayMs={index * 90}>
								<article className="border-t border-[rgba(44,49,25,0.24)] pt-5">
									<div className="relative aspect-[4/5] overflow-hidden bg-accent/35">
										<Image
											src={image}
											alt={name}
											fill
											sizes="(min-width: 1280px) 28vw, (min-width: 640px) 45vw, 100vw"
											className="object-cover object-center"
										/>
									</div>
									<div className="pt-5 text-center">
										<h3 className="text-heading-6 text-heading">{name}</h3>
										<p className="mt-1 text-display-r leading-[1.55] text-primary">
											{Array.isArray(title)
												? title.map((line) => (
														<span key={line} className="block">
															{line}
														</span>
													))
												: title}
										</p>
										{linkedin && (
											<a
												href={linkedin}
												target="_blank"
												rel="noreferrer"
												aria-label={`${name} on LinkedIn`}
												className="mt-3 inline-flex items-center justify-center transition duration-200 hover:opacity-80"
											>
												<Image src={LinkedinIcon} width={24} height={24} alt="linkedin icon" />
											</a>
										)}
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

