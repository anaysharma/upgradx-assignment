'use client';

import FounderCard from './founderCard';
import { motion } from 'framer-motion';

function Founders() {
	return (
		<section className="my-10 bg-gradient-to-b from-[#ebf5ff] py-14 lg:my-20 lg:py-20">
			<div className="container grid justify-items-center gap-20">
				<div className="text-center">
					<h2 className="mb-2 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">
						Meet our Founders
					</h2>
					<p className="md:text-lg lg:text-xl">Few words from founders desk</p>
				</div>
				<motion.div
					initial={{ y: 120, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
				>
					<FounderCard
						src="/images/Manish.png"
						name="Manish Shara"
						categ="Co- Founder & CEO"
					/>
					<FounderCard
						src="/images/Yash.png"
						name="Yash Desai"
						categ="Co- Founder"
					/>
					<FounderCard
						src="/images/Lokesh.png"
						name="Lokesh Agarwal"
						categ="CTO"
					/>
				</motion.div>
			</div>
		</section>
	);
}

export default Founders;
