'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';
import WhoWeServeImage from '@assets/imgs/who-we-serve.jpg';

const whoWeServeParagraphs = [
	'Fuchase serves financial markets across institutional and strategic segments, from infrastructure providers and capital allocators to structured private and selective retail participation.',
	'Positioned as a unifying layer, Fuchase enables different actors within the financial ecosystem to converge, interact, and scale through structured systems.',
];

const whoWeServeSegments = [
	'Institutional players',
	'Banks and brokerage systems',
	'Hedge funds and asset managers',
	'Family offices and capital allocators',
	'High-net-worth and ultra-high-net-worth individuals',
	'Strategic partners and market operators',
	'Select retail participants operating within structured environments',
];

export default function WhoWeServe() {
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
		<section className="pb-14 pt-10 sm:pb-24 sm:pt-24 lg:pb-28">
			<div className="px-6 sm:px-10 lg:px-16">
				<h2 className="mb-8 text-center text-heading-3 text-heading">Who We Serve</h2>
			</div>
			<div
				className="grid gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:px-16"
				ref={ref}
			>
				<div
					className={`relative order-2 flex min-h-[360px] items-center transition-all duration-700 ease-out lg:order-1 lg:min-h-[540px]
        				${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
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
							{whoWeServeParagraphs.slice(0, 1).map((paragraph) => (
								<p key={paragraph} className="text-display-r leading-[1.75] text-content">
									{paragraph}
								</p>
							))}
							<ul className="grid gap-3 pt-1 sm:grid-cols-2">
								{whoWeServeSegments.map((segment) => (
									<li
										key={segment}
										className="flex items-start gap-3 text-display-r leading-[1.75] text-content"
									>
										<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
										<span>{segment}</span>
									</li>
								))}
							</ul>
							{whoWeServeParagraphs.slice(1).map((paragraph) => (
								<p key={paragraph} className="text-display-r leading-[1.75] text-content">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>
				<div
					className={`relative order-1 min-h-[300px] overflow-hidden shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out sm:min-h-[360px] lg:order-2 lg:min-h-[540px]
            			${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
				>
					<Image
						src={WhoWeServeImage}
						alt="who we serve image"
						fill
						sizes="(min-width: 1024px) 42vw, 100vw"
						quality={82}
						className="object-cover object-center"
					/>
				</div>
			</div>
		</section>
	);
}
