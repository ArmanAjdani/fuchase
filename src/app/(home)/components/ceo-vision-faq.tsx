import Image from 'next/image';

import CeoImage from '@assets/imgs/ceo/5972092188063632481.jpg';
import Ornament from '@assets/imgs/ornament.png';

import RevealOnView from '@core/components/reveal-on-view';

export default function CeoVisionFaq() {
	return (
		<section className="px-6 pb-16 sm:px-10 sm:pb-20 xl:px-16 xl:pb-24">
			<div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
				<RevealOnView
					from="left"
					className="relative order-2 hidden min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] sm:min-h-[420px] xl:order-1 xl:block xl:min-h-[540px]"
				>
					<Image
						src={CeoImage}
						alt="CEO vision"
						fill
						sizes="(min-width: 1280px) 40vw, 100vw"
						className="object-cover object-center"
					/>
				</RevealOnView>
				<RevealOnView
					from="right"
					className="relative order-1 flex flex-col justify-center py-8 sm:px-6 xl:order-2 xl:py-10"
				>
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament icon"
						className="pointer-events-none absolute top-0 left-0 hidden rotate-0 xl:block"
					/>
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament icon"
						className="pointer-events-none absolute top-0 right-0 hidden rotate-90 xl:block"
					/>
					<div className="mx-auto w-full max-w-[760px] sm:pt-8">
						<p className="text-center text-display-r uppercase text-primary">From the Founder & Chair</p>
						<h2 className="mt-2 text-heading-3 text-heading max-md:text-[38px]">
							Building a disciplined financial ecosystem.
						</h2>
						<div className="relative mt-8 min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] md:max-xl:min-h-0 md:max-xl:aspect-[1/1] xl:hidden">
							<Image
								src={CeoImage}
								alt="CEO vision"
								fill
								sizes="100vw"
								className="object-cover object-top"
							/>
						</div>
						<p className="mt-5 text-display-r leading-[1.75] text-content">
							FuChase is shaped around a long-term view: specialized financial entities
							should be strong independently, but more powerful when they operate
							through one aligned architecture.
						</p>
						<p className="mt-5 text-display-r leading-[1.75] text-content">
							The vision is to create a unified structure where capital, infrastructure,
							technology, and market access work as one system for scalable and
							controlled value creation.
						</p>
					</div>
				</RevealOnView>
			</div>
		</section>
	);
}
