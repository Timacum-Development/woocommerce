import styled from 'styled-components';
import { color } from '../../../shared/styles';

// Assets

export const Hero = styled.section`
	width: 100%;
	height: 100vh;
	background: linear-gradient(${color.lightBlue}, transparent);
	position: relative;
	overflow: hidden;
`;

export const WooImg = styled.img`
	display: block;
	position: absolute;
	left: 946px;
	top: -579px;
`;
