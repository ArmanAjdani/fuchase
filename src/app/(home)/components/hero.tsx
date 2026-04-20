'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import HeroImage from '../../../assets/imgs/h-hero.webp';

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
		<section className="relative z-0 h-[100svh] min-h-[100svh] overflow-hidden" ref={ref}>
			<div className="relative h-full">
				<Image
					src={HeroImage}
					alt="hero banner"
					fill
					className="object-cover object-center"
					sizes="100vw"
					priority
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,21,15,0.9)_0%,rgba(10,21,15,0.76)_24%,rgba(10,21,15,0.46)_45%,rgba(10,21,15,0.18)_68%,rgba(10,21,15,0.32)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,12,0.08)_0%,rgba(8,18,12,0.12)_56%,rgba(8,18,12,0.4)_100%)]" />
				<div className="absolute inset-x-0 bottom-0 mx-auto flex h-full max-w-1440 items-end px-6 pb-12 pt-32 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16">
					<div className="flex w-full max-w-[640px] flex-col gap-6 lg:gap-8">
						<h1
							className={`max-w-[360px] text-heading-2 text-accent uppercase transition-all duration-700 ease-out lg:max-w-[420px] lg:text-heading-1
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
						>
							financial ecosystem
						</h1>
						<p
							className={`max-w-[520px] text-display-l text-accent transition-all duration-700 ease-out lg:pb-2
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
