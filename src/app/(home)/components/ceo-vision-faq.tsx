import Image from 'next/image';

import CeoImage from '@assets/imgs/ceo/5972092188063632481.jpg';
import Ornament from '@assets/imgs/ornament.png';

import RevealOnView from '@core/components/reveal-on-view';

export default function CeoVisionFaq() {
	return (
		<section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
				<RevealOnView
					from="left"
					className="relative min-h-[420px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] lg:min-h-[540px]"
				>
					<Image
						src={CeoImage}
						alt="CEO vision"
						fill
						sizes="(min-width: 1024px) 40vw, 100vw"
						className="object-cover object-center"
					/>
				</RevealOnView>
				<RevealOnView from="right" className="relative flex flex-col justify-center py-8 sm:px-6 lg:py-10">
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament icon"
						className="pointer-events-none absolute top-0 left-0 hidden rotate-0 sm:block"
					/>
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament icon"
						className="pointer-events-none absolute top-0 right-0 hidden rotate-90 sm:block"
					/>
					<div className="mx-auto w-full max-w-[760px] sm:pt-8">
						<p className="text-center text-link-t uppercase text-primary">CEO Vision</p>
						<h2 className="mt-2 text-heading-3 text-heading max-md:text-[38px]">
							Building a disciplined financial ecosystem.
						</h2>
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
