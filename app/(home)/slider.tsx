'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
	'/images/Amex.png',
	'/images/Aufin.png',
	'/images/Axis.png',
	'/images/Bajaj.png',
	'/images/BOB.png',
	'/images/Icici.png',
	'/images/Idfc.png',
	'/images/IndusInd.png',
	'/images/YesBank.png',
	'/images/StandardChartered.png',
];

function BrandsSlider() {
	useEffect(() => {
		window.dispatchEvent(new Event('resize'));
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		cssEase: 'ease',
		arrows: false,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="lg:py-10 xl:px-28">
			<div className="mb-14 text-center text-lg">
				<h3 className="text-2xl font-bold">Top Brands on ZET</h3>
				We are trusted by best brand in the country
			</div>
			<Slider {...settings}>
				{images.map((src, index) => (
					<div key={index} className="px-1 lg:px-4">
						<Image
							className="rounded-lg border px-2 py-3 lg:px-6 xl:px-8"
							src={src}
							height={60}
							width={200}
							alt={`Brand ${index + 1}`}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default BrandsSlider;
