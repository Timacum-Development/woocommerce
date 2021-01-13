import React from 'react';
import { RenCta, Action } from './style';

const CallToAction = (props: any) => {
	const { started, text, style } = props;
	return (
		<React.Fragment>
			{started ? (
				<RenCta className='cta' style={style}>
					{text}
				</RenCta>
			) : (
				<Action className='cta' style={style}>
					{text}
				</Action>
			)}
		</React.Fragment>
	);
};

export default CallToAction;
