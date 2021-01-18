import React from 'react';
import {
	EcommerceCard,
	CardImg,
	CardTitle,
	CardText,
	BlueLink,
	TextWrap,
	Number
} from './style';

const Card = (props: any) => {
	const { cardPic, title, text, blueText, style, number } = props;
	return (
		<React.Fragment>
			<EcommerceCard style={style}>
				<CardImg src={cardPic} />
				<Number>{number}</Number>
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
