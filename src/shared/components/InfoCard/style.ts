import styled from 'styled-components';
import { color } from '../../styles';

export const CardWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 980px;
	position: relative;
	margin-bottom: 55px;

	/* &:nth-of-type(2) {
		margin-bottom: 0;
	} */
`;

export const InfoImg = styled.img`
	border-radius: 20px;
	box-shadow: -25px 20px 44px 0 rgba(84, 48, 209, 0.4);
`;

export const InfoTextWrap = styled.div`
	text-align: left;
	padding: 13px 70px;
`;
