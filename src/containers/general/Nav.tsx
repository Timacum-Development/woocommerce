import React from 'react';
import { Navigation } from './style';

import Link from '../../shared/components/Link';

const Nav = () => {
	return (
		<Navigation>
			<ul>
				<li>
					<Link head text='Sell' />
				</li>
				<li>
					<Link head text='Marketplace' />
				</li>
				<li>
					<Link head text='Community' />
				</li>
				<li>
					<Link head text='Develop' />
				</li>
				<li>
					<Link head text='Resources' />
				</li>
			</ul>
		</Navigation>
	);
};

export default Nav;
