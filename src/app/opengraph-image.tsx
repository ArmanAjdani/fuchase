import { ImageResponse } from 'next/og';

export const alt = 'FuChase financial ecosystem';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					background: '#0f1f15',
					color: '#c4c9b3',
					padding: 72,
				}}
			>
				<div style={{ fontSize: 34, letterSpacing: 3, textTransform: 'uppercase' }}>
					FuChase
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{ fontSize: 86, lineHeight: 1.05, maxWidth: 850 }}>
						Financial ecosystem
					</div>
					<div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.45, maxWidth: 850 }}>
						Capital, infrastructure, technology, and specialized financial entities.
					</div>
				</div>
				<div style={{ fontSize: 24, color: '#e7e8e8' }}>fuchase.com</div>
			</div>
		),
		size,
	);
}
