import React from 'react';
import {
	Hero,
	HeroIntro,
	HeroText,
	CtaWrap,
	LinkSpan,
	LinkWrap,
	HeroWrap,
	OfferWrap,
	OfferImg,
	Offer,
	OfferText,
	Shoes,
	Originals,
	NumbersWrap,
	Cart,
	PriceWrap,
	Price,
	PriceCrossed,
	AddToCart,
	CartNumber
} from './style';

// Assets
import Sneakers from '../../../assets/sneakers.png';

import CallToAction from '../../../shared/components/CTA';
import Link from '../../../shared/components/Link';
import Number from '../../../shared/components/Number';

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
			<HeroWrap>
				<OfferWrap>
					<OfferImg src={Sneakers} />
					<Offer>
						<OfferText>
							<Shoes>Shoes</Shoes>
							<Originals>Adidas Originals</Originals>
						</OfferText>
						<h4 className='adidas'>Adidas Originals OG Sneakers</h4>
						<NumbersWrap>
							<Number text='7' />
							<Number text='7.5' />
							<Number text='8' />
							<Number text='8.5' />
							<Number text='9' />
						</NumbersWrap>
						<Cart>
							<PriceWrap>
								<Price>$344</Price>
								<PriceCrossed>$560</PriceCrossed>
							</PriceWrap>
							<AddToCart>
								<CartNumber>1</CartNumber>
							</AddToCart>
						</Cart>
						<CallToAction
							action
							text='Add to cart'
							style={{
								borderRadius: '0px',
								width: '268px',
								fontFamily: 'Varela Round, sans-serif'
							}}
						/>
					</Offer>
				</OfferWrap>
			</HeroWrap>
		</Hero>
	);
};

export default Homepage;
