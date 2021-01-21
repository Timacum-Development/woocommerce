import styled from 'styled-components';
import { color } from '../../styles';

export const FooterInfo = styled.div`
	display: flex;
	align-items: center;
	width: 33%;
	max-width: 342px;
`;

export const InfoIcon = styled.img`
	display: block;
	margin-right: 15px;
`;

export const InfoSpan = styled.span`
	color: ${color.white};
	font-weight: 700;
	line-height: 53px;
	font-size: 1.25rem;
`;

export const InfoText = styled.p`
	color: ${color.white};
	line-height: 53px;
	font-size: 1.25rem;
`;
