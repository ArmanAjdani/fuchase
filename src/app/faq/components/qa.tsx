'use client';

import { useCallback, useState } from 'react';

import Image from 'next/image';

import HambergerDarkIcon from '@icons/hamberger-dark.svg';
import CloseDarkIcon from '@icons/close-dark.svg';

export type QaPropsType = {
	question: string;
	answer: string;
};

export default function Qa({ question, answer }: QaPropsType) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, [setIsOpen]);

	return (
		<div className="mb-14" onClick={handleOpen}>
			<div className="flex cursor-pointer items-start gap-4">
				<span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center">
					{isOpen ? (
						<Image src={CloseDarkIcon} width={18} height={18} alt="close icon" />
					) : (
						<Image src={HambergerDarkIcon} width={20} height={15} alt="hamberger icon" />
					)}
				</span>
				<p className="flex-1 text-base text-display-xl max-md:text-[20px] max-md:leading-[1.3]">
					{question}
				</p>
			</div>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out mx-0 sm:mx-12 lg:mx-24 ${isOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
			>
				<p className="text-display-r text-base">{answer}</p>
			</div>
		</div>
	);
}
