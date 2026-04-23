import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import ChevronIcon from '@icons/chevron.svg';
import InstagramIcon from '@icons/instagram.svg';
import XIcon from '@icons/x.svg';
import LinkedinIcon from '@icons/linkedin.svg';

import Heading from '@core/components/heading';
import JsonLd from '@core/components/json-ld';
import RevealOnView from '@core/components/reveal-on-view';
import { solutionPosts } from '@core/data/solutions';

type BlogDetailPageProps = {
	params: Promise<{ id: string }>;
};

const getPost = (id: string) => solutionPosts.find((post) => post.id === id);
const toSectionId = (heading: string, index: number) =>
	`section-${index + 1}-${heading
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')}`;

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
	const { id } = await params;
	const post = getPost(id);

	if (!post) {
		return {
			title: 'Post Not Found',
			description: 'The requested post does not exist.',
		};
	}

	return {
		title: post.title,
		description: post.summary,
		keywords: post.tags,
		authors: [{ name: 'FuChase Editorial Team', url: 'https://yourdomain.com' }],
		creator: 'FuChase',
		publisher: 'FuChase',
		category: 'finance',
	};
}

export default async function BlogDetail({ params }: BlogDetailPageProps) {
	const { id } = await params;
	const post = getPost(id);

	if (!post) {
		notFound();
	}

	const postUrl = `https://yourdomain.com/blog/${post.id}`;
	const encodedPostUrl = encodeURIComponent(postUrl);
	const encodedTitle = encodeURIComponent(post.title);
	const sectionLinks = post.sections.map(({ heading }, index) => ({
		heading,
		id: toSectionId(heading, index),
	}));

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.summary,
		image: `https://yourdomain.com${post.banner.src}`,
		author: {
			'@type': 'Organization',
			name: 'FuChase Editorial Team',
		},
		publisher: {
			'@type': 'Organization',
			name: 'FuChase',
			logo: {
				'@type': 'ImageObject',
				url: 'https://yourdomain.com/logo.png',
			},
		},
		mainEntityOfPage: postUrl,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		keywords: post.tags.join(', '),
	};

	return (
		<>
			<RevealOnView from="up">
				<Heading title={post.title} />
			</RevealOnView>
			<RevealOnView from="up">
				<div className="relative mb-10 h-[30vh] min-h-[220px] w-full overflow-hidden sm:mb-16 sm:h-[36vh] lg:mb-24 lg:h-[44vh]">
					<Image
						src={post.banner}
						alt={`${post.name} article banner`}
						fill
						sizes="100vw"
						className="object-cover object-center"
					/>
				</div>
			</RevealOnView>
			<div className="mx-auto flex max-w-1440 flex-row flex-wrap justify-between gap-8 px-4 pb-12 sm:gap-10 sm:px-10 lg:gap-12 lg:px-20 lg:pb-14">
				<RevealOnView
					from="left"
					className="order-2 flex-1 max-md:w-full md:order-1"
				>
					<div className="mb-8 text-sm text-content opacity-75">
						<span>{post.location}</span>
						<span className="mx-3">|</span>
						<span>{post.publishedAt}</span>
					</div>
					<p className="text-heading text-display-r">{post.intro}</p>
					{post.sections.map(({ content, heading }, index) => (
						<section key={heading} id={sectionLinks[index].id} className="mt-12 scroll-mt-28">
							<h2 className="text-heading text-heading-4 max-md:text-[30px]">{heading}</h2>
							<p className="text-heading text-display-r mt-5">{content}</p>
						</section>
					))}
				</RevealOnView>
				<RevealOnView
					from="right"
					className="order-1 w-full shrink-0 pl-0 pr-0 md:order-2 md:w-[400px] md:pl-12 md:pr-3"
				>
					<h3 className="mb-10 text-base text-heading-5">In this article</h3>
					<div className="mb-10">
						{sectionLinks.map(({ heading, id }) => (
							<div key={heading} className="flex flex-row flex-wrap items-center mb-5">
								<Image
									src={ChevronIcon}
									width={7}
									height={12}
									alt="chevron icon"
									className="shrink-0"
								/>
								<a
									href={`#${id}`}
									className="ml-5 flex-1 text-base text-heading-6 transition-opacity duration-200 hover:opacity-70"
								>
									{heading}
								</a>
							</div>
						))}
					</div>
					<div className="flex flex-row flex-wrap justify-center items-center gap-5 mb-10">
						{post.tags.map((tag) => (
							<div key={`${post.id}-${tag}`} className="px-2.5 py-1 border border-light-white rounded-sm">
								{tag}
							</div>
						))}
					</div>
					<div className="flex flex-row flex-wrap justify-center items-center gap-8">
						<span className="text-base text-heading-6">Share</span>
						<a
							href={`https://www.instagram.com/?url=${encodedPostUrl}`}
							target="_blank"
							rel="noreferrer"
						>
							<Image src={InstagramIcon} width={18} height={18} alt="instagram icon" />
						</a>
						<a
							href={`https://x.com/intent/tweet?url=${encodedPostUrl}&text=${encodedTitle}`}
							target="_blank"
							rel="noreferrer"
						>
							<Image src={XIcon} width={18} height={18} alt="x icon" />
						</a>
						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedPostUrl}`}
							target="_blank"
							rel="noreferrer"
						>
							<Image src={LinkedinIcon} width={18} height={18} alt="linkedin icon" />
						</a>
					</div>
				</RevealOnView>
			</div>
			<JsonLd data={schema} />
		</>
	);
}
