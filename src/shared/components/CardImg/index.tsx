import React from 'react';
import { SmallImg } from './style';

const CardImg = (props: any) => {
	const { smallPic, imgStyle } = props;
	return <SmallImg src={smallPic} style={imgStyle}></SmallImg>;
};

export default CardImg;
