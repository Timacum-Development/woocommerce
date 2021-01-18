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
	SaleImg,
	CartIcon,
	Icon,
	SecurityIcon,
	Ecommerce,
	EcommerceWrap,
	Documentation
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
import WhiteCart from '../../../assets/cart.png';
import SecurityCheck from '../../../assets/safe-second.png';
import Card1 from '../../../assets/card1.png';
import Card2 from '../../../assets/card2.png';
import Card3 from '../../../assets/card3.png';
import Small1 from '../../../assets/apple.png';
import Small2 from '../../../assets/payment.png';
import Small3 from '../../../assets/square.png';
import Small4 from '../../../assets/chimpmail.png';
import Small5 from '../../../assets/facebook.png';
import Small6 from '../../../assets/jetpack.png';
import Small7 from '../../../assets/google-ads.png';
import Small8 from '../../../assets/card-small1.png';
import Small9 from '../../../assets/card-small2.png';
import Small10 from '../../../assets/card-small3.png';

// Components
import CallToAction from '../../../shared/components/CTA';
import Link from '../../../shared/components/Link';
import Number from '../../../shared/components/Number';
import PaymentCard from '../../../shared/components/HeroCard';
import DotGroup from '../../../shared/components/DotsImg';
import Card from '../../../shared/components/Card';
import CardImg from '../../../shared/components/CardImg';

const Homepage = () => {
	return (
		<React.Fragment>
			<Hero>
				<HeroIntro>
					<h1>Building exactly the eCommerce website you want.</h1>
					<HeroText>
						WooCommerce is a customizable, open-source eCommerce platform built
						on WordPress. Get started quickly and make your way.
					</HeroText>
					<CtaWrap>
						<CallToAction action text='Start a New Store' />
						<LinkWrap>
							<LinkSpan>or</LinkSpan>
							<Link blue textBlue='Customize & Extend ›' />
						</LinkWrap>
					</CtaWrap>
				</HeroIntro>
				<HeroWrap>
					<DotGroup dotsGroup={Dots1} style={{ left: '-120px' }} />
					<DotGroup
						dotsGroup={Dots2}
						style={{ left: '300px', top: '-150px' }}
					/>
					<DotGroup dotsGroup={Dots3} style={{ right: '80px', top: '40%' }} />
					<SaleImg src={SaleGirls} />
					<OfferWrap>
						<OfferImg src={Sneakers} />
						<Offer>
							<CallToAction
								green
								text='Sale'
								style={{
									position: 'absolute',
									top: '-30px',
									left: '32%',
									textTransform: 'uppercase',
									letterSpacing: '5px',
									padding: '17px 43px',
									fontWeight: '700'
								}}
							/>
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
					<CartIcon href='/'>
						<Icon src={WhiteCart} />
					</CartIcon>
					<SecurityIcon href='/'>
						<Icon src={SecurityCheck} />
					</SecurityIcon>
				</HeroWrap>
			</Hero>
			<Ecommerce>
				<h2>Your eCommerce made simple</h2>
				<EcommerceWrap>
					<CardImg smallPic={Small1} imgStyle={{ left: '-80px' }} />
					<CardImg
						smallPic={Small2}
						imgStyle={{ top: '50px', left: '-106px' }}
					/>
					<Card
						title='All You Need to Start'
						text='Add WooCommerce plugin to any WordPress site and set up a new store in minutes.'
						cardPic={Card1}
						blueText='Ecommerce for Wordpress ›'
					/>
					<CardImg smallPic={Small3} imgStyle={{ left: '38%', top: '50px' }} />
					<CardImg smallPic={Small4} imgStyle={{ left: '55%', top: '95px' }} />
					<CardImg smallPic={Small5} imgStyle={{ left: '38%', top: '180px' }} />
					<CardImg smallPic={Small6} imgStyle={{ left: '50%', top: '210px' }} />
					<CardImg smallPic={Small7} imgStyle={{ left: '45%', top: '325px' }} />
					<Card
						title='Customize and Extend'
						text='From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.'
						cardPic={Card2}
						blueText='Browse Extensions ›'
						style={{ top: '75px' }}
						number='50%'
					/>
					<CardImg
						smallPic={Small8}
						imgStyle={{ right: '-60px', top: '55%' }}
					/>
					<CardImg
						smallPic={Small9}
						imgStyle={{ right: '260px', top: '100px' }}
					/>
					<CardImg
						smallPic={Small10}
						imgStyle={{ right: '50px', top: '20px' }}
					/>
					<Card
						title='Active Community'
						text='WooCommerce is one of the fastest-growing eCommerce communities. '
						cardPic={Card3}
						blueText='Check our Forums ›'
						style={{ top: '150px' }}
					/>
				</EcommerceWrap>
			</Ecommerce>
			<Documentation></Documentation>
		</React.Fragment>
	);
};

export default Homepage;
