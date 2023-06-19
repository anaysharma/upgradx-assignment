'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

function WhyUs() {
	return (
		<section className="flex flex-col md:flex-row xl:px-28">
			<div className="relative grid place-items-center md:w-96">
				<Image
					className="absolute -z-10 hidden md:block"
					src="/images/bgImg.png"
					alt="aside background pattern image"
					height={500}
					width={220}
				/>
				<div>
					<div className="mb-14 text-center">
						<h3 className="text-2xl font-bold">
							Why <span className="text-blue-800">Choose Us</span>
						</h3>
						<p className="text-center md:text-left">
							Why we are loved by our customers
						</p>
					</div>
					<div className="hidden md:block">
						<Image
							src="/images/whyUsHero.png"
							height={400}
							width={250}
							alt="why choose us illustration"
						/>
					</div>
				</div>
			</div>
			<motion.div
				className="grid grid-cols-1 gap-x-12 gap-y-20 p-14 lg:grid-cols-2"
				initial={{ y: 160, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 0.5 }}
			>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsZero.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Zero Investment
						</h4>
						<p className="text-center md:text-left">
							Build your business without any investment
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsPayout.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Quick Payout
						</h4>
						<p className="text-center md:text-left">
							Direct Payout in your bank account in short time
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsFin.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Limitless Earnings
						</h4>
						<p className="text-center md:text-left">
							Direct Payout in your bank account in short time
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsSupp.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Training & Upskilling
						</h4>
						<p className="text-center md:text-left">
							Get trained by finance and sales experts
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsCustomer.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Customer Support
						</h4>
						<p className="text-center md:text-left">
							Access tools and content to build relationship
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<Image
						className="mb-6 aspect-square w-20 md:w-24"
						src="/images/whyUsProd.svg"
						height={100}
						width={100}
						alt="why us illustration"
					/>
					<div>
						<h4 className="text-center text-xl font-bold md:text-left">
							Financial Products
						</h4>
						<p className="text-center md:text-left">
							Trustworthy & high-rated products & categories
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default WhyUs;
