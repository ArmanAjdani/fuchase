import { StaticImageData } from 'next/image';

import Hero from './components/hero';
import Partners from './components/partners';
import Solution from './components/solution';
import WhoWeAreSection from './components/who-we-are-section';
import WhoWeServeSection from './components/who-we-serve-section';

import FuChaseLogo from '../../assets/imgs/fu-chase-logo-transparent.png';
import XChaseLogo from '../../assets/imgs/x-chase-logo-transparent.png';
import ChaseEstateLogo from '../../assets/imgs/chase-estate-logo-transparent.png';
import PrivateChaseLogo from '../../assets/imgs/private-chase-logo-transparent.png';

export type SolutionType = {
	name: string;
	logo: StaticImageData;
	location: string;
	logoSurfaceClassName: string;
	logoClassName?: string;
};

const solutions: SolutionType[] = [
	{
		name: 'X Chase',
		logo: XChaseLogo,
		location: 'New York - USA',
		logoSurfaceClassName: 'bg-[#5d0506]',
	},
	{
		name: 'Private Chase',
		logo: PrivateChaseLogo,
		location: 'Seychelles - UAE',
		logoSurfaceClassName: 'bg-[#040404]',
		logoClassName: 'max-h-[180px]',
	},
	{
		name: 'Chase Estate',
		logo: ChaseEstateLogo,
		location: 'UAE - USA',
		logoSurfaceClassName: 'bg-[#111c74]',
	},
	{
		name: 'Fuchase',
		logo: FuChaseLogo,
		location: 'Monaco - UAE',
		logoSurfaceClassName: 'bg-[#627581]',
	},
];

export default function HomePage() {
	return (
		<>
			<Hero />
			<Partners />
			<div className="mx-auto max-w-1440">
				<WhoWeAreSection />
				<div className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
					<h2 className="text-center text-heading-3 text-heading">Solutions</h2>
					<div className="mt-12 flex flex-row flex-wrap justify-center gap-8 lg:mt-16 lg:gap-12">
						{solutions.map(
							({ location, logo, logoClassName, logoSurfaceClassName, name }, i) => (
								<Solution
									key={name}
									name={name}
									location={location}
									logo={logo}
									logoClassName={logoClassName}
									logoSurfaceClassName={logoSurfaceClassName}
									index={i}
								/>
							),
						)}
					</div>
				</div>
				<WhoWeServeSection />
			</div>
		</>
	);
}
