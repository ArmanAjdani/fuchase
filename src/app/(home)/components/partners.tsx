import Image from 'next/image';

const partners = [
	{
		name: 'McKinsey & Company',
		logo: '/partners/clean/mckinsey.webp',
		frameClassName: 'w-[88px] sm:w-[104px] xl:w-[116px]',
	},
	{
		name: 'Boston Consulting Group',
		logo: '/partners/clean/bcg.webp',
		frameClassName: 'w-[52px] sm:w-[60px] xl:w-[67px]',
	},
	{
		name: 'Bain & Company',
		logo: '/partners/clean/bain-logo-square.webp',
		frameClassName: 'w-[72px] sm:w-[88px] xl:w-[100px]',
	},
	{
		name: 'Deloitte',
		logo: '/partners/clean/deloitte.webp',
		frameClassName: 'w-[74px] sm:w-[88px] xl:w-[96px]',
	},
	{
		name: 'PwC',
		logo: '/partners/clean/pwc.webp',
		frameClassName: 'w-[50px] sm:w-[58px] xl:w-[66px]',
		logoClassName: 'scale-[1.22]',
	},
	{
		name: 'KPMG',
		logo: '/partners/clean/kpmg-blue-logo-svg.webp',
		frameClassName: 'w-[68px] sm:w-[84px] xl:w-[100px]',
	},
	{
		name: 'D. E. Shaw',
		logo: '/partners/clean/d-e-shaw-and-co-lp-logo-vector.webp',
		frameClassName: 'w-[86px] sm:w-[104px] xl:w-[120px]',
	},
	{
		name: 'Two Sigma',
		logo: '/partners/clean/two-sigma-investments-logo-vector.webp',
		frameClassName: 'w-[72px] sm:w-[88px] xl:w-[108px]',
	},
	{
		name: 'PLAYGLOBAL Capital',
		logo: '/partners/pg.jpg',
		frameClassName: 'w-[90px] sm:w-[106px] xl:w-[123px]',
		logoClassName: 'scale-[1.5]',
	},
];

export default function Partners() {
	const marqueePartners = [...partners, ...partners];

	return (
		<section className="w-full overflow-hidden border-y border-[rgba(15,31,21,0.12)] bg-accent py-4 sm:py-5">
			<div className="animate-marquee flex w-max items-center gap-6 px-8 sm:gap-8 xl:gap-10 xl:px-10">
				{marqueePartners.map(({ frameClassName, logo, logoClassName = '', name }, i) => (
					<div key={`${name}-${i}`} className={`flex h-[34px] items-center ${frameClassName}`}>
						<Image
							src={logo}
							alt={`${name} logo`}
							width={420}
							height={140}
							className={`h-auto max-h-[27px] w-full object-contain opacity-95 ${logoClassName}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
