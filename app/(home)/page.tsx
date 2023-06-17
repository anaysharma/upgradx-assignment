import { NextPage } from 'next';
import Header from './header';
import BrandsSlider from './slider';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<div>
			<Header />
			<BrandsSlider/>
		</div>
	);
};

export default Page;
