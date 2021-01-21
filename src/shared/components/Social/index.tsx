import React from 'react';
import { SocialIcon } from './style';

const SocialNet = (props: any) => {
	const { network } = props;
	return <SocialIcon src={network} />;
};

export default SocialNet;
