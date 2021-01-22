import React from 'react';
import { FooterInfo, InfoIcon, InfoSpan, InfoText } from './style';

const FooterCard = (props: any) => {
	const { iconInfo, bold, text, boldSecond } = props;
	return (
		<FooterInfo>
			<InfoIcon src={iconInfo} />
			<InfoSpan>{bold}</InfoSpan>
			<InfoText>{text}</InfoText>
		</FooterInfo>
	);
};

export default FooterCard;
