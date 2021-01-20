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
	Documentation,
	InfoWrap,
	WooImg,
	CircleLarger,
	CircleSmaller,
	Agency,
	OneCardWrap,
	OneCard,
	CardParagraph,
	Quote,
	ArrowSlider,
	ArrowLeft,
	ArrowRight
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
import Doc1 from '../../../assets/girl-mac.png';
import Doc2 from '../../../assets/brainstorming.png';
import Dots4 from '../../../assets/green-vertical-develop.png';
import Dots5 from '../../../assets/green-horizontal-develop.png';
import Woo from '../../../assets/woo.png';
import QuoteImg from '../../../assets/quote.png';
import Dots6 from '../../../assets/green-agencies-owners.png';
import Dots7 from '../../../assets/red-agencies-owners.png';
import People1 from '../../../assets/owner1.png';
import People2 from '../../../assets/owner2.png';
import People3 from '../../../assets/owner3.png';
import People4 from '../../../assets/owner4.png';
import People5 from '../../../assets/owner5.png';
import People6 from '../../../assets/owner6.png';

// Components
import CallToAction from '../../../shared/components/CTA';
import Link from '../../../shared/components/Link';
import Number from '../../../shared/components/Number';
import PaymentCard from '../../../shared/components/HeroCard';
import DotGroup from '../../../shared/components/DotsImg';
import Card from '../../../shared/components/Card';
import CardImg from '../../../shared/components/CardImg';
import InfoCard from '../../../shared/components/InfoCard';
import People from '../../../shared/components/AgencyPeople';

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
			<Documentation>
				<WooImg src={Woo} />
				<InfoWrap className='container'>
					<CircleLarger />
					<DotGroup dotsGroup={Dots4} style={{ left: '120px', top: '35%' }} />
					<InfoCard
						style={{ left: '-100px' }}
						infoPic={Doc1}
						infoTitle='Develop 
						Without Limits'
						infoText='WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.'
					/>
					<InfoCard
						style={{
							flexDirection: 'row-reverse',
							right: '-100px',
							alignItems: 'flex-start'
						}}
						infoPic={Doc2}
						infoTitle='Know our 
						Global Community'
						infoText='WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!'
					/>
					<DotGroup
						dotsGroup={Dots5}
						style={{ right: '30px', bottom: '150px' }}
					/>
					<CircleSmaller />
				</InfoWrap>
			</Documentation>
			<Agency>
				<h2 className='agencies'>Trusted by Agencies & Store Owners</h2>
				<People peopleUrl={People6} style={{ left: '391px', top: '70px' }} />
				<People peopleUrl={People5} style={{ left: '102px' }} />
				<People
					peopleUrl={People4}
					style={{ left: '256px', bottom: '-100px' }}
				/>
				<OneCardWrap>
					<DotGroup
						dotsGroup={Dots6}
						style={{ left: '10px', bottom: '-130px', zIndex: '-30' }}
					/>
					<OneCard>
						<Quote src={QuoteImg} />
						<CardParagraph>
							No other eCommerce platform allows people to start for free and
							grow their store as their business grows. More importantly,
							WooCommerce doesn't charge you a portion of your profits as your
							business grows!
						</CardParagraph>
					</OneCard>
					<ArrowSlider>
						<ArrowLeft />
						<ArrowRight />
					</ArrowSlider>
					<DotGroup dotsGroup={Dots7} style={{ right: '0px', top: '26px' }} />
				</OneCardWrap>
				<People peopleUrl={People3} style={{ right: '448px', top: '50px' }} />
				<People peopleUrl={People2} style={{ right: '223px', top: '50%' }} />
				<People
					peopleUrl={People1}
					style={{ right: '396px', bottom: '-150px' }}
				/>
			</Agency>
		</React.Fragment>
	);
};

export default Homepage;
