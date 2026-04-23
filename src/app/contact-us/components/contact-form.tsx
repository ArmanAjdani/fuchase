'use client';

import { useCallback, useState, type FormEvent } from 'react';
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

	const submit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form', form);
	}, [form]);

	return (
		<form
			className="flex max-w-[630px] flex-1 flex-col gap-6 rounded-[14px] border border-[rgba(44,49,25,0.16)] bg-white/95 px-8 py-8 shadow-[0px_32px_64px_rgba(0,0,0,0.14)] max-md:w-full max-md:gap-5 max-md:px-5 max-md:py-6"
			onSubmit={submit}
		>
			<input type="text" name="honeypot" style={{ display: 'none' }} autoComplete="off" />
			<label className="w-full relative">
				<span className="mb-2 block text-base text-display-xl max-md:text-[16px]">
					Name
				</span>
				<input
					id="name"
					name="name"
					placeholder="Name"
					value={form.name}
					className="h-12 w-full rounded-md border border-color-light-white bg-white px-12 pr-4 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(85,92,59,0.16)]"
					onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
				/>
				<Image
					src={ProfileIcon}
					width={16}
					height={20}
					alt="profile icon"
					className="pointer-events-none absolute top-[50px] left-4"
				/>
			</label>
			<label className="w-full relative">
				<span className="mb-2 block text-base text-display-xl max-md:text-[16px]">
					Email
				</span>
				<input
					id="email"
					name="email"
					placeholder="Email"
					value={form.email}
					className="h-12 w-full rounded-md border border-color-light-white bg-white px-12 pr-4 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(85,92,59,0.16)]"
					onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
				/>
				<Image
					src={AtSignIcon}
					width={20}
					height={20}
					alt="atsign icon"
					className="pointer-events-none absolute top-[50px] left-4"
				/>
			</label>
			<label className="w-full">
				<span className="mb-2 block text-base text-display-xl max-md:text-[16px]">
					Message
				</span>
				<textarea
					id="message"
					name="message"
					placeholder="Tell us about your objective"
					rows={6}
					value={form.message}
					className="min-h-[180px] w-full resize-y rounded-md border border-color-light-white bg-white px-4 py-3 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary focus:shadow-[0_0_0_2px_rgba(85,92,59,0.16)]"
					onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
				/>
			</label>
			<button
				type="submit"
				className="mx-auto mt-1 w-48 cursor-pointer border border-[rgba(85,92,59,0.36)] bg-linear-to-b from-white to-accent/80 px-6 py-2.5 text-button-m text-primary transition duration-200 hover:opacity-90 max-md:w-full"
			>
				Submit
			</button>
		</form>
	);
}
