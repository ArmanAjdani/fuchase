import Hero from './components/hero';
import Partners from './components/partners';
import Solution from './components/solution';
import WhoWeAreSection from './components/who-we-are-section';
import WhoWeServeSection from './components/who-we-serve-section';

import { solutionPosts } from '@core/data/solutions';

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
						{solutionPosts.map(
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
