import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Counter from './Counter';


export default class App extends React.Component {
	render() {
		return (
			
			<div>
				<Counter />
			</div>
		);
	}
}