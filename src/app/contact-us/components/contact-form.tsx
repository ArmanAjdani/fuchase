'use client';

import { useCallback, useState, type FormEvent } from 'react';

export type ContactForm = {
	name: string;
	email: string;
	company: string;
	message: string;
};

export default function ContactForm() {
	const [form, setForm] = useState<ContactForm>({
		name: '',
		email: '',
		company: '',
		message: '',
	});

	const submit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form', form);
	}, [form]);

	return (
		<form
			className="flex max-w-[680px] flex-1 flex-col gap-5 rounded-[10px] border border-[rgba(44,49,25,0.22)] bg-white/94 px-8 py-8 shadow-[0px_24px_54px_rgba(0,0,0,0.12)] max-md:w-full max-md:gap-4 max-md:px-5 max-md:py-6"
			onSubmit={submit}
		>
			<input type="text" name="honeypot" style={{ display: 'none' }} autoComplete="off" />
			<div className="border-b border-[rgba(44,49,25,0.16)] pb-4">
				<h2 className="text-heading-5 text-heading max-md:text-[30px]">Send a Message</h2>
				<p className="mt-2 text-display-r text-content/80 max-md:text-[16px]">
					Share your objective and our team will respond with the most relevant contact.
				</p>
			</div>
			<label className="w-full">
				<span className="mb-2 block text-display-r text-content">Full Name</span>
				<input
					id="name"
					name="name"
					placeholder="Enter your full name"
					value={form.name}
					className="h-12 w-full rounded-[8px] border border-[rgba(44,49,25,0.24)] bg-white px-4 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary"
					onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
				/>
			</label>
			<div className="grid gap-5 sm:grid-cols-2">
				<label className="w-full">
					<span className="mb-2 block text-display-r text-content">Email</span>
					<input
						id="email"
						name="email"
						placeholder="Enter your email"
						value={form.email}
						className="h-12 w-full rounded-[8px] border border-[rgba(44,49,25,0.24)] bg-white px-4 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary"
						onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
					/>
				</label>
				<label className="w-full">
					<span className="mb-2 block text-display-r text-content">Company</span>
					<input
						id="company"
						name="company"
						placeholder="Company or institution"
						value={form.company}
						className="h-12 w-full rounded-[8px] border border-[rgba(44,49,25,0.24)] bg-white px-4 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary"
						onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
					/>
				</label>
			</div>
			<label className="w-full">
				<span className="mb-2 block text-display-r text-content">Message</span>
				<textarea
					id="message"
					name="message"
					placeholder="Briefly describe your objective and preferred timeline."
					rows={6}
					value={form.message}
					className="min-h-[170px] w-full resize-y rounded-[8px] border border-[rgba(44,49,25,0.24)] bg-white px-4 py-3 text-display-r text-content placeholder:text-content/50 outline-none transition duration-200 focus:border-primary"
					onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
				/>
			</label>
			<button
				type="submit"
				className="mt-1 w-full cursor-pointer border border-[rgba(85,92,59,0.42)] bg-linear-to-b from-white to-accent/65 px-6 py-3 text-button-m text-primary transition duration-200 hover:opacity-90"
			>
				Submit
			</button>
		</form>
	);
}
