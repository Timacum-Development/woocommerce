import React from 'react';
import { Dots } from './style';

const DotGroup = (props: any) => {
	const { dotsGroup, style } = props;
	return <Dots src={dotsGroup} style={style} />;
};

export default DotGroup;
