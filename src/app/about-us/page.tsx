import { Metadata } from 'next';
import Image from 'next/image';

import AboutUsImage from '@assets/imgs/about-us.png';
import Ornament from '@assets/imgs/ornament.png';
import AboutUsFootageImage from '@assets/imgs/about-us-footage.jpg';

import Heading from '@core/components/heading';

export const metadata: Metadata = {
	title: 'About Us',
	description: 'bla bla bla',
	keywords: ['first', 'second', 'third'],
};

export default function AboutUsPage() {
	return (
		<>
			<Heading
				name="Who We are"
				title="Empowering global liquidity through transparent innovation."
			/>
			{/* banner */}
			<Image
				src={AboutUsImage}
				alt="about us image"
				className="w-full"
				width={1440}
				height={772}
				priority
			/>
			{/* content */}
			<div className="my-14 py-12 mx-20 relative">
				<Image
					src={Ornament}
					width={50}
					height={50}
					alt="ornament"
					className="absolute top-0 left-20 rotate-0"
				/>
				<Image
					src={Ornament}
					width={50}
					height={50}
					alt="ornament"
					className="absolute top-0 right-20 rotate-90"
				/>
				<article className="pl-10">
					<section className="px-56">
						<p className="text-base text-display-xl">
							Established in 1672 at the Sign of the Golden Bottle and owned
							continuously by the Hoare family for 12 generations, C. Hoare & Co. is
							the UK’s oldest privately owned bank. The partners today are stewards of
							a unique and evolving culture built on personal trust and outstanding
							customer service.
						</p>
						<br />
						<br />
						<h2 className="text-heading text-heading-2">Family values</h2>
						<br />
						<br />
						<p className="text-base text-display-xl">
							Underpinned by Hoare family values of honesty, empathy, excellence and
							social responsibility, personal relationships are the heart of our
							business. We enjoy working with individuals and families who share our
							values, and are pleased to work with their businesses too. We take time
							to understand exactly what is important to them and how best we can help
							them prosper. These high standards of care extend to the world around
							us: the partners donate up to 10% of the bank’s annual profits to
							charitable causes via the Golden Bottle Trust, while our Master
							Charitable Trust helps customers make the most of their own charitable
							giving.
						</p>
					</section>
					<p className="text-base text-heading-4 py-16 px-28 text-justify">
						&quot;Close, confidential relationships allow us to anticipate our
						customers’ needs and our values inform our decisions at every level of the
						business.&quot;
					</p>
					<section className="px-56">
						<h2 className="text-heading text-heading-2">Small and secure</h2>
						<br />
						<br />
						<p className="text-base text-display-xl">
							As a small, independent bank, we are able to agree individual
							arrangements with speed and flexibility. The partners’ unlimited
							liability and conservative attitude to risk provides an extra level of
							security: having weathered three industrial revolutions, the Wall Street
							Crash and successive global crises, we have a strong reputation as a
							safe haven for our customers’ wealth. We recognise, however, that
							financial affairs have grown more complex since our founder took his
							neighbours’ gold into keeping. Relationship managers gain deep
							understanding of each customer’s needs and aspirations to provide
							bespoke 21st-century banking complemented by online and mobile services.
						</p>
					</section>
				</article>
			</div>
			{/* footage */}
			<div className="flex flex-row flex-wrap justify-between items-center max-w-1440 mx-auto mb-24 px-10">
				<div className="pt-10 pe-12 w-1/2">
					<div className="relative p-2">
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament"
							className="absolute top-0 left-0 rotate-0"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament"
							className="absolute top-0 right-0 rotate-90"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament"
							className="absolute bottom-0 left-0 rotate-270"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament"
							className="absolute bottom-0 right-0 rotate-180"
						/>
						<div className="my-14 mx-2">
							<p className="text-display-l text-content text-justify mb-4">
								Niki Saki is a financial systems architect, entrepreneur, and
								Founder & CEO of Fuchase, with over a decade of experience operating
								at the intersection of financial markets, infrastructure, and
								institutional strategy.
							</p>
							<p className="text-display-l text-content text-justify mb-4">
								Her career began within the financial markets, where she developed a
								deep, practical understanding of both trading environments and the
								structural mechanics behind them. This foundation evolved into a
								broader specialization in the design, development, and execution of
								financial systems across multiple sectors.
							</p>
							<p className="text-display-l text-content text-justify mb-4">
								Over the years, she has been directly involved in the architecture,
								launch, and management of complex financial
								infrastructures—including brokerage systems, asset management
								structures, and institutional-grade financial platforms. Her
								expertise lies not only in building these systems, but in
								structuring them for scalability, operational efficiency, and
								long-term sustainability.
							</p>
							<p className="text-display-l text-content text-justify mb-4">
								As a strategist, she approaches financial markets not from a
								transactional perspective, but from a systems-level
								viewpoint—focusing on how capital, technology, and operational
								frameworks integrate to create enduring financial ecosystems.
							</p>
							<p className="text-display-l text-content text-justify mb-4">
								Through Fuchase, Niki Saki is leading the development of a modular
								and interconnected financial ecosystem, designed to unify different
								layers of the market into a cohesive, scalable, and strategically
								aligned structure.
							</p>
							<p className="text-display-l text-content text-justify">
								Her work reflects a consistent focus on precision, structure, and
								execution—positioning her as a builder of financial systems rather
								than a participant within them.
							</p>
						</div>
					</div>
				</div>
				<Image
					src={AboutUsFootageImage}
					width={600}
					alt="who we are image"
					className="w-1/2 h-auto"
				/>
			</div>
		</>
	);
}
