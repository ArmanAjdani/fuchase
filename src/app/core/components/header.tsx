'use client';

import { useMemo, useState } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@public/logo.svg';
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
			<div className="flex flex-row flex-wrap justify-between items-center mx-10">
				<Link href="/">
					<Image
						src={Logo}
						width={120}
						height={70}
						alt="furchase logo"
						className="w-full cursor-pointer"
						priority
					/>
				</Link>
				<div className="flex flex-row flex-wrap items-center">
					<button
						className={`text-display-s p-2 border mr-6 cursor-pointer ${isDark ? 'text-base border-dark-button' : 'text-accent border-dark-white'}`}
					>
						Private Inquiry
					</button>
					<div className="p-4 cursor-pointer" onClick={() => setIsNavbarOpen(true)}>
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
