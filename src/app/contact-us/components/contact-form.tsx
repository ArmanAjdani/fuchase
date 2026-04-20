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
		<div className="bg-white px-12 py-6 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] rounded-[10px] flex flex-col flex-wrap items-center justify-around gap-8 max-w-[630px] flex-1">
			<input type="text" name="honeypot" style={{ display: 'none' }} />
			<label className="w-full relative">
				<span className="block text-display-xl text-base mb-2.5">Name</span>
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
				<span className="block text-display-xl text-base mb-2.5">Email</span>
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
				<span className="block text-display-xl text-base mb-2.5">Message</span>
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
				className="text-button-m text-primary py-2.5 px-6 bg-linear-to-b from-white/0 to-accent mx-auto cursor-pointer w-48 mb-[10px]"
				onClick={submit}
			>
				Submit
			</button>
		</div>
	);
}
