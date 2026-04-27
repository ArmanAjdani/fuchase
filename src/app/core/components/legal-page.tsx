import Image from 'next/image';

import Ornament from '@assets/imgs/ornament.png';

import Heading from './heading';

export type LegalSection = {
	title: string;
	paragraphs: string[];
	bullets?: string[];
};

export type LegalPageProps = {
	title: string;
	subtitle: string;
	updatedOn: string;
	sections: LegalSection[];
};

export default function LegalPage({
	title,
	subtitle,
	updatedOn,
	sections,
}: LegalPageProps) {
	return (
		<>
			<Heading name="Legal" title={title} subtitle={subtitle} />
			<section className="mx-auto mb-24 max-w-1440 px-6 sm:px-10 xl:px-16">
				<div className="relative mx-auto max-w-5xl py-8 sm:py-10">
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament"
						className="absolute top-0 left-0 hidden xl:block"
					/>
					<Image
						src={Ornament}
						width={50}
						height={50}
						alt="ornament"
						className="absolute top-0 right-0 hidden rotate-90 xl:block"
					/>
					<div className="space-y-10 px-2 pt-8 sm:px-8 xl:px-14">
						<p className="text-link-t uppercase tracking-[0.22em] text-primary">
							Last updated {updatedOn}
						</p>
						{sections.map(({ bullets, paragraphs, title: sectionTitle }) => (
							<section key={sectionTitle} className="space-y-4">
								<h2 className="text-heading-5 text-heading">{sectionTitle}</h2>
								{paragraphs.map((paragraph) => (
									<p key={paragraph} className="text-display-r text-content">
										{paragraph}
									</p>
								))}
								{bullets && (
									<ul className="space-y-3 pt-1">
										{bullets.map((bullet) => (
											<li
												key={bullet}
												className="flex items-start gap-3 text-display-r text-content"
											>
												<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								)}
							</section>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
