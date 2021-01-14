import styled from 'styled-components';
import { color } from '../../../shared/styles';

// Assets

export const Hero = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: linear-gradient(${color.lightBlue}, transparent);
	position: relative;
	overflow: hidden;
	z-index: 1;
`;

export const WooImg = styled.img`
	display: block;
	position: absolute;
	left: 946px;
	top: -579px;
	z-index: -1;
`;

export const HeroIntro = styled.div`
	max-width: 818px;
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
