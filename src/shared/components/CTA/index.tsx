import React from 'react';
import { RenCta, Action, GreenCta, TransparentCta } from './style';

const CallToAction = (props: any) => {
	const { started, text, style, action, green } = props;
	return (
		<React.Fragment>
			{started ? (
				<RenCta className='cta' style={style}>
					{text}
				</RenCta>
			) : !started && action ? (
				<Action className='cta' style={style}>
					{text}
				</Action>
			) : !action && green ? (
				<GreenCta className='cta' style={style}>
					{text}
				</GreenCta>
			) : (
				<TransparentCta className='cta' style={style}>
					{text}
				</TransparentCta>
			)}
		</React.Fragment>
	);
};

export default CallToAction;
