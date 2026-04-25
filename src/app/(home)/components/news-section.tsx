'use client';

import { type TouchEvent, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import ArrowIcon from '@icons/arrow.svg';
import ChevronIcon from '@icons/chevron.svg';
import NewsImageOne from '@assets/imgs/blog/IMG_3948.png';
import NewsImageTwo from '@assets/imgs/blog/IMG_3942.jpg';
import NewsImageThree from '@assets/imgs/blog/IMG_3943.jpg';

type NewsItem = {
	title: string;
	description: string;
	image: StaticImageData;
	href: string;
};

const newsItems: NewsItem[] = [
	{
		title: 'FuChase ecosystem updates and market perspective.',
		description:
			'Follow the latest external updates, announcements, and ecosystem perspectives from FuChase.',
		image: NewsImageOne,
		href: 'https://www.linkedin.com/company/fuchase/',
	},
	{
		title: 'Strategic financial systems built for global scale.',
		description:
			'Explore how the FuChase ecosystem connects capital, infrastructure, technology, and execution.',
		image: NewsImageTwo,
		href: 'https://www.linkedin.com/company/fuchase/',
	},
	{
		title: 'Institutional partnerships across interconnected markets.',
		description:
			'Read more about FuChase perspectives on long-term alignment, structure, and financial ecosystem design.',
		image: NewsImageThree,
		href: 'https://www.linkedin.com/company/fuchase/',
	},
];

export default function NewsSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const activeItem = newsItems[activeIndex];

	const goPrevious = () => {
		setActiveIndex((current) => (current - 1 + newsItems.length) % newsItems.length);
	};

	const goNext = () => {
		setActiveIndex((current) => (current + 1) % newsItems.length);
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
		<section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
			<div className="mb-8 flex items-center justify-between gap-5">
				<h2 className="text-heading-3 text-heading">News</h2>
				<div className="hidden items-center gap-3 md:flex">
					<button
						type="button"
						aria-label="Previous news"
						className="flex h-12 w-12 cursor-pointer items-center justify-center border border-[rgba(44,49,25,0.28)] bg-transparent transition duration-200 hover:border-primary hover:bg-accent/45"
						onClick={goPrevious}
					>
						<Image src={ChevronIcon} width={7} height={12} alt="" className="rotate-180" />
					</button>
					<button
						type="button"
						aria-label="Next news"
						className="flex h-12 w-12 cursor-pointer items-center justify-center border border-[rgba(44,49,25,0.28)] bg-transparent transition duration-200 hover:border-primary hover:bg-accent/45"
						onClick={goNext}
					>
						<Image src={ChevronIcon} width={7} height={12} alt="" />
					</button>
				</div>
			</div>
			<div
				className="touch-pan-y grid overflow-hidden border-y border-[rgba(44,49,25,0.22)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
				onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
				onTouchEnd={handleTouchEnd}
			>
				<div className="relative min-h-[260px] sm:min-h-[360px]">
					<Image
						src={activeItem.image}
						alt={activeItem.title}
						fill
						sizes="(min-width: 1024px) 38vw, 100vw"
						className="object-cover object-center"
					/>
				</div>
				<div className="flex flex-col justify-center px-1 py-8 sm:px-8 lg:px-12">
					<p className="text-link-t uppercase text-primary">External News</p>
					<h3 className="mt-2 text-heading-3 text-heading max-md:text-[38px]">
						{activeItem.title}
					</h3>
					<p className="mt-5 text-display-r leading-[1.75] text-content/85">
						{activeItem.description}
					</p>
					<a
						href={activeItem.href}
						target="_blank"
						rel="noreferrer"
						className="mt-8 inline-flex w-fit items-center gap-4 border border-primary px-6 py-3 text-button-m text-primary transition duration-200 hover:bg-primary hover:text-accent"
					>
						<span>Read More</span>
						<Image src={ArrowIcon} width={5} height={9} alt="" />
					</a>
				</div>
			</div>
		</section>
	);
}
