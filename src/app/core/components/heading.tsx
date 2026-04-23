import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';

export type HeadingPropsType = {
	name?: string;
	title: string;
	subtitle?: string;
	titleClassName?: string;
	mobileTitleClassName?: string;
};

export default function Heading({
	name,
	title,
	subtitle,
	titleClassName,
	mobileTitleClassName,
}: HeadingPropsType) {
	return (
		<div
			className={`relative mt-36 px-20 pt-20 text-center max-md:mt-[96px] max-md:px-6 max-md:pt-10 ${subtitle ? 'pb-14 max-md:pb-10' : 'pb-24 max-md:pb-14'}`}
		>
			<Image
				src={Ornament}
				width={50}
				height={50}
				alt="ornament"
				className="absolute top-6 left-20 rotate-0 max-md:hidden"
			/>
			<Image
				src={Ornament}
				width={50}
				height={50}
				alt="ornament"
				className="absolute top-6 right-20 rotate-90 max-md:hidden"
			/>
			{name && (
				<span className="my-4 block text-heading-6 text-primary max-md:text-[18px]">
					{name}
				</span>
			)}
			<h1
				className={`mx-auto max-w-[1200px] text-heading text-heading-1 ${
					mobileTitleClassName ?? 'max-md:text-[44px] max-md:leading-[1.1]'
				} ${titleClassName ?? ''}`}
			>
				{title}
			</h1>
			{subtitle && (
				<p className="mx-10 mt-10 text-center text-base text-display-xl max-md:mx-0 max-md:mt-6 max-md:text-[18px] max-md:leading-[1.55]">
					{subtitle}
				</p>
			)}
		</div>
	);
}
