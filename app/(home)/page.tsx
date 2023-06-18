import { NextPage } from 'next';
import Header from './header';
import BrandsSlider from './slider';
import Products from './products';
import EffectSlider from './effectSlider';
import WhyUs from './whyUs';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<div className="container">
			<Header />
			<BrandsSlider />
			<Products />
			<EffectSlider />
			<WhyUs />
		</div>
	);
};

export default Page;
