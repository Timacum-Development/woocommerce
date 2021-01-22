import styled from 'styled-components';
import { color } from '../../styles';

export const Payment = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${color.lightBlue};
	padding: 0 36px 0 20px;

	&:nth-child(3) {
		border-bottom: none;
	}
`;

export const LogoTextWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	padding: 11px 0;
`;

export const LogoPayment = styled.img`
	display: block;
`;

export const PaymentText = styled.p`
	font-size: 0.75rem;
	font-weight: 400;
	color: ${color.lightGrey};
`;

export const PayBtn = styled.a`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 47px;
	height: 23px;
	padding: 3px;
	background-color: ${color.green};
	border-radius: 15px;
	transition: all 0.25s ease-in-out;
	position: relative;

	&:before {
		content: '';
		width: 16px;
		height: 16px;
		background-color: ${color.white};
		border-radius: 50%;
		position: absolute;
	}

	&:hover {
		background-color: ${color.blueGreyish};
		justify-content: flex-start;

		&:before {
			background-color: ${color.purple};
		}
	}
`;
