'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Location from '@icons/location.svg';

export type SolutionPropsType = {
	id: string;
	name: string;
	description: string;
	logo: StaticImageData;
	location: string;
	index: number;
	logoSurfaceClassName: string;
	logoClassName?: string;
	className?: string;
};

export default function Solution({
	id,
	name,
	description,
	logo,
	location,
	index = 0,
	logoClassName = '',
	className = '',
}: SolutionPropsType) {
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
		<div
			ref={ref}
			style={{ transitionDelay: `${index * 100}ms` }}
			className={`mx-auto flex h-full min-h-[410px] w-full max-w-[280px] rounded-[14px] border border-[rgba(15,31,21,0.1)] bg-[#f7f7f2] p-5 shadow-[0px_24px_46px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out
				${className}
        		${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
		>
			<Link href={`/blog/${id}`} className="group grid h-full w-full grid-rows-[145px_minmax(128px,1fr)_auto] gap-4">
				<div className="flex h-[145px] items-center justify-center p-2">
					<Image
						src={logo}
						alt={`${name} logo`}
						width={240}
						height={180}
						className={`h-auto max-h-[118px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] ${logoClassName}`}
					/>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3">
					<h3 className="min-h-[62px] content-center text-center text-heading-6 text-heading">
						{name}
					</h3>
					<p className="text-center text-display-r leading-[1.6] text-content opacity-80">
						{description}
					</p>
				</div>
				<div className="flex min-h-[42px] flex-row flex-wrap items-center justify-center gap-3">
					<Image src={Location} alt="location logo" width={16} height={20} />
					<span className="capitalize text-subtitle text-badge-t">{location}</span>
				</div>
			</Link>
		</div>
	);
}
