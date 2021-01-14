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
	CartNumber,
	CardHero,
	SaleImg
} from './style';

// Assets
import Sneakers from '../../../assets/sneakers.png';
import Payment1 from '../../../assets/stripe-logo.png';
import Payment2 from '../../../assets/paypal-logo.png';
import Payment3 from '../../../assets/vector.png';
import SaleGirls from '../../../assets/sale-girls.png';
import Dots1 from '../../../assets/blue-horizontal-hero.png';
import Dots2 from '../../../assets/blue-vertical-hero.png';
import Dots3 from '../../../assets/purple-vertical-hero.png';

import CallToAction from '../../../shared/components/CTA';
import Link from '../../../shared/components/Link';
import Number from '../../../shared/components/Number';
import PaymentCard from '../../../shared/components/HeroCard';
import DotGroup from '../../../shared/components/DotsImg';

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
				<DotGroup dotsGroup={Dots1} style={{ left: '-120px' }} />
				<DotGroup dotsGroup={Dots2} style={{ left: '300px', top: '-150px' }} />
				<DotGroup dotsGroup={Dots3} style={{ right: '80px', top: '40%' }} />
				<SaleImg src={SaleGirls} />
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
				<CardHero>
					<PaymentCard logoPayment={Payment1} text='Stripe gateway' />
					<PaymentCard logoPayment={Payment2} text='Paypal payments' />
					<PaymentCard logoPayment={Payment3} text='Bank Transfers' />
				</CardHero>
			</HeroWrap>
		</Hero>
	);
};

export default Homepage;
