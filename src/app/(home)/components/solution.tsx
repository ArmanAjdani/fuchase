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
			className={`mx-auto flex aspect-square w-full max-w-[320px] rounded-[14px] border border-[rgba(15,31,21,0.1)] bg-[#f7f7f2] p-5 shadow-[0px_24px_46px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out max-md:h-[350px] max-md:aspect-auto md:h-full md:min-h-[410px] md:max-w-[280px]
				${className}
        		${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
		>
			<Link
				href={`/blog/${id}`}
				className="group grid h-full w-full grid-rows-[122px_minmax(110px,1fr)_42px] gap-3 md:grid-rows-[145px_minmax(128px,1fr)_auto] md:gap-4"
			>
				<div className="flex h-[122px] items-center justify-center p-0 md:h-[145px] md:p-2">
					<Image
						src={logo}
						alt={`${name} logo`}
						width={240}
						height={180}
						className={`h-auto max-h-[104px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02] md:max-h-[118px] ${logoClassName}`}
					/>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:space-y-3">
					<h3 className="min-h-0 content-center text-center text-heading-6 text-heading md:min-h-[62px]">
						{name}
					</h3>
					<p className="text-center text-display-r leading-[1.45] text-content opacity-80 md:leading-[1.6]">
						{description}
					</p>
				</div>
				<div className="flex min-h-[42px] flex-row flex-wrap items-center justify-center gap-3 self-end">
					<Image src={Location} alt="location logo" width={16} height={20} />
					<span className="capitalize text-subtitle text-badge-t">{location}</span>
				</div>
			</Link>
		</div>
	);
}
