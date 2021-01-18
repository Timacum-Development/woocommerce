import React from 'react';
import {
	EcommerceCard,
	CardImg,
	CardTitle,
	CardText,
	BlueLink,
	TextWrap
} from './style';

const Card = (props: any) => {
	const { cardPic, title, text, blueText, style } = props;
	return (
		<React.Fragment>
			<EcommerceCard style={style}>
				<CardImg src={cardPic} />
				<TextWrap>
					<CardTitle>{title}</CardTitle>
					<CardText>{text}</CardText>
					<BlueLink>{blueText}</BlueLink>
				</TextWrap>
			</EcommerceCard>
		</React.Fragment>
	);
};

export default Card;
