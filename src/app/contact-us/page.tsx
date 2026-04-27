import { Metadata } from 'next';
import Image from 'next/image';

import PhoneIcon from '@icons/phone.svg';
import MailIcon from '@icons/mail.svg';
import LocationIcon from '@icons/location.svg';
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
			name: 'FuChase',
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+971506125001',
				contactType: 'institutional support',
				email: 'ceo@fuchase.com',
			},
		},
	};

	return (
		<>
			<RevealOnView from="up">
				<Heading
					title="Contact Us"
					subtitle="Reach our team for strategic collaborations, onboarding inquiries, and institutional support. Share your objective and we will route your request to the relevant team."
				/>
			</RevealOnView>
			<div className="relative mx-auto overflow-hidden px-6 py-10 sm:px-10 xl:py-14">
				<div className="absolute inset-0 bg-contact-us bg-cover bg-center opacity-78" />
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(231,232,232,0.82)_0%,rgba(231,232,232,0.74)_40%,rgba(231,232,232,0.82)_100%)]" />
				<div className="relative mx-auto grid max-w-6xl gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-10">
					<RevealOnView
						from="left"
						className="flex flex-col rounded-[10px] border border-[rgba(44,49,25,0.22)] bg-white/94 px-6 py-7 shadow-[0px_24px_54px_rgba(0,0,0,0.12)] sm:px-8"
					>
						<h2 className="text-heading-4 text-heading max-md:text-[34px]">Contact Details</h2>
						<p className="mt-3 text-display-r leading-[1.7] text-content/80">
							For business and institutional inquiries, use the details below or submit the
							form. We typically respond within one business day.
						</p>
						<div className="mt-8 space-y-4">
							<div className="flex items-start gap-4 rounded-[8px] border border-[rgba(44,49,25,0.18)] bg-white px-4 py-3">
								<Image src={PhoneIcon} alt="phone icon" width={18} height={18} className="mt-1 shrink-0" />
								<div>
									<p className="text-display-r text-content/75">Phone Number</p>
									<p className="text-display-l text-heading">+971 50 612 5001</p>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-[8px] border border-[rgba(44,49,25,0.18)] bg-white px-4 py-3">
								<Image src={MailIcon} alt="mail icon" width={20} height={18} className="mt-1 shrink-0" />
								<div>
									<p className="text-display-r text-content/75">Email</p>
									<p className="text-display-l text-heading break-all">ceo@fuchase.com</p>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-[8px] border border-[rgba(44,49,25,0.18)] bg-white px-4 py-3">
								<Image src={LocationIcon} alt="location icon" width={16} height={20} className="mt-1 shrink-0" />
								<div>
									<p className="text-display-r text-content/75">Address</p>
									<p className="text-display-l text-heading">
										Dubai International Financial Centre
										<br />
										Sheikh Zayed Road, Dubai, United Arab Emirates
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-[8px] border border-[rgba(44,49,25,0.18)] bg-white px-4 py-3">
								<Image src={LinkedinIcon} alt="linkedin icon" width={18} height={18} className="mt-1 shrink-0 brightness-0" />
								<div>
									<p className="text-display-r text-content/75">Company LinkedIn</p>
									<a
										href="https://www.linkedin.com/company/fuchase/"
										target="_blank"
										rel="noreferrer"
										className="text-display-l text-heading underline"
									>
										FuChase
									</a>
								</div>
							</div>
							<div className="flex items-start gap-4 rounded-[8px] border border-[rgba(44,49,25,0.18)] bg-white px-4 py-3">
								<Image src={LinkedinIcon} alt="linkedin icon" width={18} height={18} className="mt-1 shrink-0 brightness-0" />
								<div>
									<p className="text-display-r text-content/75">Founder LinkedIn</p>
									<a
										href="https://www.linkedin.com/in/niki-saki-584743254"
										target="_blank"
										rel="noreferrer"
										className="text-display-l text-heading underline"
									>
										Niki Saki
									</a>
								</div>
							</div>
						</div>
					</RevealOnView>
					<RevealOnView from="right">
						<ContactForm />
					</RevealOnView>
				</div>
			</div>
			<JsonLd data={schema} />
		</>
	);
}
