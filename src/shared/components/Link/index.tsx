import React from 'react';
import { HeaderLink } from './style';

const Link = (props: any) => {
	const { text } = props;
	return (
		<React.Fragment>
			<HeaderLink href='/'>{text}</HeaderLink>
		</React.Fragment>
	);
};

export default Link;
