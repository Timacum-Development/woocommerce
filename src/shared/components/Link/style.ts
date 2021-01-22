import styled from 'styled-components';
import { color } from '../../styles';

export const HeaderLink = styled.a`
	font-weight: 500;
	color: ${color.darkNavy};
	position: relative;

	&:after {
		content: '';
		width: 0;
		height: 1px;
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: ${color.black};
		visibility: hidden;
		opacity: 0;
		transition: 0.25s ease-in-out;
	}

	&:hover {
		&:after {
			visibility: visible;
			opacity: 1;
			width: 100%;
			left: 0;
		}
	}
`;

export const BlueLink = styled.a`
	color: ${color.blue};
	font-weight: 700;
	transition: 0.25s ease-in-out;

	&:hover {
		color: ${color.black};
	}
`;

export const RegularLink = styled.a`
	color: ${color.white};
	font-size: 0.75rem;
	text-transform: capitalize;
	transition: 0.25s ease-in-out;
	line-height: 22px;

	&:hover {
		color: ${color.darkNavy};
	}
`;
