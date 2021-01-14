import styled, { keyframes } from 'styled-components';
import { color } from '../../../shared/styles';

export const HeaderAnimation = keyframes`
	0% {
		transform: translateX(-50%);
		opacity: 0;
	}

	50% {
		opacity: 0.3;
	}

	100% {
		transform: translateX(0);
		opacity: 1;
	}

`;

export const HeaderWrap = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 40px 66px;
	position: absolute;
	z-index: 2;
	animation: ${HeaderAnimation} 1s ease-in forwards;
`;

export const LogoNavWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const LogIn = styled.div`
	display: flex;
	align-items: center;
`;

export const Search = styled.img`
	display: block;
`;
