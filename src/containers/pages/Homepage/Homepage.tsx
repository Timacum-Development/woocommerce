import React from 'react';
import { Hero, WooImg } from './style';

// Assets
import WooLetter from '../../../assets/w.png';

const Homepage = () => {
	return (
		<Hero>
			<WooImg src={WooLetter} />
		</Hero>
	);
};

export default Homepage;
