import React	from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			// same as saying <tt> this.state {count: props.initialCount}</tt>
			// and adding a <tt><Counter.defaultProps{ initialCount: 0} /tt>
			// at the end
		}
	}

	render() {
		
		return (
			<button
				onClick={() => {
					// the arrow fnct binds `this` to its lexical scope calling
					// setState forces a reload of my component 
					this.setState({ count: this.state.count + 1 });
				}}
			>
				Count: {this.state.count}
			</button>
		);
	}
}