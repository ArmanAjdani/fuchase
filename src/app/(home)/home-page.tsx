import { StaticImageData } from 'next/image';

import Hero from './components/hero';
import Partners from './components/partners';
import Solution from './components/solution';
import WhoWeAreSection from './components/who-we-are-section';
import WhoWeServeSection from './components/who-we-serve-section';

import ChasePriveLogo from '../../assets/imgs/chase-prive-logo-transparent.webp';
import XChaseLogo from '../../assets/imgs/x-chase-logo-transparent.png';
import ChaseEstateLogo from '../../assets/imgs/chase-estate-logo-transparent.png';
import PrivateChaseLogo from '../../assets/imgs/private-chase-logo-transparent.png';

export type SolutionType = {
	name: string;
	description: string;
	logo: StaticImageData;
	location: string;
	logoSurfaceClassName: string;
	logoClassName?: string;
};

const solutions: SolutionType[] = [
	{
		name: 'X-Chase',
		logo: XChaseLogo,
		description:
			'X-Chase is a financial systems design, development, and management firm, delivering structured solutions for the creation, operation, and scaling of financial infrastructures within a controlled, strategic environment.',
		location: 'New York - USA',
		logoSurfaceClassName: 'bg-[#5d0506]',
	},
	{
		name: 'Private Chase',
		logo: PrivateChaseLogo,
		description:
			'Private Chase is a private Forex brokerage and asset management firm, delivering structured market access and tailored capital management within a controlled, strategic environment.',
		location: 'Seychelles - UAE',
		logoSurfaceClassName: 'bg-[#040404]',
		logoClassName: 'max-h-[180px]',
	},
	{
		name: 'Chase Estate',
		logo: ChaseEstateLogo,
		description:
			'Chase Estate is an AI-powered real estate platform, delivering advanced big data analytics and structured portfolio development for institutional organizations, HNWIs, and UHNWIs within a controlled, strategic environment.',
		location: 'UAE - USA',
		logoSurfaceClassName: 'bg-[#111c74]',
	},
	{
		name: 'Chase Privé',
		logo: ChasePriveLogo,
		description:
			'Chase Privé is a super app designed to deliver a full spectrum of services tailored for HNWIs and UHNWIs, providing integrated access to financial, strategic, and lifestyle solutions within a unified, controlled environment.',
		location: 'Monaco - UAE',
		logoSurfaceClassName: 'bg-[#ddd7ca]',
		logoClassName: 'max-h-[194px]',
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
					<div className="mt-12 grid auto-rows-fr gap-8 md:grid-cols-2 xl:grid-cols-4 lg:mt-16 lg:gap-12">
						{solutions.map(
							({ description, location, logo, logoClassName, logoSurfaceClassName, name }, i) => (
								<Solution
									key={name}
									description={description}
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
