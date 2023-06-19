import Image from 'next/image';

function Growth() {
	return (
		<section className="container mt-20">
			<h2 className="text-center text-2xl font-bold lg:text-4xl">
				How we evolved over the years
			</h2>
			<div className="overflow-y-auto py-10 lg:p-20">
				<Image
					className="min-w-[1200px] md:min-w-[auto]"
					src="/images/Growth.png"
					width={2000}
					height={300}
					alt="evolution illustration image"
				/>
			</div>
		</section>
	);
}

export default Growth;
