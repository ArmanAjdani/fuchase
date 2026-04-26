import { StaticImageData } from 'next/image';

import VentureChaseLogo from '@assets/imgs/solutions/logos/venture-chase.png';
import ChasePrimeLogo from '@assets/imgs/solutions/logos/chase-prime.png';
import FlowChaseLogo from '@assets/imgs/solutions/logos/flow-chase.png';
import MarketChaseLogo from '@assets/imgs/solutions/logos/market-chase.png';
import CCXLogo from '@assets/imgs/solutions/logos/ccx.png';
import CIOLogo from '@assets/imgs/solutions/logos/chase-investment-office.png';
import PrivateChaseLogo from '@assets/imgs/solutions/logos/private-chase.png';
import ChaseEstateLogo from '@assets/imgs/solutions/logos/chase-estate.png';
import ChasePriveLogo from '@assets/imgs/solutions/logos/chase-prive.png';
import XChaseLogo from '@assets/imgs/solutions/logos/x-chase.png';

import BlogImage3939 from '@assets/imgs/blog/IMG_3939.jpg';
import BlogImage3940 from '@assets/imgs/blog/IMG_3940.jpg';
import BlogImage3944 from '@assets/imgs/blog/IMG_3944.jpg';
import BlogImage3945 from '@assets/imgs/blog/IMG_3945.jpg';
import BlogImage3947 from '@assets/imgs/blog/IMG_3947.jpg';
import BlogImage6010149128769310171 from '@assets/imgs/blog/6010149128769310171.jpg';
import BlogImage6010149128769310172 from '@assets/imgs/blog/6010149128769310172.jpg';
import BlogImage6010149128769310178 from '@assets/imgs/blog/6010149128769310178.jpg';
import BlogImage6010149128769310180 from '@assets/imgs/blog/6010149128769310180.jpg';
import BlogImage6010149128769310181 from '@assets/imgs/blog/6010149128769310181.jpg';

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
		description: 'Curated capital meets opportunity',
		location: 'USA',
		logo: VentureChaseLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: BlogImage6010149128769310171,
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
		description: 'Institutional finance systems academy',
		location: 'UAE',
		logo: ChasePrimeLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: BlogImage6010149128769310172,
		publishedAt: '2026-04-06',
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
		description: 'Seamless GCC capital mobility',
		location: 'UAE',
		logo: FlowChaseLogo,
		logoSurfaceClassName: 'bg-[#a1b2a1]',
		banner: BlogImage6010149128769310178,
		publishedAt: '2026-04-08',
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
		description: 'Institutional clearing and liquidity',
		location: 'Cyprus (CySEC) - Cayman Islands (CIMA) - Abu Dhabi (ADGM)',
		logo: CCXLogo,
		logoSurfaceClassName: 'bg-[#dddddd]',
		banner: BlogImage6010149128769310180,
		publishedAt: '2026-04-10',
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
		description: 'Financial ecosystem partnership marketplace',
		location: 'USA',
		logo: MarketChaseLogo,
		logoSurfaceClassName: 'bg-[#e2e2e2]',
		banner: BlogImage6010149128769310181,
		publishedAt: '2026-04-12',
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
		description: 'Precision global investment intelligence',
		location: 'USA',
		logo: CIOLogo,
		logoSurfaceClassName: 'bg-[#dddddd]',
		banner: BlogImage3939,
		publishedAt: '2026-04-14',
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
	{
		id: 'private-chase',
		name: 'Private Chase',
		title: 'Private Chase: Structured Forex Access and Tailored Asset Management',
		summary:
			'How Private Chase combines private brokerage execution with customized capital management for sophisticated clients.',
		description: 'Private brokerage asset management',
		location: 'Seychelles - UAE',
		logo: PrivateChaseLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: BlogImage3944,
		publishedAt: '2026-04-16',
		tags: ['Private Brokerage', 'Forex', 'Asset Management', 'HNWIs'],
		intro:
			'Private Chase is designed as a private brokerage and asset management platform for clients who require controlled execution, strategic positioning, and discretionary capital support. The model combines market access with an institutional operating discipline.',
		sections: [
			{
				heading: 'Private Market Access by Design',
				content:
					'The brokerage layer is built for structured access, not mass-market flow. Clients operate through curated channels with tighter process controls, clearer execution handling, and a focus on consistency over volume.',
			},
			{
				heading: 'Tailored Capital Management',
				content:
					'Portfolio handling is designed around individual risk profiles and strategic objectives. Instead of generic allocation templates, Private Chase supports bespoke capital management frameworks aligned to each investor mandate.',
			},
			{
				heading: 'Controlled Strategic Environment',
				content:
					'By integrating brokerage operations with asset management logic, Private Chase creates a coordinated environment where execution, oversight, and strategy are kept in sync across the full investment cycle.',
			},
		],
	},
	{
		id: 'chase-estate',
		name: 'Chase Estate',
		title: 'Chase Estate: AI-Powered Real Estate Intelligence for Strategic Portfolios',
		summary:
			'How Chase Estate applies AI and big data to real estate allocation and portfolio development at institutional scale.',
		description: 'AI real estate intelligence',
		location: 'UAE - USA',
		logo: ChaseEstateLogo,
		logoSurfaceClassName: 'bg-[#111c74]',
		banner: BlogImage3940,
		publishedAt: '2026-04-18',
		tags: ['Real Estate', 'AI Analytics', 'Portfolio Strategy', 'Institutional'],
		intro:
			'Chase Estate is built for investors and institutions that require deeper intelligence before allocating capital into real assets. The platform combines AI processing with big data analysis to improve portfolio design, timing, and exposure decisions.',
		sections: [
			{
				heading: 'AI-Driven Market Interpretation',
				content:
					'The platform processes large market datasets to identify trends, imbalances, and location-level opportunity signals. This improves decision quality for acquisitions, exits, and strategic portfolio weighting.',
			},
			{
				heading: 'Institutional Portfolio Structuring',
				content:
					'Chase Estate supports structured portfolio development for institutions, HNWIs, and UHNWIs that need stronger governance across asset selection and diversification logic.',
			},
			{
				heading: 'Data-Led Capital Deployment',
				content:
					'By blending analytics with operational workflows, the platform helps clients move from research to execution faster while preserving control and consistency in long-term real estate strategy.',
			},
		],
	},
	{
		id: 'chase-prive',
		name: 'Chase Prive',
		title: 'Chase Prive: A Unified Super App for Elite Financial and Lifestyle Access',
		summary:
			'How Chase Prive integrates financial, strategic, and lifestyle services into one controlled operating environment.',
		description: 'Integrated elite wealth superapp',
		location: 'Monaco - UAE',
		logo: ChasePriveLogo,
		logoSurfaceClassName: 'bg-[#ddd7ca]',
		logoClassName: 'max-h-[194px]',
		banner: BlogImage3945,
		publishedAt: '2026-04-20',
		tags: ['Super App', 'UHNWIs', 'Private Services', 'Lifestyle Finance'],
		intro:
			'Chase Prive is designed for clients who need a single trusted interface across financial and non-financial priorities. It merges strategic capital services with premium lifestyle access, reducing fragmentation for high-complexity client needs.',
		sections: [
			{
				heading: 'One Access Point Across Services',
				content:
					'Chase Prive centralizes multiple service layers into a unified app environment. Clients can coordinate financial planning, strategic requests, and premium lifestyle operations without switching disconnected providers.',
			},
			{
				heading: 'Built for HNWI and UHNWI Complexity',
				content:
					'The platform is structured around the demands of affluent client profiles where privacy, precision, and rapid execution are critical. Service orchestration is built to support that complexity at scale.',
			},
			{
				heading: 'Controlled and Integrated Operations',
				content:
					'Chase Prive operates in a controlled environment where service quality and response logic are standardized. This provides a dependable framework for long-term client relationships across multiple domains.',
			},
		],
	},
	{
		id: 'x-chase',
		name: 'X-Chase',
		title: 'X-Chase: Financial Infrastructure Design, Build, and Operational Scaling',
		summary:
			'How X-Chase delivers end-to-end system architecture for launching and scaling financial infrastructures.',
		description: 'Financial infrastructure design partner',
		location: 'New York - USA',
		logo: XChaseLogo,
		logoSurfaceClassName: 'bg-[#050505]',
		banner: BlogImage3947,
		publishedAt: '2026-04-22',
		tags: ['System Architecture', 'Financial Infrastructure', 'Operations', 'USA'],
		intro:
			'X-Chase focuses on designing, building, and operating financial systems for organizations that need robust infrastructure from day one. It combines architecture expertise with practical implementation to support both launch and scale phases.',
		sections: [
			{
				heading: 'System Design for Financial Operations',
				content:
					'X-Chase develops structural blueprints across front-office, middle-office, and back-office layers, ensuring that critical workflows are connected and governed from the start.',
			},
			{
				heading: 'Execution-Focused Infrastructure Buildout',
				content:
					'The build phase emphasizes deployable infrastructure rather than conceptual architecture. Teams can move from design to operation with aligned controls, process discipline, and measurable performance baselines.',
			},
			{
				heading: 'Scaling with Controlled Complexity',
				content:
					'As organizations expand, X-Chase helps preserve structural integrity by scaling systems in a modular way. This reduces operational breakdown risk and supports sustainable long-term growth.',
			},
		],
	},
];

