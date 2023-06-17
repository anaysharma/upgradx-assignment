import { NextPage } from 'next';
import Header from './header';

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return (
		<div>
			<Header />
		</div>
	);
};

export default Page;
