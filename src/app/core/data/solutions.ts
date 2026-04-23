import { StaticImageData } from 'next/image';

import VentureChaseLogo from '@assets/imgs/6003346381608783173.jpg';
import ChasePrimeLogo from '@assets/imgs/6003346381608783174.jpg';
import FlowChaseLogo from '@assets/imgs/6003346381608783175.jpg';
import MarketChaseLogo from '@assets/imgs/6003346381608783176.jpg';
import CCXLogo from '@assets/imgs/6003346381608783177.jpg';
import CIOLogo from '@assets/imgs/6003346381608783178.jpg';

import VentureChaseBanner from '@assets/imgs/blog-venture-chase-banner.svg';
import ChasePrimeBanner from '@assets/imgs/blog-chase-prime-banner.svg';
import FlowChaseBanner from '@assets/imgs/blog-flow-chase-banner.svg';
import CCXBanner from '@assets/imgs/blog-ccx-banner.svg';
import MarketChaseBanner from '@assets/imgs/blog-market-chase-banner.svg';
import CIOBanner from '@assets/imgs/blog-cio-banner.svg';

export type SolutionArticleSection = {
	heading: string;
	content: string;
};

export type SolutionPost = {
	id: string;
	name: string;
	title: string;
	summary: string;
	description: string;
	location: string;
	logo: StaticImageData;
	logoSurfaceClassName: string;
	logoClassName?: string;
	banner: StaticImageData;
	publishedAt: string;
	tags: string[];
	intro: string;
	sections: SolutionArticleSection[];
};

