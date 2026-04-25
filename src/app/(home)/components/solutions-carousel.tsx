'use client';

import { type TouchEvent, useMemo, useState } from 'react';
import Image from 'next/image';

import ChevronIcon from '@icons/chevron.svg';
import { solutionPosts } from '@core/data/solutions';

import Solution from './solution';

export default function SolutionsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const visibleCount = 4;

	const visibleSolutions = useMemo(() => {
		return Array.from({ length: visibleCount }, (_, offset) => {
			return solutionPosts[(activeIndex + offset) % solutionPosts.length];
		});
	}, [activeIndex]);

	const goPrevious = () => {
		setActiveIndex((current) => (current - 1 + solutionPosts.length) % solutionPosts.length);
	};

	const goNext = () => {
		setActiveIndex((current) => (current + 1) % solutionPosts.length);
	};

	const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
		if (touchStart === null) {
			return;
		}

		const distance = touchStart - event.changedTouches[0].clientX;

		if (Math.abs(distance) > 45) {
			if (distance > 0) {
				goNext();
			} else {
				goPrevious();
			}
		}

		setTouchStart(null);
	};

	return (
		<section id="solutions" className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
			<div className="mx-auto flex max-w-1440 items-center justify-between gap-5">
				<h2 className="text-heading-3 text-heading">Solutions</h2>
				<div className="hidden items-center gap-3 md:flex">
					<button
						type="button"
						aria-label="Previous solutions"
						className="flex h-12 w-12 cursor-pointer items-center justify-center border border-[rgba(44,49,25,0.28)] bg-transparent transition duration-200 hover:border-primary hover:bg-accent/45"
						onClick={goPrevious}
					>
						<Image
							src={ChevronIcon}
							width={7}
							height={12}
							alt=""
							className="rotate-180"
							aria-hidden
						/>
					</button>
					<button
						type="button"
						aria-label="Next solutions"
						className="flex h-12 w-12 cursor-pointer items-center justify-center border border-[rgba(44,49,25,0.28)] bg-transparent transition duration-200 hover:border-primary hover:bg-accent/45"
						onClick={goNext}
					>
						<Image src={ChevronIcon} width={7} height={12} alt="" aria-hidden />
					</button>
				</div>
			</div>
			<div className="mt-12 lg:mt-16">
				<div className="hidden auto-rows-fr gap-8 md:grid md:grid-cols-2 xl:grid-cols-4 lg:gap-12">
					{visibleSolutions.map(
						({ id, description, location, logo, logoClassName, logoSurfaceClassName, name }, i) => (
							<Solution
								key={`${id}-${activeIndex}`}
								id={id}
								description={description}
								name={name}
								location={location}
								logo={logo}
								logoClassName={logoClassName}
								logoSurfaceClassName={logoSurfaceClassName}
								index={i}
							/>
						),
					)}
				</div>
				<div
					className="touch-pan-y md:hidden"
					onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
					onTouchEnd={handleTouchEnd}
				>
					{visibleSolutions.slice(0, 1).map(
						({ id, description, location, logo, logoClassName, logoSurfaceClassName, name }) => (
							<Solution
								key={`${id}-${activeIndex}`}
								id={id}
								description={description}
								name={name}
								location={location}
								logo={logo}
								logoClassName={logoClassName}
								logoSurfaceClassName={logoSurfaceClassName}
								index={0}
							/>
						),
					)}
				</div>
			</div>
		</section>
	);
}
