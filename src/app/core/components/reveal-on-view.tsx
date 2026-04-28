'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type RevealOnViewProps = {
	children: ReactNode;
	className?: string;
	delayMs?: number;
	from?: 'up' | 'left' | 'right';
};

const hiddenClassByDirection = {
	up: 'opacity-0 translate-y-10',
	left: 'opacity-0 -translate-x-10',
	right: 'opacity-0 translate-x-10',
} as const;

function isFigmaCapture() {
	return typeof window !== 'undefined' && window.location.hash.includes('figmacapture=');
}

export default function RevealOnView({
	children,
	className = '',
	delayMs = 0,
	from = 'up',
}: RevealOnViewProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(isFigmaCapture);

	useEffect(() => {
		if (isFigmaCapture()) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.2 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${delayMs}ms` }}
			className={`transition-all duration-700 ease-out ${
				isVisible ? 'opacity-100 translate-y-0 translate-x-0' : hiddenClassByDirection[from]
			} ${className}`}
		>
			{children}
		</div>
	);
}
