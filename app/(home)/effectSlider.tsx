'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';

function EffectSlider() {
	const [progress, setProgress] = useState<number>(1);

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2600,
		cssEase: 'ease',
		arrows: false,
		beforeChange: (current: number) =>
			setProgress((100 / (3 - 2)) * (current + 1)),
	};

	return (
		<section className="my-44 grid h-screen place-items-center">
			<div className="clip absolute left-0 -z-20 h-[120vh] w-screen bg-[#145cc5]"></div>
			<div className="clip2 relative flex h-3/4 w-full items-center justify-center bg-[#417fda] xl:mx-28 xl:w-auto">
				<div className="flex">
					<div className="-mb-10 -mr-10 hidden hue-rotate-180 saturate-200 lg:block">
						<Image
							className="saturate-200 sepia"
							src="/images/peeps1.png"
							alt="slider background image"
							height={400}
							width={600}
						/>
					</div>
					<div className="-ml-10 flex flex-col justify-center gap-10 px-10 text-2xl font-bold text-white">
						<h3 className="uppercase">The ZET Effect</h3>
						<Slider
							{...settings}
							className="w-96 text-white lg:text-3xl xl:w-[500px]"
						>
							<div>
								<p>
									14 Lakh+ Financial Advisor across India are using ZET to
									increase their income.
								</p>
							</div>
							<div>
								<p>
									We helped customers in more than 50 cities to get their first
									financial product
								</p>
							</div>
							<div>
								<p>
									More than ₹20 Cr earned by our Agents by selling Credit Cards
									and Loans
								</p>
							</div>
						</Slider>
						<div className="relative h-2 w-[300px] overflow-hidden rounded-full bg-black/20">
							<div
								className="absolute h-2 bg-white transition-all duration-1000"
								style={{ width: progress }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default EffectSlider;
