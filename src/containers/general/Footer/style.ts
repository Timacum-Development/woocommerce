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
	padding: 34px 157px 0 217px;
`;

export const List = styled.li`
	margin-bottom: 10px;
`;
