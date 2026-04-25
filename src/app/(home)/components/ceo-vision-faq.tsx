import Image from 'next/image';

import CeoImage from '@assets/imgs/ceo/5972092188063632481.jpg';
import Ornament from '@assets/imgs/ornament.png';

import RevealOnView from '@core/components/reveal-on-view';

const faqs = [
	{
		question: 'What is Fuchase?',
		answer:
			'Fuchase is an advanced financial ecosystem and a multi-layer holding structure composed of specialized sub-companies aligned within one unified ecosystem.',
	},
	{
		question: 'What differentiates Fuchase from traditional platforms?',
		answer:
			'Fuchase is not a single-service platform. It integrates infrastructure, execution, capital, and strategic partnerships across multiple layers of the financial industry.',
	},
	{
		question: 'How can collaboration with Fuchase begin?',
		answer:
			'Collaboration begins with a request, followed by a private meeting to establish mutual understanding, strategic alignment, trust, and long-term potential.',
	},
];

export default function CeoVisionFaq() {
	return (
		<>
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
						<p className="text-link-t uppercase text-primary">CEO Vision</p>
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
		<section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
			<RevealOnView from="up">
				<div className="mx-auto max-w-5xl">
					<div className="text-center">
						<h2 className="text-heading-3 text-heading max-md:text-[38px]">FAQ</h2>
						<p className="mx-auto mt-3 max-w-[620px] text-display-r leading-[1.7] text-content/80">
							Essential questions about the Fuchase ecosystem and how collaboration begins.
						</p>
					</div>
					<div className="mt-9 grid gap-4 md:grid-cols-3">
						{faqs.map(({ question, answer }) => (
							<div key={question} className="border-t border-[rgba(44,49,25,0.24)] pt-5">
								<h3 className="text-heading-6 text-heading">{question}</h3>
								<p className="mt-3 text-display-r leading-[1.65] text-content/80">{answer}</p>
							</div>
						))}
					</div>
				</div>
			</RevealOnView>
		</section>
		</>
	);
}
