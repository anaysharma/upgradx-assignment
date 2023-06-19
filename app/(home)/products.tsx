import Image from 'next/image';
import ProductCard from './productCard';

function Products() {
	return (
		<section className="grid">
			<div className="absolute left-0 -z-10 h-full w-full bg-gradient-to-br from-blue-200/30">
				<Image
					src="/images/pat1.svg"
					alt="background decoration image"
					height={900}
					width={300}
				/>
				<Image
					className="absolute bottom-0 right-0"
					src="/images/pat2.svg"
					alt="background decoration image"
					height={900}
					width={300}
				/>
			</div>
			<div className="my-16 flex flex-col items-center">
				<h3 className="text-2xl font-bold">Products on ZET</h3>
				<p className="text-lg">We are trusted by best brand in the country</p>
			</div>
			<div className="grid gap-8 lg:grid-cols-2 xl:px-28">
				<ProductCard
					src="/images/CC.png"
					title="CREDIT CARDS"
					content="100% Contactless Application Process with Instant Approval From Top Banks."
					bg="#eeffee"
				/>
				<ProductCard
					src="/images/Loan.png"
					title="LOANS"
					content="100% online process. Instant offers. Affordable Rate of Interest on loans."
					bg="#ffeecc"
				/>
				<ProductCard
					src="/images/BNPL.png"
					title="BUY NOW PAY LATER"
					content="Short-term financing that allows consumers to make purchases and pay for them over time."
					bg="#ffeeee"
				/>
				<ProductCard
					src="/images/AccountSave.png"
					title="SAVING ACCOUNTS"
					content="ZET offers range of savings account that suits your personal needs for the banking."
					bg="#ffeedd"
				/>
			</div>
		</section>
	);
}

export default Products;
