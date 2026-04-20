import Image from 'next/image';
import Link from 'next/link';

import MailDarkIcon from '@icons/mail-dark.svg';
import PhoneDarkIcon from '@icons/phone-dark.svg';
import Linkedin from '@icons/linkedin.svg';
import Logo2 from '@assets/imgs/logo2.svg';

const footerLinks = {
	company: [
		{ label: 'About Us', href: '/about-us' },
		{ label: 'Who We Are', href: '/who-we-are' },
		{ label: 'Who We Serve', href: '/who-we-serve' },
	],
	explore: [
		{ label: 'Contact Us', href: '/contact-us' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'FAQ', href: '/faq' },
	],
};

export default function Footer() {
	return (
		<footer className="mt-8">
			<div className="bg-accent px-6 py-6 sm:px-10 lg:px-16">
				<div className="mx-auto flex max-w-1440 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
					<span className="text-display-xxl text-primary">Get in touch</span>
					<div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:justify-end">
						<div className="flex flex-row items-center gap-4">
							<Image src={MailDarkIcon} width={25} height={20} alt="mail icon" />
							<a
								href="mailto:hello@fuchase.com"
								className="text-primary underline text-subtitle-r"
							>
								hello@fuchase.com
							</a>
						</div>
						<div className="flex flex-row items-center gap-4">
							<Image src={PhoneDarkIcon} width={23} height={23} alt="phone icon" />
							<a href="tel:+15550000000" className="text-primary underline text-subtitle-r">
								+1 (555) 000-0000
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-secondary px-6 pb-4 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-1440 gap-12 py-14 lg:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.15fr)] lg:items-start">
					<div className="flex flex-col items-start gap-7">
						<Image src={Logo2} width={196} height={123} alt="Fuchase logo mark" />
						<p className="max-w-[280px] text-display-r text-accent">
							Fuchase connects financial infrastructure, strategic capital, and market
							access through a single integrated ecosystem.
						</p>
						<a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
							<Image
								src={Linkedin}
								width={30}
								height={30}
								alt="linkedin icon"
								className="cursor-pointer"
							/>
						</a>
					</div>

					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
						<ul className="space-y-3">
							<li className="pb-1 text-display-xl text-accent">Company</li>
							{footerLinks.company.map(({ href, label }) => (
								<li key={label}>
									<Link href={href} className="text-display-r text-accent">
										{label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li className="pb-1 text-display-xl text-accent">Explore</li>
							{footerLinks.explore.map(({ href, label }) => (
								<li key={label}>
									<Link href={href} className="text-display-r text-accent">
										{label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li className="pb-1 text-display-xl text-accent">Connect</li>
							<li>
								<a href="mailto:hello@fuchase.com" className="text-display-r text-accent">
									hello@fuchase.com
								</a>
							</li>
							<li>
								<a href="tel:+15550000000" className="text-display-r text-accent">
									+1 (555) 000-0000
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com"
									target="_blank"
									rel="noreferrer"
									className="text-display-r text-accent"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr className="border border-dark-white" />

				<div className="mx-auto flex max-w-1440 flex-col gap-4 py-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
					<span className="block text-display-r text-accent">@2026 Fuchase</span>
					<p className="max-w-[760px] text-display-r text-accent">
						We connect elite financial institutions and visionary investors with
						transformative opportunities, exclusive partnerships, and next-generation
						financial infrastructure designed for those who operate at the highest level
						of global finance.
					</p>
				</div>
			</div>
		</footer>
	);
}
