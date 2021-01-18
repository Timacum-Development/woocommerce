import { createGlobalStyle } from 'styled-components';
import { color } from '../shared/styles';

export default createGlobalStyle`
	@font-face {
    font-family: 'Circula', sans-serif;
    src: url('Circula-Medium.woff2') format('woff2'),
        url('Circula-Medium.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
	}

	@font-face {
    font-family: 'Circula', sans-serif;
    src: url('Circula-Medium.woff2') format('woff2'),
        url('Circula-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
	}

	@font-face {
    font-family: 'Circula', sans-serif;
    src: url('Circula-Medium.woff2') format('woff2'),
        url('Circula-Medium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
	}

	html, body, #root {
		height: 100%;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		font-size: 16px;
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
		
	}

	main {
		flex: 1 0 auto;
		width: 100%;
	}

	p {
		margin: 0;
	}


	.App {
		display: flex;
		flex-wrap: wrap;
	}

	.container-fluid {
		width: 100%;
	}

	.container {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}

	.container2 {
		max-width: 1680px;
		width: 100%;
		margin: 0 auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		text-align: left;
	}

	h1 {
		font-size: 5.3125rem;
		font-family: 'Circula';
		font-weight: 700;
		line-height: 95px;
		color: ${color.darkNavy};
		margin-bottom: 21px;
	}

	h2 {
		font-size: 3.4375rem;
		line-height: 70px;
		max-width: 500px;
		text-align: center;
		margin: 0 auto;
	}

	h3 {
		font-size: 2.25rem;
	}

	h4 {
		font-size: 1.875rem;
	}

	.adidas {
		max-width: 260px;
		font-family: 'Circula', sans-serif;
		font-weight: 400;
		color: ${color.lightBlack};
		line-height: 38px;
		margin-bottom: 39px;
		}

	h5 {
		font-size: 1.25rem;
	}

	h6 {
		font-size: 0.875rem;
	}

	p {
		font-size: 1.125rem;
		line-height: 25px;
		color: ${color.lightGrey};
		
	}

	a {
		display: inline-block;
		text-decoration: none;
		font-size: 1.125rem;
		cursor: pointer;
	}

	ul {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
	}

	li {
		list-style-type: none;
		margin-right: 38px;

		&:last-of-type {
			margin-right: 0;
		}
	}

	.cta {
		font-weight: 500;
		text-transform: capitalize;
		color: ${color.white};
		text-align: center;
	}
`;
