import { Metadata } from 'next';
import Image from 'next/image';

import PhoneIcon from '@icons/phone.svg';
import MailIcon from '@icons/mail.svg';
import LocationIcon from '@icons/location.svg';
import InstagramIcon from '@icons/instagram.svg';
import XIcon from '@icons/x.svg';
import LinkedinIcon from '@icons/linkedin.svg';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';
import RevealOnView from '@core/components/reveal-on-view';

import ContactForm from './components/contact-form';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Connect with FuChase to discuss institutional partnerships, capital strategy, and ecosystem collaboration.',
	keywords: ['contact fuchase', 'financial ecosystem inquiry', 'institutional partnerships'],
};

export default function ContactUs() {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		mainEntity: {
			'@type': 'Organization',
			name: 'Your Company',
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+123456789',
				contactType: 'customer service',
				email: 'support@example.com',
			},
		},
	};

	return (
		<>
			<RevealOnView from="up">
				<Heading
					title="Contact Us"
					subtitle="Reach the FuChase team for strategic collaborations, solution onboarding, and institutional support across our financial ecosystem. Share your objective and operating region, and we will connect you with the right platform lead."
				/>
			</RevealOnView>
			<div className="relative mx-auto overflow-hidden px-10 py-12 max-md:px-4 max-md:py-8">
				<div className="absolute inset-0 bg-contact-us bg-cover bg-center opacity-90" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(231,232,232,0.62)_0%,rgba(231,232,232,0.36)_35%,rgba(231,232,232,0.62)_100%)]" />
				<div className="relative flex flex-row flex-wrap items-center justify-center gap-20 max-md:flex-col max-md:gap-6">
					<RevealOnView from="left">
						<ContactForm />
					</RevealOnView>
					<RevealOnView
						from="right"
						className="flex max-w-[630px] flex-1 flex-col gap-6 rounded-[14px] border border-[rgba(44,49,25,0.16)] bg-white/95 px-8 py-8 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] max-md:w-full max-md:gap-5 max-md:px-5 max-md:py-6"
					>
						<h2 className="text-center text-heading-4 text-heading max-md:text-[36px]">Talk to Us</h2>
						<p className="text-center text-display-r text-content/80 max-md:text-[17px]">
							Choose the channel that fits your mandate, and we will route you to the
							right team.
						</p>
						<div className="space-y-3">
							<div className="flex items-start gap-4 rounded-md border border-color-light-white bg-white px-4 py-3">
								<div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-color-light-white">
									<Image src={PhoneIcon} alt="phone icon" width={16} height={16} />
								</div>
								<div className="space-y-1">
									<p className="text-base text-display-xl max-md:text-[17px]">Phone Number</p>
									<p className="text-base text-display-l max-md:text-[17px]">+971506125001</p>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-md border border-color-light-white bg-white px-4 py-3">
								<div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-color-light-white">
									<Image src={MailIcon} alt="mail icon" width={17} height={15} />
								</div>
								<div className="space-y-1">
									<p className="text-base text-display-xl max-md:text-[17px]">Email</p>
									<p className="break-all text-base text-display-l max-md:text-[17px]">
										info@fuchase.com
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-md border border-color-light-white bg-white px-4 py-3">
								<div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-color-light-white">
									<Image src={LocationIcon} alt="location icon" width={14} height={18} />
								</div>
								<div className="space-y-1">
									<p className="text-base text-display-xl max-md:text-[17px]">Address</p>
									<p className="text-base text-display-l max-md:text-[17px]">
										Palm Jumeirah, P.O. Box 213208
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-1">
							<a
								href="http://"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-light-white transition duration-200 hover:opacity-80"
							>
								<Image
									src={LinkedinIcon}
									width={22}
									height={22}
									alt="linkedin icon"
								/>
							</a>
							<a
								href="http://"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-light-white transition duration-200 hover:opacity-80"
							>
								<Image
									src={InstagramIcon}
									width={22}
									height={22}
									alt="instagram icon"
								/>
							</a>
							<a
								href="http://"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-color-light-white transition duration-200 hover:opacity-80"
							>
								<Image src={XIcon} width={22} height={20} alt="x icon" />
							</a>
						</div>
					</RevealOnView>
				</div>
			</div>
			<JsonLd data={schema} />
		</>
	);
}
