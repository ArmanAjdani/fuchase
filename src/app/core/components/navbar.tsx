import Image from 'next/image';
import Link from 'next/link';

import Logo from '@public/logo.svg';
import CloseLightIcon from '@icons/close-light.svg';
import MailIcon from '@icons/mail.svg';
import PhoneIcon from '@icons/phone.svg';
import LinkedinIcon from '@icons/linkedin.svg';
import InstagramIcon from '@icons/instagram.svg';

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

	const quickLinks = [
		{
			name: 'ceo@fuchase.com',
			url: 'mailto:ceo@fuchase.com',
			icon: MailIcon,
		},
		{
			name: '+971 50 612 5001',
			url: 'tel:+971506125001',
			icon: PhoneIcon,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/company/fuchase/',
			icon: LinkedinIcon,
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/sadafsakii',
			icon: InstagramIcon,
		},
	];

	return (
		<nav
			className={`fixed inset-0 z-40 bg-base-shadow px-6 pt-5 pb-8 backdrop-blur-md transition-all duration-500 ease-in-out xl:bottom-auto xl:left-0 xl:right-0 xl:top-0 xl:h-auto xl:px-10 xl:pt-0 xl:pb-0
        ${
			open
				? 'translate-y-0 opacity-100 pointer-events-auto'
				: 'max-xl:-translate-y-4 xl:-translate-y-full opacity-0 pointer-events-none'
		}`}
		>
			<div className="mx-auto flex h-full max-w-1440 flex-col max-xl:h-full xl:h-auto xl:flex-row xl:items-center">
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
					<div className="cursor-pointer p-2 xl:hidden" onClick={() => setIsOpen(false)}>
						<Image src={CloseLightIcon} width={16} height={16} alt="close icon" />
					</div>
				</div>
				<div className="mt-8 flex min-h-0 flex-1 flex-col xl:mt-0 xl:min-h-0 xl:flex-row xl:items-center">
					<ul className="flex flex-col gap-5 xl:flex-1 xl:flex-row xl:flex-wrap xl:items-center xl:justify-evenly xl:gap-x-8 xl:gap-y-3 xl:px-20">
						{links.map(({ name, url }) => (
							<li key={name}>
								<Link
									href={url}
									className="text-display-r text-accent transition duration-200 hover:text-white max-xl:text-[30px] max-xl:leading-[1.08] xl:whitespace-nowrap xl:text-[16px]"
									onClick={() => setIsOpen(false)}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
					<div className="mt-auto border-t border-[rgba(196,201,179,0.28)] pt-6 xl:hidden">
						<p className="mb-4 text-link-t uppercase text-accent/80">Quick Links</p>
						<div className="grid grid-cols-2 gap-x-5 gap-y-4">
							{quickLinks.map(({ icon, name, url }) => (
								<a
									key={name}
									href={url}
									target={url.startsWith('http') ? '_blank' : undefined}
									rel={url.startsWith('http') ? 'noreferrer' : undefined}
									className="flex min-w-0 items-center gap-3 text-display-r text-accent"
									onClick={() => setIsOpen(false)}
								>
									<Image src={icon} width={17} height={17} alt="" className="shrink-0" />
									<span className="min-w-0 truncate">{name}</span>
								</a>
							))}
						</div>
					</div>
					<div className="hidden cursor-pointer shrink-0 p-4 xl:block" onClick={() => setIsOpen(false)}>
						<Image src={CloseLightIcon} width={13} height={13} alt="close icon" />
					</div>
				</div>
			</div>
		</nav>
	);
}
