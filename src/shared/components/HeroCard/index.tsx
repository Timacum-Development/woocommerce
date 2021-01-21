import React from 'react';
import {
	Payment,
	LogoPayment,
	PaymentText,
	PayBtn,
	LogoTextWrap
} from './style';

const PaymentCard = (props: any) => {
	const { logoPayment, text, payStyle } = props;
	return (
		<Payment>
			<LogoTextWrap>
				<a href='/'>
					<LogoPayment src={logoPayment} style={payStyle} />
				</a>
				<PaymentText>{text}</PaymentText>
			</LogoTextWrap>
			<PayBtn></PayBtn>
		</Payment>
	);
};

export default PaymentCard;
