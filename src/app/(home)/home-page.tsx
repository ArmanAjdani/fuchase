import CeoVisionFaq from './components/ceo-vision-faq';
import Hero from './components/hero';
import LandingFaq from './components/landing-faq';
import NewsSection from './components/news-section';
import Partners from './components/partners';
import SolutionsCarousel from './components/solutions-carousel';
import WhoWeAreSection from './components/who-we-are-section';
import WhoWeServeSection from './components/who-we-serve-section';

export default function HomePage() {
	return (
		<>
			<Hero />
			<Partners />
			<div className="mx-auto max-w-1440">
				<WhoWeAreSection />
				<SolutionsCarousel />
				<WhoWeServeSection />
				<CeoVisionFaq />
				<NewsSection />
				<LandingFaq />
			</div>
		</>
	);
}
