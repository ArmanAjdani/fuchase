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
		<div className="text-center max-w-[635px]">
			<Image
				src={post.banner}
				width={635}
				height={300}
				alt={`${post.name} banner`}
				className="h-[300px] object-cover rounded-[10px]"
			/>
			<div className="pt-10 px-16">
				<h2 className="text-base text-heading-2">{post.title}</h2>
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
							className="px-2.5 py-1 border border-light-white rounded-sm cursor-pointer"
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
