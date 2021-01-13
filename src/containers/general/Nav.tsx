import React from 'react';
import { Navigation } from './style';

import Link from '../../shared/components/Link';

const Nav = () => {
	return (
		<Navigation>
			<ul>
				<li>
					<Link text='Sell' />
				</li>
				<li>
					<Link text='Marketplace' />
				</li>
				<li>
					<Link text='Community' />
				</li>
				<li>
					<Link text='Develop' />
				</li>
				<li>
					<Link text='Resources' />
				</li>
			</ul>
		</Navigation>
	);
};

export default Nav;
