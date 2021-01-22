import styled, { keyframes } from 'styled-components';

export const SocialFooter = keyframes`
	0% {
		transform: scale(1);
	}

	5% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1.1);
	}
`;

export const SocialIcon = styled.img`
	display: block;

	&:hover {
		animation: ${SocialFooter} 0.25s ease-in-out forwards;
	}
`;
