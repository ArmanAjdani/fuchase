'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import CloseDarkIcon from '@icons/close-dark.svg';
import RevealOnView from '@core/components/reveal-on-view';
import { solutionPosts } from '@core/data/solutions';

import Post from './post';

export default function Posts() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const setCategory = (category: string) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set('category', category);
		router.push(`?${params.toString()}`);
	};

	const removeCategory = () => {
		const params = new URLSearchParams(searchParams.toString());

		params.delete('category');
		router.push(`?${params.toString()}`);
	};

	const selectedCategory = searchParams.get('category');
	const filteredPosts = selectedCategory
		? solutionPosts.filter(({ tags }) =>
				tags.some((tag) => tag.toLowerCase() === selectedCategory.toLowerCase()),
			)
		: solutionPosts;

	return (
		<>
			<div className="max-w-1440 mx-auto flex flex-row flex-wrap gap-4 justify-center items-center mb-8">
				{selectedCategory && (
						<div className="flex flex-row flex-wrap items-center gap-3 rounded-sm border border-[rgba(44,49,25,0.72)] bg-secondary px-2 py-1 text-heading-6 text-[12px] leading-[1.2] text-accent">
						<span>{selectedCategory}</span>
						<Image
							src={CloseDarkIcon}
							alt="close icon"
							width={12}
							height={12}
							className="cursor-pointer"
							onClick={() => removeCategory()}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-12 max-w-1440 mx-auto mb-28">
				{filteredPosts.map((post, index) => (
					<RevealOnView key={post.id} from="up" delayMs={index * 90}>
						<Post post={post} selectCategory={setCategory} />
					</RevealOnView>
				))}
				{filteredPosts.length === 0 && (
					<p className="text-display-r text-base text-heading px-6 text-center">
						No blog posts found for this tag.
					</p>
				)}
			</div>
		</>
	);
}
