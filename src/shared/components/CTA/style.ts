import styled from 'styled-components';
import { color } from '../../styles';

export const RenCta = styled.a`
	padding: 13px 14px;
	background-color: ${color.purple};
	border-radius: 5px;
	border: 1px solid transparent;
	transition: 0.25s ease-in-out;

	&:hover {
		background-color: ${color.white};
		color: ${color.purple};
		border: 1px solid ${color.purple};
		border-radius: 60px;
	}
`;

export const Action = styled.a`
	padding: 26px 63px;
	background-color: ${color.purple};
	border-radius: 60px;
	border: 1px solid transparent;
	transition: 0.25s ease-in-out;

	&:hover {
		background-color: ${color.white};
		color: ${color.purple};
		border: 1px solid ${color.purple};
	}
`;

export const GreenCta = styled.a`
	padding: 21px 26px;
	background-color: ${color.green};
	border-radius: 60px;
	transition: 0.25s ease-in-out;

	&:hover {
		background-color: ${color.white};
		color: ${color.green};
	}
`;

export const TransparentCta = styled.a`
	padding: 26px 46px;
	border: 2px solid ${color.white};
	border-radius: 60px;
	text-transform: uppercase !important;
	transition: 0.25s ease-in-out;

	&:hover {
		background-color: ${color.white};
		color: ${color.darkPurple};
		border-radius: 0;
	}
`;
