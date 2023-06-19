import Featured from './featured';
import Founders from './founders';
import Growth from './growth';
import Header from './header';
import HeroFooter from './heroFooter';
import Investors from './investors';

function Page() {
	return (
		<div>
			<Header />
			<Growth />
			<Featured />
			<Investors />
			<Founders />
			<HeroFooter />
		</div>
	);
}

export default Page;
