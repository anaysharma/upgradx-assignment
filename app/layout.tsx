import Navbar from '@/components/navbar';
import { Montserrat } from 'next/font/google';
import './global.css';
import Footer from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'ZET : Become a Certified Financial Advisor and Earn Big',
	description:
		'Want to earn extra money from home? Download ZET, the best earning app without investment in India. Start your online business today and make regular income by selling financial products like credit cards, loans, saving accounts &amp; other banking products.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
			</head>
			<body className={montserrat.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
