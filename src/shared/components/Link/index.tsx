import React from 'react';
import { HeaderLink } from './style';

const Link = (props: any) => {
	const { text, style } = props;
	return (
		<React.Fragment>
			<HeaderLink href='/' style={style}>
				{text}
			</HeaderLink>
		</React.Fragment>
	);
};

export default Link;
