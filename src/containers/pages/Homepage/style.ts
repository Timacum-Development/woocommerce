import styled from 'styled-components';
import { color } from '../../../shared/styles';

// Assets
import Woo from '../../../assets/w.png';

export const Hero = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: linear-gradient(${color.lightBlue}, transparent);
	position: relative;
	overflow: hidden;
	z-index: 1;

	&:before {
		content: '';
		width: 1767px;
		height: 1666px;
		background: url(${Woo}) no-repeat right;
		position: absolute;
		left: 946px;
		top: -579px;
		z-index: -1;
	}
`;

export const HeroIntro = styled.div`
	max-width: 818px;
	position: relative;
	left: 220px;
`;

export const HeroText = styled.p`
	margin-bottom: 31px;
`;

export const CtaWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const LinkWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const LinkSpan = styled.span`
	font-size: 1.125rem;
	line-height: 25px;
	color: ${color.lightGrey};
	margin: 0 12px;
`;

export const HeroWrap = styled.div`
	position: relative;
	left: 365px;
`;

export const OfferWrap = styled.div`
	display: flex;
`;

export const OfferImg = styled.img`
	display: block;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
`;

export const Offer = styled.div`
	background-color: ${color.white};
	height: 422px;
	padding: 45px 45px 17px 45px;
`;

export const OfferText = styled.div`
	display: flex;
	margin-bottom: 23px;
`;

export const Shoes = styled.h5`
	font: normal 700 12px 'Circula', sans-serif;
	color: ${color.darkNavy};
	letter-spacing: 2px;
	text-transform: uppercase;
	margin-right: 8px;
`;

export const Originals = styled.h6`
	font: normal 400 12px 'Circula', sans-serif;
	color: ${color.grey};
`;

export const NumbersWrap = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 193px;
	margin-bottom: 25px;
`;

export const Cart = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 220px;
	margin-bottom: 27px;
`;

export const PriceWrap = styled.div`
	position: relative;
`;

export const Price = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${color.purple};
	position: relative;
`;

export const PriceCrossed = styled.p`
	font-size: 0.875rem;
	font-weight: 500;
	color: ${color.grey};
	text-decoration: line-through;
	position: absolute;
	right: 0;
`;

export const AddToCart = styled.div`
	width: 125px;
	padding: 12px;
	text-align: center;
	background-color: ${color.darkWhite};
	border-radius: 5px;
	position: relative;
	cursor: pointer;

	&:before {
		content: '';
		width: 7px;
		height: 2px;
		position: absolute;
		background-color: ${color.black};
		color: ${color.lightBlack};
		top: 50%;
		transform: translateY(-50);
		left: 13px;
	}

	&:after {
		content: '';
		width: 8px;
		height: 2px;
		position: absolute;
		right: 13px;
		background-color: ${color.black};
		top: 50%;
		transform: translateY(-50);
	}
`;

export const CartNumber = styled.a`
	font-size: 12px;
	color: ${color.lightBlack};

	&:before {
		content: '';
		width: 2px;
		height: 8px;
		position: absolute;
		background-color: ${color.black};
		color: ${color.lightBlack};
		top: 44%;
		right: 16px;
	}
`;

export const CardHero = styled.div`
	width: 406px;
	background-color: ${color.white};
	border-radius: 20px;
	padding: 32px 16px 32px 22px;
	position: absolute;
	bottom: -125px;
	left: 100px;
`;

export const SaleImg = styled.img`
	display: block;
	border-radius: 20px;
	position: absolute;
	top: -100px;
	left: -80px;
`;
