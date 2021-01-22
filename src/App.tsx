import React from 'react';
import './fonts/stylesheet.css';

// General Styles
import GeneralStyles from './shared/GeneralsStyles';
import Layout from './containers/general/Layout';

function App() {
	return (
		<React.Fragment>
			<GeneralStyles />
			<Layout />
		</React.Fragment>
	);
}

export default App;
