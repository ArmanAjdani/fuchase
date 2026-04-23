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
			<div className="mx-auto bg-contact-us px-10 py-12">
				<div className="flex flex-row flex-wrap justify-center items-center gap-20">
					<RevealOnView from="left">
						<ContactForm />
					</RevealOnView>
					<RevealOnView
						from="right"
						className="bg-white px-12 py-24 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-[10px] flex flex-col flex-wrap items-center justify-around gap-12 max-w-[630px] flex-1"
					>
						<h2 className="text-heading-3 text-base">Talk to Us</h2>
						<div className="flex flex-row flex-wrap justify-start items-center w-full">
							<Image src={PhoneIcon} alt="phone icon" width={18} height={18} />
							<span className="block text-base text-display-xl pl-8">
								Phone Number:
							</span>
							<span className="text-base text-display-l ml-auto">+971506125001</span>
						</div>
						<div className="flex flex-row flex-wrap justify-start items-center w-full">
							<Image src={MailIcon} alt="mail icon" width={20} height={18} />
							<span className="block text-base text-display-xl pl-8">Email:</span>
							<span className="text-base text-display-l ml-auto">
								info@fuchase.com
							</span>
						</div>
						<div className="flex flex-row flex-wrap justify-start items-center w-full">
							<Image src={LocationIcon} alt="location icon" width={16} height={20} />
							<span className="block text-base text-display-xl pl-8">Address:</span>
							<span className="text-base text-display-l ml-auto">
								Palm Jumeirah, P.O. Box 213208
							</span>
						</div>
						<div className="flex flex-row flex-wrap justify-center items-center gap-7">
							<a href="http://">
								<Image
									src={LinkedinIcon}
									width={30}
									height={30}
									alt="linkedin icon"
								/>
							</a>
							<a href="http://">
								<Image
									src={InstagramIcon}
									width={30}
									height={30}
									alt="instagram icon"
								/>
							</a>
							<a href="http://">
								<Image src={XIcon} width={30} height={27} alt="x icon" />
							</a>
						</div>
					</RevealOnView>
				</div>
			</div>
			<JsonLd data={schema} />
		</>
	);
}
