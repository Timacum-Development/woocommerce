import styled from 'styled-components';
import { color } from '../../styles';

export const EcommerceCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 33%;
	max-width: 430px;
`;

export const CardImg = styled.img`
	display: block;
	border-radius: 20px;
	box-shadow: 0 18px 53px 0 rgba(215, 228, 249, 0.5);
	margin-bottom: 40px;
`;

export const CardTitle = styled.h3`
	margin-bottom: 15px;
`;

export const CardText = styled.p`
	line-height: 30px;
	margin-bottom: 25px;
	text-align: left;
`;
