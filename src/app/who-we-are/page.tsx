import { Metadata } from 'next';
import Image from 'next/image';

import WhoWeAreImage from '@assets/imgs/who-we-are.jpg';
import Ornament from '@assets/imgs/ornament.png';

import Heading from '@core/components/heading';

export const metadata: Metadata = {
	title: 'Who We Are',
	description: 'bla bla bla',
	keywords: ['first', 'second', 'third'],
};

export default function WhoWeArePage() {
	return (
		<>
			<Heading
				title="Who We Are"
				mobileTitleClassName="max-md:!text-[18px] max-md:!leading-[1.35]"
			/>
			<div className="relative h-[30vh] min-h-[220px] w-full overflow-hidden sm:h-[36vh] lg:h-[44vh]">
				<Image
					src={WhoWeAreImage}
					alt="who we are image"
					className="h-full w-full object-cover object-center"
					priority
				/>
			</div>

			<div className="relative mx-4 my-10 py-8 sm:mx-10 lg:mx-20 lg:my-14 lg:py-12">
				<Image
					src={Ornament}
					width={50}
					height={50}
					alt="ornament"
					className="absolute top-0 left-20 hidden rotate-0 sm:block"
				/>
				<Image
					src={Ornament}
					width={50}
					height={50}
					alt="ornament"
					className="absolute top-0 right-20 hidden rotate-90 sm:block"
				/>
				<article className="pl-0 lg:pl-10">
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							Fuchase is not a single company— it is a financial core and an evolving
							financial ecosystem, designed to structure, connect, and orchestrate a
							new generation of financial systems.
						</p>
					</section>
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							This architecture brings together a portfolio of specialized entities
							across multiple verticals, with a strong focus on the financial
							industry. Each entity is established with a distinct mandate—ranging
							from brokerage infrastructure and asset management to real estate
							intelligence, private financial services, and institutional platforms.
						</p>
					</section>
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							Fuchase is not a static structure. It is a progressively expanding
							financial ecosystem, where each component is introduced with precision
							and aligned to a broader strategic architecture.
						</p>
					</section>
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							At the center of this framework, Fuchase operates as a unifying
							integration layer—a point where capital, infrastructure, technology, and
							market access converge into a cohesive financial environment.
						</p>
					</section>
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							The defining strength of this structure lies in its engineering:
						</p>
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							The entities within Fuchase are neither fully independent nor
							traditionally dependent.
						</p>
					</section>
					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							Instead, they are designed to:
						</p>
						<ul className="list-disc list-inside">
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Operate independently as standalone entities
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Function within an integrated network, interacting seamlessly with
								one another
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								And through this connection, provide services, support, and
								strategic value across the financial ecosystem
							</li>
						</ul>
					</section>
					<section className="px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							What is being built is not merely a collection of companies, but a
							modular, interconnected financial ecosystem architecture— engineered for
							scalability, synergy, and long-term value creation.
						</p>
					</section>
				</article>
			</div>
		</>
	);
}
