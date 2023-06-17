import { NextPage } from 'next';
import Header from './header';
import BrandsSlider from './slider';
import Products from './products';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<div className="container">
			<Header />
			<BrandsSlider />
			<Products />
		</div>
	);
};

export default Page;
