import Image from 'next/image';
import Link from 'next/link';

import Section2 from '@assets/imgs/section2.png';
import ArrowIcon from '@icons/arrow.svg';

const categories = ['Finance', 'AI', 'Broker'];

export type PostPropsType = {
	selectCategory: (category: string) => void;
};

export default function Post({ selectCategory }: PostPropsType) {
	return (
		<div className="text-center max-w-[635px]">
			<Image
				src={Section2}
				width={635}
				alt="blog image"
				className="h-[300px] object-cover rounded-[10px]"
			/>
			<div className="pt-10 px-16">
				<h2 className="text-base text-heading-2">
					Exploring Generative AI in Content Creation
				</h2>
				<p className="text-left text-display-r text-base my-6">
					Learn the core foundations of investing without confusion or complexity. Start
					confidently and build financial habits that create long-term stability.
				</p>
				<Link
					href="/blog/1"
					className="flex flex-row justify-center items-center gap-5 mb-6"
				>
					<span className="underline text-primary text-link-t">Read More</span>
					<Image src={ArrowIcon} width={5} height={9} alt="arrow icon" />
				</Link>
				<div className="flex flex-row flex-wrap justify-center items-center gap-5">
					{categories.map((category) => (
						<div
							key={category}
							className="px-2.5 py-1 border border-light-white rounded-sm cursor-pointer"
							onClick={() => selectCategory(category)}
						>
							{category}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
