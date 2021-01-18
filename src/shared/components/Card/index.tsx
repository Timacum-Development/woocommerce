import React from 'react';
import { EcommerceCard, CardImg, CardTitle, CardText } from './style';

import Link from '../Link';

const Card = (props: any) => {
	const { cardPic, title, text } = props;
	return (
		<React.Fragment>
			<EcommerceCard>
				<CardImg src={cardPic} />
				<div>
					<CardTitle>{title}</CardTitle>
					<CardText>{text}</CardText>
					<Link blue />
				</div>
			</EcommerceCard>
		</React.Fragment>
	);
};

export default Card;
