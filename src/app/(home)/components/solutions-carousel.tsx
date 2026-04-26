'use client';

import { type TouchEvent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import ChevronIcon from '@icons/chevron.svg';
import { solutionPosts } from '@core/data/solutions';

import Solution from './solution';

const xChaseIndex = solutionPosts.findIndex(({ id }) => id === 'x-chase');
const orderedSolutionPosts =
	xChaseIndex >= 0
		? [...solutionPosts.slice(xChaseIndex), ...solutionPosts.slice(0, xChaseIndex)]
		: solutionPosts;

export default function SolutionsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(1);
	const [touchStart, setTouchStart] = useState<number | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)');
		const updateItemsPerPage = () => {
			setItemsPerPage(mediaQuery.matches ? 4 : 1);
			setActiveIndex(0);
		};

		updateItemsPerPage();
		mediaQuery.addEventListener('change', updateItemsPerPage);

		return () => mediaQuery.removeEventListener('change', updateItemsPerPage);
	}, []);

	const visibleSolutions = useMemo(() => {
		return orderedSolutionPosts.slice(activeIndex, activeIndex + itemsPerPage);
	}, [activeIndex, itemsPerPage]);

	const pageCount = Math.ceil(orderedSolutionPosts.length / itemsPerPage);
	const pageStarts = Array.from({ length: pageCount }, (_, index) => index * itemsPerPage);

	const goPrevious = () => {
		setActiveIndex((current) => {
			const currentPage = Math.max(0, pageStarts.indexOf(current));

			return pageStarts[(currentPage - 1 + pageStarts.length) % pageStarts.length];
		});
	};

	const goNext = () => {
		setActiveIndex((current) => {
			const currentPage = Math.max(0, pageStarts.indexOf(current));

			return pageStarts[(currentPage + 1) % pageStarts.length];
		});
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
		<section id="solutions" className="px-6 pb-10 pt-14 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
			<div className="relative mx-auto flex max-w-1440 items-center justify-center gap-5">
				<h2 className="text-center text-heading-3 text-heading">Solutions</h2>
				<div className="absolute right-0 hidden items-center gap-3 md:flex">
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
			<div className="mt-8 sm:mt-12 lg:mt-16">
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
			<div className="mt-8 flex justify-center gap-2">
				{pageStarts.map((startIndex, index) => (
					<button
						key={orderedSolutionPosts[startIndex].id}
						type="button"
						aria-label={`Show solution page ${index + 1}`}
						className={`h-1.5 cursor-pointer rounded-full transition-all duration-200 ${
							startIndex === activeIndex
								? 'w-8 bg-primary'
								: 'w-2 bg-primary/35 hover:bg-primary/60'
						}`}
						onClick={() => setActiveIndex(startIndex)}
					/>
				))}
			</div>
		</section>
	);
}
