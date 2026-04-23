'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';
import WhoWeAreImage from '@assets/imgs/who-we-are.jpg';

const whoWeAreParagraphs = [
	'Fuchase is a financial core and an expanding ecosystem designed to structure, connect, and orchestrate a new generation of financial systems.',
	'It brings together specialized entities across brokerage infrastructure, asset management, private financial services, real estate intelligence, and institutional platforms.',
	'At the center of the framework, Fuchase operates as the integration layer where capital, infrastructure, technology, and market access converge.',
];

const whoWeArePoints = [
	'Operate independently as standalone entities.',
	'Function within an integrated network, interacting seamlessly with one another.',
	'Create scalable strategic value through a modular financial ecosystem architecture.',
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
				className="grid gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:px-16"
				ref={ref}
			>
				<div
					className={`relative min-h-[360px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out lg:min-h-[540px]
            			${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
				>
					<Image
						src={WhoWeAreImage}
						alt="who we are image"
						fill
						sizes="(min-width: 1024px) 42vw, 100vw"
						quality={82}
						className="object-cover object-center"
					/>
				</div>
				<div
					className={`relative flex min-h-[360px] items-center transition-all duration-700 ease-out lg:min-h-[540px]
        				${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
				>
					<div className="relative flex h-full w-full flex-col justify-center py-8 sm:py-10 lg:py-0">
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute -top-2 left-0 hidden rotate-0 sm:block"
						/>
						<Image
							src={Ornament}
							width={50}
							height={50}
							alt="ornament icon"
							className="pointer-events-none absolute -top-2 right-0 hidden rotate-90 sm:block"
						/>
						<div className="mx-auto flex min-h-[360px] h-full max-w-[720px] flex-col justify-center gap-5 px-2 sm:px-4 lg:min-h-[540px] lg:px-6">
							{whoWeAreParagraphs.map((paragraph) => (
								<p key={paragraph} className="text-display-r leading-[1.75] text-content">
									{paragraph}
								</p>
							))}
							<ul className="space-y-3 pt-1">
								{whoWeArePoints.map((point) => (
									<li
										key={point}
										className="flex items-start gap-3 text-display-r leading-[1.75] text-content"
									>
										<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
										<span>{point}</span>
									</li>
								))}
							</ul>
							<p className="pt-1 text-display-r leading-[1.75] text-content">
								What is being built is not a loose collection of companies, but a
								cohesive and scalable financial ecosystem engineered for long-term
								value creation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
