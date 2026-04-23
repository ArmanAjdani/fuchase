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
		<section className="relative z-0 h-[100svh] min-h-[100svh] overflow-hidden bg-secondary" ref={ref}>
			<div className="absolute inset-0">
				<Image
					src={HeroImage}
					alt="Fuchase hero banner"
					fill
					sizes="100vw"
					quality={50}
					priority
					className={`pointer-events-none object-cover object-center opacity-30 blur-[20px] saturate-[0.94] transition-all duration-700 ease-out
					${isVisible ? 'scale-100' : 'scale-[1.04]'}`}
				/>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,12,0.02)_0%,rgba(8,18,12,0.12)_48%,rgba(8,18,12,0.34)_100%)]" />
			</div>
			<div className="absolute inset-0">
				<div className="absolute inset-x-0 top-0 h-[38svh] sm:h-[42svh] lg:inset-0 lg:h-auto">
					<Image
						src={HeroImage}
						alt="Fuchase hero banner"
						fill
						sizes="100vw"
						quality={82}
						priority
						className={`pointer-events-none object-contain object-top lg:object-center lg:[mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)] transition-all duration-700 ease-out
						${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.985]'}`}
					/>
				</div>
				<div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[22vw] bg-[linear-gradient(90deg,rgba(68,75,62,0.65)_0%,rgba(68,75,62,0.28)_48%,transparent_100%)] lg:block" />
				<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[22vw] bg-[linear-gradient(270deg,rgba(108,98,86,0.6)_0%,rgba(108,98,86,0.24)_48%,transparent_100%)] lg:block" />
			</div>
			<div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(8,18,12,0.38)_0%,rgba(8,18,12,0.1)_56%,transparent_100%)]" />
			<div className="absolute inset-0">
				<div className="mx-auto h-full max-w-1440 px-6 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pt-32">
					<div className="flex h-full flex-col justify-start pt-[35svh] pb-10 sm:pt-[38svh] sm:pb-12 lg:hidden">
						<h1
							className={`max-w-[320px] text-left text-heading-2 text-accent uppercase transition-all duration-700 ease-out sm:max-w-[400px]
							${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
						>
							financial ecosystem
						</h1>
						<p
							className={`mt-6 max-w-[360px] text-left text-display-l text-accent transition-all duration-700 ease-out sm:max-w-[430px]
							${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
						>
							Fuchase is a next-generation financial ecosystem designed to connect and
							empower key players across global markets.
						</p>
					</div>
					<div className="relative hidden h-full lg:block">
						<h1
							className={`absolute bottom-20 left-0 max-w-[460px] text-left text-heading-1 text-accent uppercase transition-all duration-700 ease-out xl:max-w-[520px]
							${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
						>
							financial ecosystem
						</h1>
						<p
							className={`absolute right-0 bottom-20 max-w-[430px] text-right text-display-l text-accent transition-all duration-700 ease-out xl:max-w-[470px]
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
