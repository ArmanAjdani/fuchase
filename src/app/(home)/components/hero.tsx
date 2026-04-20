'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import HeroImage from '../../../assets/imgs/h-large.jpg';

export default function Hero() {
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
		<section className="relative z-0 h-[100svh] min-h-[100svh] overflow-hidden bg-secondary" ref={ref}>
			<div className="absolute inset-0">
				<Image
					src={HeroImage}
					alt="Fuchase hero banner"
					fill
					sizes="100vw"
					quality={35}
					priority
					className={`pointer-events-none object-cover object-center opacity-32 blur-[18px] saturate-[0.82] transition-all duration-700 ease-out
					${isVisible ? 'scale-100' : 'scale-[1.04]'}`}
				/>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,12,0.04)_0%,rgba(8,18,12,0.16)_42%,rgba(8,18,12,0.64)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,12,0.72)_0%,rgba(8,18,12,0.26)_16%,rgba(8,18,12,0.05)_34%,rgba(8,18,12,0.05)_66%,rgba(8,18,12,0.46)_84%,rgba(8,18,12,0.76)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,12,0.32)_0%,rgba(8,18,12,0.08)_18%,rgba(8,18,12,0.04)_74%,rgba(8,18,12,0.42)_100%)]" />
			</div>
			<div className="absolute inset-0">
				<Image
					src={HeroImage}
					alt="Fuchase hero banner"
					fill
					sizes="100vw"
					quality={95}
					priority
					className={`pointer-events-none object-contain object-center transition-all duration-700 ease-out
					${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.985]'}`}
				/>
			</div>
			<div className="absolute inset-0">
				<div className="mx-auto flex h-full max-w-1440 items-end px-6 pb-14 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-16 lg:pb-20">
					<div className="grid w-full gap-8 lg:grid-cols-[minmax(280px,0.85fr)_minmax(340px,0.75fr)] lg:items-end lg:gap-12">
						<h1
							className={`max-w-[360px] text-left text-heading-2 text-accent uppercase transition-all duration-700 ease-out sm:max-w-[400px] lg:max-w-[460px] lg:text-heading-1
							${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
						>
							financial ecosystem
						</h1>
						<p
							className={`max-w-[360px] text-left text-display-l text-accent transition-all duration-700 ease-out sm:max-w-[430px] lg:justify-self-end lg:text-right
							${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
						>
						Fuchase is a next-generation financial ecosystem designed to connect and
						empower key players across global markets.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
