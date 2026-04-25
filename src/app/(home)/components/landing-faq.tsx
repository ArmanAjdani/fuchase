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

export default function LandingFaq() {
	return (
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
	);
}
