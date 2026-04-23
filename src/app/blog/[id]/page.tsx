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
				<Image
					src={post.banner}
					alt={`${post.name} article banner`}
					className="w-full mb-24"
					width={1600}
					height={900}
				/>
			</RevealOnView>
			<div className="max-w-1440 mx-auto flex flex-row flex-wrap justify-between gap-12 px-20 pb-14">
				<RevealOnView from="left" className="flex-1">
					<div className="mb-8 text-sm text-content opacity-75">
						<span>{post.location}</span>
						<span className="mx-3">|</span>
						<span>{post.publishedAt}</span>
					</div>
					<p className="text-heading text-display-r">{post.intro}</p>
					{post.sections.map(({ content, heading }) => (
						<section key={heading} className="mt-12">
							<h2 className="text-heading text-heading-4">{heading}</h2>
							<p className="text-heading text-display-r mt-5">{content}</p>
						</section>
					))}
				</RevealOnView>
				<RevealOnView from="right" className="w-[400px] pl-12 pr-3 shrink-0">
					<h3 className="mb-10 text-base text-heading-5">In this article</h3>
					<div className="mb-10">
						{post.sections.map(({ heading }) => (
							<div key={heading} className="flex flex-row flex-wrap items-center mb-5">
								<Image
									src={ChevronIcon}
									width={7}
									height={12}
									alt="chevron icon"
									className="shrink-0"
								/>
								<span className="ml-5 text-heading-6 text-base flex-1">{heading}</span>
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
