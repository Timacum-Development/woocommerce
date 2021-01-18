import React from 'react';
import { HeaderLink, BlueLink, RegularLink } from './style';

const Link = (props: any) => {
	const { text, textBlue, style, head, blue } = props;
	return (
		<React.Fragment>
			{head ? (
				<HeaderLink href='/' style={style}>
					{text}
				</HeaderLink>
			) : !head && blue ? (
				<BlueLink href='/' style={style}>
					{textBlue}
				</BlueLink>
			) : (
				<RegularLink href='/' style={style}>
					{text}
				</RegularLink>
			)}
		</React.Fragment>
	);
};

export default Link;
