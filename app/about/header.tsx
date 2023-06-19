import Image from 'next/image';

function Header() {
	return (
		<section className="grid place-items-center overflow-hidden">
			<Image
				className="h-[600px] object-cover lg:h-auto"
				src="/images/OurMission.png"
				alt="our mission header image"
				width={2000}
				height={1200}
			/>
			<div className="container absolute flex max-w-[70ch] flex-col items-center gap-6 text-white">
				<h2 className="text-4xl font-bold uppercase">Our Mission</h2>
				<p className="text-center text-lg">
					Enabling financial inclusion for the next billion Indians & making
					their Zindagi Set. Building a platform that enables you to sell
					financial products & earn up to Rs. 1 lakh every month.
				</p>
				<span className="text-lg font-bold tracking-widest">
					EARN BETTER. LIVE BETTER.
				</span>
			</div>
		</section>
	);
}

export default Header;
