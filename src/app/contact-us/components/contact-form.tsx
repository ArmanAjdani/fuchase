'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

import ProfileIcon from '@icons/profile.svg';
import AtSignIcon from '@icons/atsign.svg';

export type ContactForm = {
	name: string;
	email: string;
	message: string;
};

export default function ContactForm() {
	const [form, setForm] = useState<ContactForm>({
		name: '',
		email: '',
		message: '',
	});

	const submit = useCallback(() => {
		console.log('form', form);
	}, [form]);

	return (
		<div className="flex max-w-[630px] flex-1 flex-col flex-wrap items-center justify-around gap-8 rounded-[10px] bg-white px-12 py-6 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] max-md:w-full max-md:gap-6 max-md:px-5 max-md:py-5">
			<input type="text" name="honeypot" style={{ display: 'none' }} />
			<label className="w-full relative">
				<span className="mb-2.5 block text-base text-display-xl max-md:text-[16px]">
					Name
				</span>
				<input
					id="name"
					name="name"
					placeholder="Name"
					value={form.name}
					className="w-full h-9 py-2 pr-3 pl-12 border border-color-light-white rounded-md"
					onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
				/>
				<Image
					src={ProfileIcon}
					width={16}
					height={20}
					alt="profile icon"
					className="absolute top-[54px] left-4"
				/>
			</label>
			<label className="w-full relative">
				<span className="mb-2.5 block text-base text-display-xl max-md:text-[16px]">
					Email
				</span>
				<input
					id="email"
					name="email"
					placeholder="Email"
					value={form.email}
					className="w-full h-9 py-2 pr-3 pl-12 border border-color-light-white rounded-md"
					onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
				/>
				<Image
					src={AtSignIcon}
					width={20}
					height={20}
					alt="atsign icon"
					className="absolute top-[54px] left-4"
				/>
			</label>
			<label className="w-full">
				<span className="mb-2.5 block text-base text-display-xl max-md:text-[16px]">
					Message
				</span>
				<textarea
					id="message"
					name="message"
					placeholder="Message"
					rows={6}
					value={form.message}
					className="w-full py-2 px-3 border border-color-light-white rounded-md"
					onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
				/>
			</label>
			<button
				className="mx-auto mb-[10px] w-48 cursor-pointer bg-linear-to-b from-white/0 to-accent px-6 py-2.5 text-button-m text-primary max-md:w-full"
				onClick={submit}
			>
				Submit
			</button>
		</div>
	);
}
