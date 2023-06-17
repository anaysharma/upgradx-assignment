'use client';

import Image from 'next/image';
import { MouseEvent, useRef } from 'react';

type CardProps = {
	src: string;
	title: string;
	content: string;
	bg: string;
};

function ProductCard(props: CardProps) {
	const { src, title, content, bg } = props;
	const inputRef = useRef<HTMLDivElement>(null);

	let bounds: DOMRect;
	const rotateToMouse = (e: MouseEvent): void => {
		if (inputRef.current) bounds = inputRef.current.getBoundingClientRect();
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2,
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		if (inputRef.current)
			inputRef.current.style.transform = `
			scale(1.04)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance)}deg
      )
    `;
	};
	const removeListener = () => {
		if (inputRef.current) inputRef.current.style.transform = '';
	};

	return (
		<div style={{ perspective: 1000, transition: 'scale 3s ease' }}>
			<div
				ref={inputRef}
				onMouseMove={rotateToMouse}
				onMouseLeave={removeListener}
				style={{ backgroundColor: bg }}
				className="group flex h-full flex-col items-center gap-8 rounded-xl p-10 transition-all duration-75 hover:bg-white hover:shadow-lg xl:h-52 xl:flex-row"
			>
				<div className="mr-auto">
					<Image
						className="h-20 w-auto saturate-0 group-hover:saturate-100 xl:h-auto"
						src={src}
						alt="product card image"
						height={200}
						width={200}
					/>
				</div>
				<div>
					<h4 className="text-xl font-bold">{title}</h4>
					<p className="mt-1">{content}</p>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
