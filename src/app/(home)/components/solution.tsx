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
};

export default function Solution({
	id,
	name,
	description,
	logo,
	location,
	index = 0,
	logoSurfaceClassName,
	logoClassName = '',
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
			className={`mx-auto h-full w-full max-w-[300px] rounded-[28px] border border-[rgba(15,31,21,0.1)] bg-[#f7f7f2] p-6 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out
        		${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
		>
			<Link href={`/blog/${id}`} className="group flex h-full flex-col gap-6">
				<div
					className={`flex h-[220px] items-center justify-center rounded-[24px] p-6 ${logoSurfaceClassName}`}
				>
					<Image
						src={logo}
						alt={`${name} logo`}
						width={240}
						height={180}
						className={`h-auto max-h-[172px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] ${logoClassName}`}
					/>
				</div>
				<div className="flex flex-1 flex-col space-y-3">
					<h3 className="text-heading-6 text-heading text-center">{name}</h3>
					<p className="flex-1 text-center text-display-r leading-[1.7] text-content opacity-80">
						{description}
					</p>
				</div>
				<div className="mt-auto flex flex-row flex-wrap items-center justify-center gap-3">
					<Image src={Location} alt="location logo" width={16} height={20} />
					<span className="capitalize text-subtitle text-badge-t">{location}</span>
				</div>
			</Link>
		</div>
	);
}
