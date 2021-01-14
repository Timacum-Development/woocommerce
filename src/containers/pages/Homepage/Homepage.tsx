import React from 'react';
import {
	Hero,
	WooImg,
	HeroIntro,
	HeroText,
	CtaWrap,
	LinkSpan,
	LinkWrap
} from './style';

// Assets
import WooLetter from '../../../assets/w.png';

import CallToAction from '../../../shared/components/CTA';
import Link from '../../../shared/components/Link';

const Homepage = () => {
	return (
		<Hero>
			<HeroIntro>
				<h1>Building exactly the eCommerce website you want.</h1>
				<HeroText>
					WooCommerce is a customizable, open-source eCommerce platform built on
					WordPress. Get started quickly and make your way.
				</HeroText>
				<CtaWrap>
					<CallToAction action text='Start a New Store' />
					<LinkWrap>
						<LinkSpan>or</LinkSpan>
						<Link blue text='Customize & Extend ›' />
					</LinkWrap>
				</CtaWrap>
			</HeroIntro>
			<WooImg src={WooLetter} />
		</Hero>
	);
};

export default Homepage;
