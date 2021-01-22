import React from 'react';
import {
	FooterWrap,
	InfoFooterWrap,
	WooFooter,
	LogoWrap,
	InfoFooter,
	List,
	Copyright,
	SocialWrap,
	Automatic,
} from './style';

// Assets
import Icon1 from '../../../assets/guarantee.png';
import Icon2 from '../../../assets/support.png';
import Icon3 from '../../../assets/safe.png';
import Icon4 from '../../../assets/twitter.png';
import Icon5 from '../../../assets/fb.png';
import Icon6 from '../../../assets/rss.png';
import Icon7 from '../../../assets/instagram.png';
import LogoAuto from '../../../assets/automatic.png';

// Components
import FooterCard from '../../../shared/components/FooterInfo';
import Logo from '../../../shared/components/Logo';
import Link from '../../../shared/components/Link';
import SocialNet from '../../../shared/components/Social';

const Footer = () => {
	return (
		<React.Fragment>
			<FooterWrap>
				<WooFooter className='container2'>
					<InfoFooterWrap>
						<FooterCard iconInfo={Icon1} text='30 day money back guarantee' />
						<FooterCard
							iconInfo={Icon2}
							text='Support teams across the world'
						/>
						<FooterCard iconInfo={Icon3} text='Safe & Secure online payment' />
					</InfoFooterWrap>
					<LogoWrap>
						<Logo />
					</LogoWrap>
				</WooFooter>
				<InfoFooter className='container2'>
					<div>
						<h6>Who we Are</h6>
						<ul>
							<List>
								<Link text='About' />
							</List>
							<List>
								<Link text='Team' />
							</List>
							<List>
								<Link text='Work with us' />
							</List>
						</ul>
					</div>
					<div>
						<h6>Woocommerce</h6>
						<ul>
							<List>
								<Link text='Features' />
							</List>
							<List>
								<Link text='Payments' />
							</List>
							<List>
								<Link text='Marketing' />
							</List>
							<List>
								<Link text='Shipping' />
							</List>
							<List>
								<Link text='Extension Store' />
							</List>
							<List>
								<Link text='eCommerce blog' />
							</List>
							<List>
								<Link text='Development blog' />
							</List>
							<List>
								<Link text='Ideas board' />
							</List>
							<List>
								<Link text='Mobile app' />
							</List>
							<List>
								<Link text='Community' />
							</List>
							<List>
								<Link text='Style guide' />
							</List>
							<List>
								<Link text='Email newsletter' />
							</List>
						</ul>
					</div>
					<div>
						<h6>Other products</h6>
						<ul>
							<List>
								<Link text='Storefront' />
							</List>
							<List>
								<Link text='WooSlider' />
							</List>
							<List>
								<Link text='Sensei' />
							</List>
							<List>
								<Link text='Sensei extensions' />
							</List>
						</ul>
					</div>
					<div>
						<h6>Support</h6>
						<ul>
							<List>
								<Link text='Documentation' />
							</List>
							<List>
								<Link text='Customizations' />
							</List>
							<List>
								<Link text='Support policy' />
							</List>
							<List>
								<Link text='Contact' />
							</List>
							<List>
								<Link text='COVID-19 resources' />
							</List>
							<List>
								<Link text='Privacy notice for' />
							</List>
							<List>
								<Link text='California users' />
							</List>
						</ul>
					</div>
					<div>
						<h6>We recommend</h6>
						<ul>
							<List>
								<Link text='WooExperts' />
							</List>
							<List>
								<Link text='Hosting Solutions' />
							</List>
							<List>
								<Link text='Pre-sales FAQ' />
							</List>
							<List>
								<Link text='Success stories' />
							</List>
							<List>
								<Link text='Design Feedback Group' />
							</List>
						</ul>
					</div>
				</InfoFooter>
			</FooterWrap>
			<Copyright className='container2'>
				<SocialWrap>
					<a href='/' className='a-icon'>
						<SocialNet network={Icon4} />
					</a>
					<a href='/' className='a-icon'>
						<SocialNet network={Icon5} />
					</a>
					<a href='/' className='a-icon'>
						<SocialNet network={Icon6} />
					</a>
					<a href='/'>
						<SocialNet network={Icon7} />
					</a>
				</SocialWrap>
				<small>
					Copyright woocommerce 2020 - terms & conditions privacy policy
				</small>
				<a href='/'>
					<Automatic src={LogoAuto} />
				</a>
			</Copyright>
		</React.Fragment>
	);
};

export default Footer;
