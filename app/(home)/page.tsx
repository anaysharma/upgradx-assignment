import Header from './header';
import BrandsSlider from './slider';
import Products from './products';
import EffectSlider from './effectSlider';
import WhyUs from './whyUs';
import Earning from './earning';

function Page() {
	return (
		<div className="container">
			<Header />
			<BrandsSlider />
			<Products />
			<EffectSlider />
			<WhyUs />
			<Earning />
		</div>
	);
}

export default Page;
