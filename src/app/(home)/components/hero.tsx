'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import HeroImage from '../../../assets/imgs/Hero.png';

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
		<section className="relative z-0 overflow-hidden" ref={ref}>
			<div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px]">
				<Image
					src={HeroImage}
					alt="hero banner"
					fill
					className="object-cover object-center"
					sizes="100vw"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,31,21,0.72)] via-[rgba(15,31,21,0.22)] to-transparent" />
				<div className="absolute inset-x-0 bottom-0 mx-auto flex h-full max-w-1440 items-end px-6 pb-10 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16">
					<div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
						<h1
							className={`max-w-[320px] text-heading-2 text-accent uppercase transition-all duration-700 ease-out lg:text-heading-1
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
						>
							financial ecosystem
						</h1>
						<p
							className={`max-w-[560px] text-display-l text-accent transition-all duration-700 ease-out
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
