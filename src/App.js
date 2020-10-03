import React, { Component } from 'react';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js'; 
import CatComponent from './CatComponent.js'; 
import MouseComponent from './MouseComponent.js'; 

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent/>
			</div>
		);
	}
}

export default App;
