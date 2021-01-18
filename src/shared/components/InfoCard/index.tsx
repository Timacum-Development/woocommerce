import React from 'react';
import { CardWrap, InfoImg, InfoTextWrap } from './style';

import CallToAction from '../CTA';

const InfoCard = (props: any) => {
	const { infoPic, infoTitle, infoText } = props;
	return (
		<React.Fragment>
			<CardWrap>
				<InfoImg src={infoPic} />
				<InfoTextWrap>
					<h3 className='info-text'>{infoTitle}</h3>
					<p>{infoText}</p>
					<CallToAction green={true} text={text}></CallToAction>
				</InfoTextWrap>
			</CardWrap>
		</React.Fragment>
	);
};

export default InfoCard;
