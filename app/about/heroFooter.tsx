import Image from 'next/image';

function HeroFooter() {
	return (
		<section className="-mb-20">
			<Image
				src="/images/AboutUsFooter.png"
				alt="footer hero section image"
				width={2000}
				height={900}
			/>
		</section>
	);
}

export default HeroFooter;
