import type { Metadata, NextPage } from 'next';
import HeroSection from './partials/HeroSection';

type Props = {};

export const metadata: Metadata = {
	title: 'Nexus | Home'
};

const HomePage: NextPage<Props> = ({}) => {
	return (
		<>
			<HeroSection />
		</>
	);
};

export default HomePage;
