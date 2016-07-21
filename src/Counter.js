import React	from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render() {
		let count = this.state.count ? this.state.count : 0;

		return(
			<button
				onClick={() => {
					this.setState({ count: this.state.count + 1 });
					// this.setState({count: count});
				}}
			>
				Count: {this.state.count}
			</button>
		);
	}
}