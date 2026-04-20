'use client';

import { useCallback, useState } from 'react';

import Image from 'next/image';

import HambergerDarkIcon from '@icons/hamberger-dark.svg';
import CloseDarkIcon from '@icons/close-dark.svg';

export default function Qa() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, [setIsOpen]);

	return (
		<div className="mb-14" onClick={handleOpen}>
			<div className="flex flex-row flex-wrap justify-start cursor-pointer">
				{isOpen ? (
					<Image src={CloseDarkIcon} width={22} height={22} alt="close icon" />
				) : (
					<Image src={HambergerDarkIcon} width={30} height={23} alt="hamberger icon" />
				)}
				<p className="text-display-xl text-base ml-5">
					What email systems (ESPs) does Postcards work with?
				</p>
			</div>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out mx-24 ${isOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'}`}
			>
				<p className="text-display-r text-base">
					We have tested Postcards with the following mail clients: Gmail, AOL, Apple
					Mail, Android Mail, Outlook.com, Yahoo mail, Thunderbird, Microsoft Outlook,
					Outlook Express, Windows Mail, Lotus Notes. We also tested them with major
					mailing systems including: Mailchimp, Shopify, Constant Contact, Mailgun,
					HubSpot, Benchmark, Marketo, Campaign Monitor, Wordpress, MoonMail, Sendwithus,
					Salesforce.
				</p>
			</div>
		</div>
	);
}
