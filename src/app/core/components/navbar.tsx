import Image from 'next/image';
import Link from 'next/link';

import Logo from '@public/logo.svg';
import CloseLightIcon from '@icons/close-light.svg';

export type NavbarPropsType = {
	open: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

export default function Navbar({ open, setIsOpen }: NavbarPropsType) {
	const links = [
		{
			name: 'About Us',
			url: '/about-us',
		},
		{
			name: 'Who We Are',
			url: '/who-we-are',
		},
		{
			name: 'Who We Serve',
			url: '/who-we-serve',
		},
		{
			name: 'Contact us',
			url: '/contact-us',
		},
		{
			name: 'Blog',
			url: '/blog',
		},
		{
			name: 'FAQ',
			url: '/faq',
		},
	];

	return (
		<nav
			className={`fixed inset-0 z-40 bg-base-shadow px-6 pt-5 pb-8 backdrop-blur-md transition-all duration-500 ease-in-out md:bottom-auto md:left-0 md:right-0 md:top-0 md:h-auto md:px-10 md:pt-0 md:pb-0
        ${
			open
				? 'translate-y-0 opacity-100 pointer-events-auto'
				: 'max-md:-translate-y-4 md:-translate-y-full opacity-0 pointer-events-none'
		}`}
		>
			<div className="mx-auto flex h-full max-w-1440 flex-col max-md:h-full md:h-auto md:flex-row md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<Link href="/" onClick={() => setIsOpen(false)}>
						<Image
							src={Logo}
							width={120}
							height={70}
							alt="furchase logo"
							className="h-auto w-[100px] cursor-pointer shrink-0 sm:w-[120px]"
						/>
					</Link>
					<div className="cursor-pointer p-2 md:hidden" onClick={() => setIsOpen(false)}>
						<Image src={CloseLightIcon} width={16} height={16} alt="close icon" />
					</div>
				</div>
				<div className="mt-8 flex flex-1 flex-col md:mt-0 md:flex-row md:items-center md:justify-end">
					<ul className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-9 md:gap-y-3 md:pl-8 md:pr-10 md:flex-1 md:max-w-[1120px] lg:gap-x-14">
						{links.map(({ name, url }) => (
							<li key={name}>
								<Link
									href={url}
									className="text-display-r text-accent transition duration-200 hover:text-white max-md:text-[30px] max-md:leading-[1.08] md:whitespace-nowrap md:text-[15px] lg:text-[16px]"
									onClick={() => setIsOpen(false)}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
					<div className="hidden cursor-pointer shrink-0 p-4 md:block" onClick={() => setIsOpen(false)}>
						<Image src={CloseLightIcon} width={13} height={13} alt="close icon" />
					</div>
				</div>
			</div>
		</nav>
	);
}
