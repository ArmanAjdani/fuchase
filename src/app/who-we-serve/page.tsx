import { Metadata } from 'next';
import Image from 'next/image';

import WhoWeServeImage from '@assets/imgs/who-we-serve.jpg';
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
			<Heading title="Who We Serve" />
			<div className="w-full h-[900px]">
				<Image
					src={WhoWeServeImage}
					alt="who we serve image"
					className="h-full w-full object-cover"
					priority
				/>
			</div>
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
					<section className="px-56 mb-6">
						<p className="text-base text-display-xl">
							Fuchase is designed to serve the entire structure of financial
							markets—from the highest levels of institutional participation to the
							broader layers of market engagement..
						</p>
					</section>

					<section className="px-56 mb-6">
						<p className="text-base text-display-xl">The ecosystem is built for:</p>
						<ul className="list-disc list-inside">
							<li className="text-base text-display-xl">Institutional players</li>
							<li className="text-base text-display-xl">
								Financial firms and infrastructure providers
							</li>
							<li className="text-base text-display-xl">
								Banks and brokerage systems
							</li>
							<li className="text-base text-display-xl">
								Hedge funds and asset managers
							</li>
							<li className="text-base text-display-xl">
								Family offices and capital allocators
							</li>
							<li className="text-base text-display-xl">
								High-net-worth (HNWIs) and ultra-high-net-worth individuals (UHNWIs)
							</li>
							<li className="text-base text-display-xl">
								Strategic partners and market operators
							</li>
							<li className="text-base text-display-xl">
								And selectively, retail participants operating within structured
								environments
							</li>
						</ul>
					</section>
					<section className="px-56">
						<p className="text-base text-display-xl">
							Fuchase does not serve a single segment. It operates across the full
							spectrum of financial market participants, providing access to
							infrastructure, strategic alignment, and integrated solutions.
						</p>
					</section>
					<section className="px-56">
						<p className="text-base text-display-xl">
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
