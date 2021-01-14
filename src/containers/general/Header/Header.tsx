import React from 'react';
import { HeaderWrap, LogIn, LogoNavWrap, Search } from './style';

import Nav from '../Nav';
import Logo from '../../../shared/components/Logo';
import Link from '../../../shared/components/Link';
import CallToAction from '../../../shared/components/CTA';

// Assets
import SearchBtn from '../../../assets/icon-search.png';

const Header = () => {
	return (
		<HeaderWrap>
			<LogoNavWrap>
				<Logo first style={{ marginRight: '144px' }} />
				<Nav />
			</LogoNavWrap>
			<LogIn>
				<Link head text='Log In' style={{ marginRight: '38px' }} />
				<CallToAction
					started
					text='Get started'
					style={{ marginRight: '30px' }}
				/>
				<Search src={SearchBtn} />
			</LogIn>
		</HeaderWrap>
	);
};

export default Header;
