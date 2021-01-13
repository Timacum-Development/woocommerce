import React from 'react';
import { LogoFirst, LogoSecond } from './style';

// Assets

import Logo1 from '../../../assets/logo-header.png';
import Logo2 from '../../../assets/logo-white.png';

const Logo = (props: any) => {
	const { first, style } = props;
	return (
		<React.Fragment>
			{first ? (
				<a href='/'>
					<LogoFirst src={Logo1} style={style} />
				</a>
			) : (
				<a href='/'>
					<LogoSecond src={Logo2} style={style} />
				</a>
			)}
		</React.Fragment>
	);
};

export default Logo;
