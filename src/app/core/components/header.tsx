'use client';

import { useMemo, useState } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import LogoLight from '@public/logo.svg';
import MenuIcon from '@icons/menu.svg';
import MenuDarkIcon from '@icons/menu-dark.svg';

import Navbar from './navbar';

export default function Header() {
	const pathname = usePathname();
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const isDark = useMemo(() => {
		return pathname !== '/';
	}, [pathname]);

	return (
		<header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
			<div className="mx-4 flex flex-row flex-wrap items-center justify-between sm:mx-10">
				<Link href="/">
					<Image
						src={LogoLight}
						width={120}
						height={70}
						alt="furchase logo"
						className={`h-auto w-[100px] cursor-pointer sm:w-[120px] ${isDark ? 'brightness-0' : ''}`}
						priority
					/>
				</Link>
				<div className="flex flex-row flex-wrap items-center">
					<Link
						href="/contact-us"
						className={`mr-3 hidden cursor-pointer border p-2 text-display-s sm:mr-6 xl:block ${isDark ? 'text-base border-dark-button' : 'text-accent border-dark-white'}`}
					>
						Private Inquiry
					</Link>
					<div className="cursor-pointer p-3 sm:p-4" onClick={() => setIsNavbarOpen(true)}>
						{isDark ? (
							<Image
								src={MenuDarkIcon}
								alt="menu-dark icon"
								width={16}
								height={12}
								className="block"
							/>
						) : (
							<Image
								src={MenuIcon}
								alt="menu icon"
								width={16}
								height={12}
								className="block"
							/>
						)}
					</div>
				</div>
			</div>
			<Navbar open={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
		</header>
	);
}
