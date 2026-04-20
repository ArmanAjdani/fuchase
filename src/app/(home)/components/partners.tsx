import Image from 'next/image';

const partners = [
	{
		name: 'McKinsey & Company',
		logo: '/partners/clean/mckinsey.webp',
		frameClassName: 'w-[220px] sm:w-[260px] lg:w-[290px]',
	},
	{
		name: 'Boston Consulting Group',
		logo: '/partners/clean/bcg.webp',
		frameClassName: 'w-[130px] sm:w-[150px] lg:w-[168px]',
	},
	{
		name: 'Bain & Company',
		logo: '/partners/clean/bain-logo-square.webp',
		frameClassName: 'w-[180px] sm:w-[220px] lg:w-[250px]',
	},
	{
		name: 'Deloitte',
		logo: '/partners/clean/deloitte.webp',
		frameClassName: 'w-[185px] sm:w-[220px] lg:w-[240px]',
	},
	{
		name: 'PwC',
		logo: '/partners/clean/pwc.webp',
		frameClassName: 'w-[125px] sm:w-[145px] lg:w-[165px]',
		logoClassName: 'scale-[1.22]',
	},
	{
		name: 'KPMG',
		logo: '/partners/clean/kpmg-blue-logo-svg.webp',
		frameClassName: 'w-[170px] sm:w-[210px] lg:w-[250px]',
	},
	{
		name: 'D. E. Shaw',
		logo: '/partners/clean/d-e-shaw-and-co-lp-logo-vector.webp',
		frameClassName: 'w-[215px] sm:w-[260px] lg:w-[300px]',
	},
	{
		name: 'Two Sigma',
		logo: '/partners/clean/two-sigma-investments-logo-vector.webp',
		frameClassName: 'w-[180px] sm:w-[220px] lg:w-[270px]',
	},
];

export default function Partners() {
	const marqueePartners = [...partners, ...partners];

	return (
		<section className="w-full overflow-hidden border-y border-[rgba(15,31,21,0.12)] bg-accent py-5 sm:py-6">
			<div className="animate-marquee flex w-max items-center gap-10 px-8 sm:gap-14 lg:gap-16 lg:px-10">
				{marqueePartners.map(({ frameClassName, logo, logoClassName = '', name }, i) => (
					<div key={`${name}-${i}`} className={`flex h-[60px] items-center ${frameClassName}`}>
						<Image
							src={logo}
							alt={`${name} logo`}
							width={420}
							height={140}
							className={`h-auto max-h-[60px] w-full object-contain opacity-95 ${logoClassName}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
