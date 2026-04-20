'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';
import WhoWeAreImage from '@assets/imgs/who-we-are.jpg';

const whoWeAreParagraphs = [
	'Fuchase is not a single company. It is a financial core and an evolving financial ecosystem designed to structure, connect, and orchestrate a new generation of financial systems.',
	'This architecture brings together a portfolio of specialized entities across multiple verticals, with a strong focus on the financial industry. Each entity is established with a distinct mandate ranging from brokerage infrastructure and asset management to real estate intelligence, private financial services, and institutional platforms.',
	'Fuchase is not a static structure. It is a progressively expanding financial ecosystem, where each component is introduced with precision and aligned to a broader strategic architecture.',
	'At the center of this framework, Fuchase operates as a unifying integration layer where capital, infrastructure, technology, and market access converge into a cohesive financial environment.',
	'The defining strength of this structure lies in its engineering. The entities within Fuchase are neither fully independent nor traditionally dependent.',
];

const whoWeArePoints = [
	'Operate independently as standalone entities.',
	'Function within an integrated network, interacting seamlessly with one another.',
	'Provide services, support, and strategic value across the wider financial ecosystem through that connection.',
];

export default function WhoWeAre() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.2,
			},
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section className="pt-20 sm:pt-24 lg:pt-28">
			<div className="px-6 sm:px-10 lg:px-16">
				<h2 className="mb-8 text-center text-heading-3 text-heading">Who We Are</h2>
			</div>
			<div
				className="grid items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-16"
				ref={ref}
			>
				<div
					className={`relative overflow-hidden rounded-[32px] shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out
            			${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
				>
					<Image
						src={WhoWeAreImage}
						alt="who we are image"
						className="h-full min-h-[360px] w-full object-cover object-center"
					/>
				</div>
				<div
					className={`transition-all duration-700 ease-out
        				${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
				>
					<div className="relative rounded-[32px] border border-[rgba(15,31,21,0.1)] bg-[rgba(255,255,255,0.45)] px-8 py-10 shadow-[0px_24px_48px_rgba(15,31,21,0.08)] sm:px-10">
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="absolute top-0 left-0 rotate-0"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="absolute top-0 right-0 rotate-90"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="absolute bottom-0 left-0 -rotate-90"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="absolute bottom-0 right-0 rotate-180"
						/>
						<div className="mx-auto max-w-[760px] space-y-4 px-4 sm:px-6">
							{whoWeAreParagraphs.map((paragraph) => (
								<p key={paragraph} className="text-display-r text-content">
									{paragraph}
								</p>
							))}
							<ul className="space-y-3 pt-2">
								{whoWeArePoints.map((point) => (
									<li key={point} className="flex items-start gap-3 text-display-r text-content">
										<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
										<span>{point}</span>
									</li>
								))}
							</ul>
							<p className="pt-2 text-display-r text-content">
								What is being built is not merely a collection of companies, but a
								modular, interconnected financial ecosystem architecture engineered for
								scalability, synergy, and long-term value creation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
