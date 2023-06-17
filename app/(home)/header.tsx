'use client';

import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header: FunctionComponent = () => {
	return (
		<div className="py-10 lg:py-28 xl:p-28">
			<motion.div
				initial={{ y: 140, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className="relative flex h-min justify-between rounded bg-[#e9f4ff] p-6 md:p-16"
			>
				<div className="flex flex-col gap-6 text-center lg:text-start">
					<h3 className="flex max-w-[26ch] flex-col gap-4 text-4xl font-bold">
						Become a Financial Advisor and{' '}
						<span className="text-blue-600">Earn Rs.1 Lakh/Month</span>
					</h3>
					<p className="text-lg">No investment required</p>
					<div className="lg: flex justify-center lg:justify-start">
						<Image src="images/googleplay.svg" alt="" height={40} width={120} />
					</div>
				</div>
				<div className="hidden w-96 lg:block">
					<Image
						className="absolute bottom-0"
						src="/images/HeroImgNew.png"
						alt="hero image"
						height={400}
						width={400}
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Header;
