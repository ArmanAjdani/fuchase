import Image from 'next/image';
import Link from 'next/link';

import Linkedin from '@icons/linkedin.svg';
import FooterLogo from '@assets/imgs/logo_footer/footer-logo-removebg-preview.png';

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
	legal: [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Cookie Policy', href: '/cookies' },
		{ label: 'Terms of Use', href: '/terms' },
	],
};

export default function Footer() {
	return (
		<footer className="mt-8">
			<div className="bg-secondary px-6 pb-4 sm:px-10 lg:px-16">
				<div className="mx-auto grid max-w-1440 gap-12 py-14 lg:grid-cols-[minmax(240px,0.78fr)_minmax(0,1.22fr)]">
					<div className="flex h-full flex-col items-center gap-7 self-stretch text-center">
						<Image
							src={FooterLogo}
							width={196}
							height={196}
							alt="Fuchase logo mark"
							className="h-auto w-[154px] object-contain sm:w-[180px]"
						/>
						<p className="max-w-[320px] text-center text-display-r text-accent">
							Fuchase connects financial infrastructure, strategic capital, and market
							access through a single integrated ecosystem.
						</p>
						<div className="mt-auto flex w-full max-w-[320px] justify-center">
							<a href="https://www.linkedin.com/company/fuchase/" target="_blank" rel="noreferrer">
								<Image
									src={Linkedin}
									width={30}
									height={30}
									alt="linkedin icon"
									className="cursor-pointer"
								/>
							</a>
						</div>
					</div>

					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						<ul className="space-y-3">
							<li className="pb-1 text-display-l text-accent">Company</li>
							{footerLinks.company.map(({ href, label }) => (
								<li key={label}>
									<Link href={href} className="text-display-r text-accent">
										{label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li className="pb-1 text-display-l text-accent">Explore</li>
							{footerLinks.explore.map(({ href, label }) => (
								<li key={label}>
									<Link href={href} className="text-display-r text-accent">
										{label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li className="pb-1 text-display-l text-accent">Legal</li>
							{footerLinks.legal.map(({ href, label }) => (
								<li key={label}>
									<Link href={href} className="text-display-r text-accent">
										{label}
									</Link>
								</li>
							))}
						</ul>
						<ul className="space-y-3">
							<li className="pb-1 text-display-l text-accent">Connect</li>
							<li>
								<a href="mailto:ceo@fuchase.com" className="text-display-r text-accent">
									ceo@fuchase.com
								</a>
							</li>
							<li>
								<a href="tel:+971506125001" className="text-display-r text-accent">
									+971 50 612 5001
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/fuchase/"
									target="_blank"
									rel="noreferrer"
									className="text-display-r text-accent"
								>
									Company LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/niki-saki-584743254"
									target="_blank"
									rel="noreferrer"
									className="text-display-r text-accent"
								>
									Founder LinkedIn
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
