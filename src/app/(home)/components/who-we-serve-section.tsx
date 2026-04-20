'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';
import WhoWeServeImage from '@assets/imgs/who-we-serve.jpg';

const whoWeServeParagraphs = [
	'Fuchase is designed to serve the entire structure of financial markets, from the highest levels of institutional participation to the broader layers of market engagement.',
	'Fuchase does not serve a single segment. It operates across the full spectrum of financial market participants, providing access to infrastructure, strategic alignment, and integrated solutions.',
	'Positioned as a unifying layer, Fuchase enables different actors within the financial ecosystem to converge, interact, and scale through structured systems.',
];

const whoWeServeSegments = [
	'Institutional players',
	'Financial firms and infrastructure providers',
	'Banks and brokerage systems',
	'Hedge funds and asset managers',
	'Family offices and capital allocators',
	'High-net-worth individuals and ultra-high-net-worth individuals',
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
		<section className="pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28">
			<div className="px-6 sm:px-10 lg:px-16">
				<h2 className="mb-8 text-center text-heading-3 text-heading">Who We Serve</h2>
			</div>
			<div
				className="grid items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-16"
				ref={ref}
			>
				<div
					className={`transition-all duration-700 ease-out
        				${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'}`}
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
							{whoWeServeParagraphs.slice(0, 1).map((paragraph) => (
								<p key={paragraph} className="text-display-r text-content">
									{paragraph}
								</p>
							))}
							<ul className="grid gap-3 pt-2 sm:grid-cols-2">
								{whoWeServeSegments.map((segment) => (
									<li key={segment} className="flex items-start gap-3 text-display-r text-content">
										<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
										<span>{segment}</span>
									</li>
								))}
							</ul>
							{whoWeServeParagraphs.slice(1).map((paragraph) => (
								<p key={paragraph} className="text-display-r text-content">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>
				<div
					className={`relative overflow-hidden rounded-[32px] shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out
            			${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-10'}`}
				>
					<Image
						src={WhoWeServeImage}
						alt="who we serve image"
						className="h-full min-h-[360px] w-full object-cover object-center"
					/>
				</div>
			</div>
		</section>
	);
}
