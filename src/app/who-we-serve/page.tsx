import { Metadata } from 'next';
import Image from 'next/image';

import WhoWeServeImage from '@assets/imgs/who_we_serve_page.jpg';
import Ornament from '@assets/imgs/ornament.png';

import Heading from '@core/components/heading';

export const metadata: Metadata = {
	title: 'Who We Serve',
	description: 'bla bla bla',
	keywords: ['first', 'second', 'third'],
};

export default function WhoWeServePage() {
	return (
		<>
			<Heading
				title="Who We Serve"
				mobileTitleClassName="max-md:!text-[18px] max-md:!leading-[1.35]"
			/>
			<div className="w-full overflow-hidden lg:mx-auto lg:max-w-5xl">
				<Image
					src={WhoWeServeImage}
					alt="who we serve image"
					className="h-auto w-full object-contain"
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
							Fuchase is designed to serve the entire structure of financial
							markets—from the highest levels of institutional participation to the
							broader layers of market engagement..
						</p>
					</section>

					<section className="mb-6 px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							The ecosystem is built for:
						</p>
						<ul className="list-disc list-inside">
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Institutional players
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Financial firms and infrastructure providers
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Banks and brokerage systems
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Hedge funds and asset managers
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Family offices and capital allocators
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								High-net-worth (HNWIs) and ultra-high-net-worth individuals (UHNWIs)
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								Strategic partners and market operators
							</li>
							<li className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
								And selectively, retail participants operating within structured
								environments
							</li>
						</ul>
					</section>
					<section className="px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							Fuchase does not serve a single segment. It operates across the full
							spectrum of financial market participants, providing access to
							infrastructure, strategic alignment, and integrated solutions.
						</p>
					</section>
					<section className="px-0 sm:px-8 lg:px-56">
						<p className="text-base text-display-xl max-md:text-[17px] max-md:leading-[1.55]">
							Positioned as a unifying layer, Fuchase enables different actors within
							the financial ecosystem to converge, interact, and scale through
							structured systems.
						</p>
					</section>
				</article>
			</div>
		</>
	);
}
