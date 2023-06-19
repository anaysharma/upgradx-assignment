'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';

function Earning() {
	const [loaderWidth, setLoaderWidth] = useState<number>(0);

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'ease',
		arrows: false,
		beforeChange: () => {
			setLoaderWidth(300);
		},
		afterChange: () => {
			setLoaderWidth(0);
		},
	};

	return (
		<section className="my-32 grid place-items-center py-20 md:my-52 xl:my-60 xl:px-28 xl:pb-28 xl:pt-20">
			<div className="clip1 lg:clip absolute left-0 -z-10 h-[160vh] w-full bg-[#0a2540] lg:h-[200vh]"></div>
			<div className="px-20 text-white">
				<div className="mb-24 text-center">
					<h3 className="text-2xl font-bold">Start Earning in 3 Easy Steps</h3>
					<p className="text-lg">
						We have create the app the make your earning easy
					</p>
				</div>

				<Slider
					{...settings}
					className="w-[400px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px]"
				>
					<div className="flex flex-col items-center gap-20 md:flex-row">
						<div className="flex flex-1 flex-col items-center gap-10 md:items-start">
							<h4 className="clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase">
								step 1
							</h4>
							<p className="text-center text-3xl font-bold text-[#a3cbff] md:text-left">
								Download the App and sign up as ZET agent
							</p>
							<div className="relative h-3 w-[300px] overflow-hidden rounded-full bg-white">
								<div className="slide-progress absolute h-3 bg-[#538bff] transition-all duration-[6s] ease-linear"></div>
							</div>
							<Image
								src="/images/googleplay.svg"
								height={40}
								width={120}
								alt="google play icon"
							/>
						</div>
						<div className="w-52 overflow-hidden rounded-[30px] lg:w-72">
							<video autoPlay loop muted>
								<source src="/step3.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<div className="flex flex-col items-center gap-20 md:flex-row">
						<div className="flex flex-1 flex-col items-center gap-10 md:items-start">
							<h4 className="clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase">
								step 1
							</h4>
							<p className="text-center text-3xl font-bold text-[#a3cbff] md:text-left">
								Download the App and sign up as ZET agent
							</p>
							<div className="relative h-3 w-[300px] overflow-hidden rounded-full bg-white">
								<div className="slide-progress absolute h-3 bg-[#538bff] transition-all duration-[6s] ease-linear"></div>
							</div>
							<Image
								src="/images/googleplay.svg"
								height={40}
								width={120}
								alt="google play icon"
							/>
						</div>
						<div className="w-52 overflow-hidden rounded-[30px] lg:w-72">
							<video autoPlay loop muted>
								<source src="/step3.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
					<div className="flex flex-col items-center gap-20 md:flex-row">
						<div className="flex flex-1 flex-col items-center gap-10 md:items-start">
							<h4 className="clip3 w-fit bg-[#538bff] py-3 pl-5 pr-8 text-xl font-bold uppercase">
								step 1
							</h4>
							<p className="text-center text-3xl font-bold text-[#a3cbff] md:text-left">
								Download the App and sign up as ZET agent
							</p>
							<div className="relative h-3 w-[300px] overflow-hidden rounded-full bg-white">
								<div className="slide-progress absolute h-3 bg-[#538bff] transition-all duration-[6s] ease-linear"></div>
							</div>
							<Image
								src="/images/googleplay.svg"
								height={40}
								width={120}
								alt="google play icon"
							/>
						</div>
						<div className="w-52 overflow-hidden rounded-[30px] lg:w-72">
							<video autoPlay loop muted>
								<source src="/step3.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
}

export default Earning;
