import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Counter from './counter';
import Letter from './letter';
import iPhone from './iphone';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
			// [TODO]: Move counter state here and pass it as props
		// }
	}


	render() {
		return (
			<div>
				<div>
					<Counter />
				</div>
				<div>
					<Letter bgColor= "hsla(0,100%,50%,1)">#</Letter>
					<Letter bgColor= "hsla(60,100%,50%,0.3)">F</Letter>
					<Letter bgColor= "hsla(180,100%,50%,0.5)">O</Letter>
					<Letter bgColor= "hsla(180,100%,50%,1)">M</Letter>
					<Letter bgColor= "hsla(300,100%,50%,1)">O</Letter>
				</div>
				<div>
					<iPhone />
				</div>
			</div>
		);
	}
}