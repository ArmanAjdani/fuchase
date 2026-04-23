import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from '@icons/arrow.svg';
import { SolutionPost } from '@core/data/solutions';

export type PostPropsType = {
	post: SolutionPost;
	selectCategory: (category: string) => void;
};

export default function Post({ post, selectCategory }: PostPropsType) {
	return (
		<div className="w-full max-w-[635px] text-center">
			<Link href={`/blog/${post.id}`} aria-label={`${post.name} article`}>
				<Image
					src={post.banner}
					width={635}
					height={300}
					alt={`${post.name} banner`}
					className="h-[220px] w-full rounded-[10px] object-cover sm:h-[300px]"
				/>
			</Link>
			<div className="px-4 pt-6 sm:px-10 sm:pt-8 lg:px-16 lg:pt-10">
				<h2 className="text-base text-heading-2 max-md:text-[34px] max-md:leading-[1.08]">
					{post.title}
				</h2>
				<p className="text-left text-display-r text-base my-6">{post.summary}</p>
				<Link
					href={`/blog/${post.id}`}
					className="flex flex-row justify-center items-center gap-5 mb-6"
				>
					<span className="underline text-primary text-link-t">Read More</span>
					<Image src={ArrowIcon} width={5} height={9} alt="arrow icon" />
				</Link>
				<div className="flex flex-row flex-wrap justify-center items-center gap-5">
					{post.tags.map((tag) => (
						<div
							key={`${post.id}-${tag}`}
							className="cursor-pointer rounded-sm border border-[rgba(44,49,25,0.72)] bg-secondary px-2 py-1 text-heading-6 text-[13px] leading-[1.2] text-accent transition duration-200 hover:opacity-85"
							onClick={() => selectCategory(tag)}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