export const solutionPosts: SolutionPost[] = [
	{
		id: 'venture-chase',
		name: 'Venture Chase',
		title: 'Venture Chase: A Structured Bridge Between Capital and Opportunity',
		summary:
			'How Venture Chase aligns investors with vetted projects through a curated and professionally managed deal environment.',
		description:
			'Venture Chase connects investors with startups, entrepreneurs, and established ventures through curated, high-potential opportunities in a controlled environment.',
		location: 'USA',
		logo: VentureChaseLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: VentureChaseBanner,
		publishedAt: '2026-04-04',
		tags: ['Venture Capital', 'Startup Pipeline', 'Investor Network', 'USA'],
		intro:
			'Venture Chase is built to reduce the friction that usually exists between capital providers and project owners. Instead of fragmented outreach and inconsistent opportunity quality, the platform offers a structured lane where investment conversations start with stronger alignment and clearer expectations.',
		sections: [
			{
				heading: 'Curated Opportunity Access',
				content:
					'Project flow is designed around quality control. Startups and ventures are presented in a format investors can evaluate quickly, with enough structure to compare potential allocation decisions across sectors and stages.',
			},
			{
				heading: 'A Professional Matching Environment',
				content:
					'The platform positions itself as an operational bridge, not a public listing board. By focusing on disciplined intake and organized presentation, Venture Chase improves confidence for investors while giving founders access to relevant capital partners.',
			},
			{
				heading: 'Scalable Capital Formation',
				content:
					'As networks expand, consistency in process becomes critical. Venture Chase supports repeatable deal flow management so that both early-stage entrepreneurs and mature ventures can be positioned for efficient fundraising cycles.',
			},
		],
	},
	{
		id: 'chase-prime',
		name: 'Chase Prime',
		title: 'Chase Prime: Institutional Education for Financial System Builders',
		summary:
			'Why practical, system-level training is essential for professionals launching and operating financial institutions.',
		description:
			'Chase Prime is a specialized academy delivering institutional-level education on financial systems, risk frameworks, and the operational design of financial organizations.',
		location: 'UAE',
		logo: ChasePrimeLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: ChasePrimeBanner,
		publishedAt: '2026-04-07',
		tags: ['Financial Education', 'Institutional Design', 'Risk Management', 'UAE'],
		intro:
			'Chase Prime addresses a major gap in financial education: most programs teach markets, but very few explain how financial institutions are actually designed and operated. The academy is focused on real operating architecture and practical execution.',
		sections: [
			{
				heading: 'From Theory to Operational Structure',
				content:
					'Participants learn how to build complete operational blueprints, including governance, process flows, and internal controls. This makes the curriculum useful for founders, operators, and strategic teams that need implementation-ready knowledge.',
			},
			{
				heading: 'Back Office and Risk as Core Infrastructure',
				content:
					'Chase Prime treats back-office operations and risk frameworks as strategic assets rather than support functions. The result is stronger institutional resilience and clearer accountability across execution, reporting, and supervision layers.',
			},
			{
				heading: 'Launching Financial Systems with Confidence',
				content:
					'By combining market structure education with organizational design, the academy helps teams move from concept to deployable financial infrastructure with fewer blind spots and better decision discipline.',
			},
		],
	},
	{
		id: 'flow-chase',
		name: 'Flow Chase',
		title: 'Flow Chase: Efficient Asset Mobility for HNWIs and UHNWIs',
		summary:
			'How Flow Chase streamlines compliant asset transition into GCC markets for sophisticated private capital.',
		description:
			'Flow Chase enables seamless movement of assets into GCC countries through structured, compliant channels for HNWIs and UHNWIs.',
		location: 'UAE',
		logo: FlowChaseLogo,
		logoSurfaceClassName: 'bg-[#a1b2a1]',
		banner: FlowChaseBanner,
		publishedAt: '2026-04-10',
		tags: ['HNWIs', 'Cross-Border Capital', 'GCC', 'UAE'],
		intro:
			'Cross-border wealth movement often breaks down at the operational level, even when demand is clear. Flow Chase is designed to make the transition of capital into GCC ecosystems cleaner, faster, and more transparent for high-net-worth investors.',
		sections: [
			{
				heading: 'Structured Entry Across Asset Classes',
				content:
					'The platform supports multiple asset classes while maintaining consistent transfer logic. This allows families, principals, and institutional private offices to allocate strategically without fragmented onboarding experiences.',
			},
			{
				heading: 'Compliance and Process Control',
				content:
					'Flow Chase prioritizes compliant capital flow and process traceability. That balance is critical for preserving speed while staying aligned with regional frameworks and institutional standards.',
			},
			{
				heading: 'Financial Integration Within GCC Markets',
				content:
					'Beyond transfer, the model supports integration. Capital is not only moved, it is positioned for deployment inside the regional financial ecosystem with clearer pathways for allocation and ongoing management.',
			},
		],
	},
	{
		id: 'ccx',
		name: 'Chase Clearing Exchange (CCX)',
		title: 'CCX: Clearing, Netting, and Liquidity Infrastructure for Institutions',
		summary:
			'How CCX reduces counterparty risk and improves transaction efficiency for brokers, funds, and asset managers.',
		description:
			'CCX operates as a clearing house, aggregator, and liquidity provider that enables institutional participants to clear and manage trades in a controlled environment.',
		location: 'Cyprus (CySEC) - Cayman Islands (CIMA) - Abu Dhabi (ADGM)',
		logo: CCXLogo,
		logoSurfaceClassName: 'bg-[#dddddd]',
		banner: CCXBanner,
		publishedAt: '2026-04-13',
		tags: ['Clearing Infrastructure', 'Liquidity', 'Counterparty Risk', 'Prime Services'],
		intro:
			'Chase Clearing Exchange (CCX) is designed for market participants that need institutional-grade post-trade infrastructure. It combines clearing, aggregation, and liquidity access to support efficient settlement and stronger risk control across counterparties.',
		sections: [
			{
				heading: 'Trade Flow Aggregation at Scale',
				content:
					'CCX consolidates trading activity across participants to improve operational efficiency and execution quality. Aggregated flows create better routing and pricing outcomes, especially for firms managing multi-venue activity.',
			},
			{
				heading: 'Netting and Risk Optimization',
				content:
					'By enabling netting and structured post-trade management, CCX reduces operational burden and lowers exposed counterparty surfaces. This improves capital efficiency and supports more stable institutional interaction.',
			},
			{
				heading: 'Multi-Jurisdiction Institutional Utility',
				content:
					'With a footprint across key regulatory jurisdictions, CCX is positioned to support diverse institutional profiles while preserving control, transparency, and compatibility with professional market standards.',
			},
		],
	},
	{
		id: 'market-chase',
		name: 'Market Chase',
		title: 'Market Chase: A Unified Marketplace for Financial Industry Collaboration',
		summary:
			'How Market Chase connects institutions, service providers, and intelligence to solve operational needs in one ecosystem.',
		description:
			'Market Chase is a curated marketplace connecting financial institutions and service providers so they can discover solutions, form partnerships, and access industry intelligence.',
		location: 'USA',
		logo: MarketChaseLogo,
		logoSurfaceClassName: 'bg-[#e2e2e2]',
		banner: MarketChaseBanner,
		publishedAt: '2026-04-16',
		tags: ['Financial Marketplace', 'Partnerships', 'Media Intelligence', 'USA'],
		intro:
			'Market Chase addresses fragmentation inside the financial services supply chain. Instead of isolated vendor discovery and disconnected relationships, it provides a centralized environment where institutions can identify the right counterparties for infrastructure, technology, compliance, and operations.',
		sections: [
			{
				heading: 'One Ecosystem for Financial Service Discovery',
				content:
					'The platform creates a direct marketplace between financial entities and specialized providers. This shortens discovery cycles and improves fit between demand-side requirements and delivery-side capabilities.',
			},
			{
				heading: 'Operational Problem Solving Through Network Density',
				content:
					'As more qualified participants join, institutions gain access to broader solution pathways for recurring operational challenges. The curated nature of the network keeps the focus on actionable and credible partnerships.',
			},
			{
				heading: 'Media and Intelligence as Strategic Amplifiers',
				content:
					'Market Chase includes a media and intelligence layer that improves visibility and supports decision-making. Entities can strengthen positioning while tracking sector trends that influence strategic planning.',
			},
		],
	},
	{
		id: 'cio',
		name: 'Chase Investment Office (CIO)',
		title: 'CIO: Precision Investment Intelligence for Sophisticated Capital',
		summary:
			'How CIO maps where and when high-potential opportunities emerge across regions and industries.',
		description:
			'CIO is a specialized data provider for institutional clients, HNWIs, and UHNWIs, delivering structured investment intelligence by country, region, and sector.',
		location: 'USA',
		logo: CIOLogo,
		logoSurfaceClassName: 'bg-[#dddddd]',
		banner: CIOBanner,
		publishedAt: '2026-04-19',
		tags: ['Investment Intelligence', 'Opportunity Mapping', 'Data Strategy', 'USA'],
		intro:
			'Chase Investment Office (CIO) is designed for investors who need more than high-level commentary. It focuses on clear, actionable intelligence around opportunity timing, geographic concentration, and sector-specific potential.',
		sections: [
			{
				heading: 'Structured Data for Allocation Clarity',
				content:
					'CIO organizes market intelligence into practical decision inputs so investors can evaluate location, industry, and timing together. This supports allocation decisions with higher confidence and lower noise.',
			},
			{
				heading: 'Coverage Across Regions and Verticals',
				content:
					'The platform maps opportunities across countries and sectors, helping clients compare growth asymmetry and strategic fit. It is built for portfolios that require both precision and global breadth.',
			},
			{
				heading: 'Actionable Signals for High-Impact Capital',
				content:
					'By emphasizing depth and usability, CIO turns research into deployable strategy. Investors can identify where capital is likely to generate stronger outcomes and adjust exposure proactively.',
			},
		],
	},
];
