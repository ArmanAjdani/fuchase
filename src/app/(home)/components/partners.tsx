import Image from 'next/image';

const partners = [
	{ name: 'McKinsey & Company', logo: '/partners/mckinsey.png' },
	{ name: 'Boston Consulting Group', logo: '/partners/bcg.png' },
	{ name: 'Bain & Company', logo: '/partners/bain.png' },
	{ name: 'Deloitte', logo: '/partners/deloitte.png' },
	{ name: 'PwC', logo: '/partners/pwc.png' },
	{ name: 'EY', logo: '/partners/ey.png' },
	{ name: 'KPMG', logo: '/partners/kpmg.png' },
	{ name: 'Renaissance Technologies', logo: '/partners/renaissance-technologies.png' },
	{ name: 'Two Sigma', logo: '/partners/two-sigma.png' },
	{ name: 'D. E. Shaw', logo: '/partners/de-shaw.png' },
	{ name: 'Point72', logo: '/partners/point72.png' },
	{ name: 'Millennium Management', logo: '/partners/millennium-management.png' },
	{ name: 'Jane Street', logo: '/partners/jane-street.png' },
	{ name: 'Jump Trading', logo: '/partners/jump-trading.png' },
	{ name: 'DRW', logo: '/partners/drw.png' },
	{ name: 'Hudson River Trading', logo: '/partners/hudson-river-trading.png' },
	{ name: 'IMC Trading', logo: '/partners/imc-trading.png' },
];

export default function Partners() {
	const marqueePartners = [...partners, ...partners];

	return (
		<section className="w-full overflow-hidden bg-accent py-4 sm:py-5">
			<div className="animate-marquee flex w-max items-center gap-4 px-4 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8">
				{marqueePartners.map(({ name, logo }, i) => (
					<div
						key={`${name}-${i}`}
						className="flex min-w-max items-center gap-3 rounded-full border border-[rgba(15,31,21,0.12)] bg-[#f7f7f2] px-4 py-2 shadow-[0_16px_30px_rgba(15,31,21,0.08)]"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
							<Image
								src={logo}
								alt={`${name} logo`}
								width={32}
								height={32}
								className="h-8 w-8 object-contain"
							/>
						</div>
						<span className="whitespace-nowrap text-display-r text-base">{name}</span>
					</div>
				))}
			</div>
		</section>
	);
}
