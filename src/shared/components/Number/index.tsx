import React from 'react';
import { Numbers } from './style';

const Number = (props: any) => {
	const { text } = props;
	return <Numbers href='/'>{text}</Numbers>;
};

export default Number;
