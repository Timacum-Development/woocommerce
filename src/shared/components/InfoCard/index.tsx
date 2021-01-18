import React from 'react';
import { CardWrap, InfoImg, InfoTextWrap } from './style';

const InfoCard = (props: any) => {
	const { infoPic, infoTitle } = props;
	return (
		<React.Fragment>
			<CardWrap>
				<InfoImg src={infoPic} />
				<InfoTextWrap>
					<h3 class='info-text'>{infoTitle}</h3>
					<p>{infoText}</p>
				</InfoTextWrap>
			</CardWrap>
		</React.Fragment>
	);
};

export default InfoCard;
