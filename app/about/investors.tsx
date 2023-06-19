import InvestorCard from './investorCard';

function Investors() {
	return (
		<section className="container">
			<div className="grid gap-20 py-20 lg:px-32">
				<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
					Meet the Investors
				</h2>
				<div className="grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 xl:grid-cols-4">
					<InvestorCard src="/images/InvCompany1.png" />
					<InvestorCard src="/images/InvCompany2.png" />
					<InvestorCard src="/images/InvCompany3.png" />
					<InvestorCard src="/images/InvCompany4.png" />
				</div>
				<div className="grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 xl:grid-cols-4">
					<InvestorCard
						src="/images/Inv1.png"
						name="Kunal Shah"
						categ="Founder, CRED"
					/>
					<InvestorCard
						src="/images/Inv2.png"
						name="Gaurav Munjal"
						categ="Founder, UNACADEMY"
					/>
					<InvestorCard
						src="/images/Inv3.png"
						name="Aakrit Vaish"
						categ="Co-Founder, HAPTIK"
					/>
					<InvestorCard
						src="/images/Inv4.png"
						name="Harshil Mathur"
						categ="Founder, RAZORPAY"
					/>
					<InvestorCard
						src="/images/Inv5.png"
						name="Vidit Aatrey"
						categ="Founder & CEO, MEESHO"
					/>
					<InvestorCard
						src="/images/Inv6.png"
						name="Amrish Rau"
						categ="CEO, PINELABS"
					/>
					<InvestorCard
						src="/images/Inv7.png"
						name="Lalit Keshre"
						categ="CEO, GROWW"
					/>
					<InvestorCard
						src="/images/Inv8.png"
						name="Gokul Rajaram"
						categ="Product, DOORDASH"
					/>
				</div>
			</div>
		</section>
	);
}

export default Investors;
