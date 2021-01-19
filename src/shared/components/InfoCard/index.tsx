import React from 'react';
import { CardWrap, InfoImg, InfoTextWrap } from './style';

import CallToAction from '../CTA';

const InfoCard = (props: any) => {
	const { infoPic, infoTitle, infoText, style } = props;
	return (
		<React.Fragment>
			<CardWrap style={style}>
				<InfoImg src={infoPic} />
				<InfoTextWrap>
					<h3 className='info-text'>{infoTitle}</h3>
					<p className='p-doc'>{infoText}</p>
					<CallToAction green text='Read the documentation' />
				</InfoTextWrap>
			</CardWrap>
		</React.Fragment>
	);
};

export default InfoCard;
