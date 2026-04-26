import Image from 'next/image';

const partners = [
	{
		name: 'McKinsey & Company',
		logo: '/partners/clean/mckinsey.webp',
		frameClassName: 'w-[110px] sm:w-[130px] lg:w-[145px]',
	},
	{
		name: 'Boston Consulting Group',
		logo: '/partners/clean/bcg.webp',
		frameClassName: 'w-[65px] sm:w-[75px] lg:w-[84px]',
	},
	{
		name: 'Bain & Company',
		logo: '/partners/clean/bain-logo-square.webp',
		frameClassName: 'w-[90px] sm:w-[110px] lg:w-[125px]',
	},
	{
		name: 'Deloitte',
		logo: '/partners/clean/deloitte.webp',
		frameClassName: 'w-[92px] sm:w-[110px] lg:w-[120px]',
	},
	{
		name: 'PwC',
		logo: '/partners/clean/pwc.webp',
		frameClassName: 'w-[62px] sm:w-[72px] lg:w-[82px]',
		logoClassName: 'scale-[1.22]',
	},
	{
		name: 'KPMG',
		logo: '/partners/clean/kpmg-blue-logo-svg.webp',
		frameClassName: 'w-[85px] sm:w-[105px] lg:w-[125px]',
	},
	{
		name: 'D. E. Shaw',
		logo: '/partners/clean/d-e-shaw-and-co-lp-logo-vector.webp',
		frameClassName: 'w-[108px] sm:w-[130px] lg:w-[150px]',
	},
	{
		name: 'Two Sigma',
		logo: '/partners/clean/two-sigma-investments-logo-vector.webp',
		frameClassName: 'w-[90px] sm:w-[110px] lg:w-[135px]',
	},
	{
		name: 'PLAYGLOBAL Capital',
		logo: '/partners/pg.jpg',
		frameClassName: 'w-[82px] sm:w-[96px] lg:w-[110px]',
	},
];

export default function Partners() {
	const marqueePartners = [...partners, ...partners];

	return (
		<section className="w-full overflow-hidden border-y border-[rgba(15,31,21,0.12)] bg-accent py-4 sm:py-5">
			<div className="animate-marquee flex w-max items-center gap-8 px-8 sm:gap-10 lg:gap-12 lg:px-10">
				{marqueePartners.map(({ frameClassName, logo, logoClassName = '', name }, i) => (
					<div key={`${name}-${i}`} className={`flex h-[34px] items-center ${frameClassName}`}>
						<Image
							src={logo}
							alt={`${name} logo`}
							width={420}
							height={140}
							className={`h-auto max-h-[34px] w-full object-contain opacity-95 ${logoClassName}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
