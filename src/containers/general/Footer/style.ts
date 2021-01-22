import styled from 'styled-components';
import { color } from '../../../shared/styles';

export const FooterWrap = styled.footer`
	background-color: ${color.purple};
`;

export const WooFooter = styled.div`
	position: relative;

	&:after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: ${color.lightPurple};
		position: absolute;
		bottom: 0;
	}

	&:before {
		content: '';
		width: 89px;
		height: 89px;
		position: absolute;
		right: -44px;
		top: -78px;
		z-index: 10;
		border: 4px solid ${color.darkYellow};
		border-radius: 50%;
	}
`;

export const InfoFooterWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 45px 125px 135px;
`;

export const LogoWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const InfoFooter = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 34px 157px 64px 217px;
`;

export const List = styled.li`
	margin-bottom: 0;
`;

export const Copyright = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px 0 21px 0;
`;

export const SocialWrap = styled.div`
	display: flex;
`;

export const Automatic = styled.img`
	display: block;
	width: 183px;
	height: 14px;
`;
