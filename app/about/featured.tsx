import Image from 'next/image';

function Featured() {
	return (
		<section className="grid place-items-center bg-slate-50">
			<div className="container my-20">
				<h2 className="mb-10 text-2xl font-bold md:text-3xl lg:px-32 lg:text-4xl">
					Got Featured
				</h2>
				<div className="flex max-w-full justify-between gap-2 lg:px-32">
					<div>
						<Image
							className="h-auto w-auto"
							src="/images/EconomicTimes.png"
							alt="featured brand logo"
							height={160}
							width={220}
						/>
					</div>
					<div>
						<Image
							className="h-auto w-auto"
							src="/images/Inc42.png"
							alt="featured brand logo"
							height={160}
							width={220}
						/>
					</div>
					<div>
						<Image
							className="h-auto w-auto"
							src="/images/mint.png"
							alt="featured brand logo"
							height={160}
							width={220}
						/>
					</div>
					<div>
						<Image
							className="h-auto w-auto"
							src="/images/YourStory.png"
							alt="featured brand logo"
							height={160}
							width={220}
						/>
					</div>
					<div>
						<Image
							className="h-auto w-auto"
							src="/images/BusinessStandard.png"
							alt="featured brand logo"
							height={160}
							width={220}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Featured;
