import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer className="relative mt-20">
			<div className="absolute -z-10">
				<Image
					className="h-[500px] object-cover"
					src="/images/footer.png"
					width={2000}
					height={700}
					alt="footer bg image"
				/>
			</div>
			<div className="container py-2 text-white">
				<div className="border-b border-b-white py-6 xl:mx-28">
					<Image
						src="/zet_logo_white.svg"
						alt="footer site logo"
						width={80}
						height={30}
					/>
				</div>
				<div className="grid grid-cols-2 gap-10 py-10 md:grid-cols-3 lg:grid-cols-4 xl:px-28">
					<div className="flex flex-col gap-2">
						<h4 className="text-xl uppercase">Company</h4>
						<Link href="/about">About Us</Link>
						<Link href="/partner">Partner with us</Link>
						<Link href="/blog">Blog</Link>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl uppercase">Legal</h4>
						<Link href="/privacy">Privay policy</Link>
						<Link href="/tos">Terms of use</Link>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl uppercase">Contact</h4>
						<a className="flex gap-2" href="mailto:hi@zetapp.in">
							<span>
								<Image
									src="/images/EmailIcon.png"
									alt="email icon"
									height={20}
									width={20}
								/>
							</span>
							hi@zetapp.in
						</a>
						<a className="flex gap-2" href="tel:+91-7417274072">
							<span>
								<Image
									src="/images/PhoneIcon.png"
									alt="phone icon"
									height={20}
									width={20}
								/>
							</span>
							+91-7417274072
						</a>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl uppercase">Social</h4>
						<div className="flex gap-4">
							<Link href="">
								<span>
									<Image
										src="/images/linkedin.svg"
										height={30}
										width={30}
										alt="linkedin logo"
									/>
								</span>
							</Link>
							<Link href="">
								<span>
									<Image
										src="/images/instagram.svg"
										height={30}
										width={30}
										alt="insta logo"
									/>
								</span>
							</Link>
							<Link href="">
								<span>
									<Image
										src="/images/facebook.svg"
										height={30}
										width={30}
										alt="facebook logo"
									/>
								</span>
							</Link>
							<Link href="">
								<span>
									<Image
										src="/images/Telegram.svg"
										height={30}
										width={30}
										alt="telegram logo"
									/>
								</span>
							</Link>
							<Link href="">
								<span>
									<Image
										src="/images/Whatsapp.svg"
										height={30}
										width={30}
										alt="whatsapp logo"
									/>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
