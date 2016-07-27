import React from 'react'


export default class Letter extends React.Component {
	render() {

		let letterStyle = {
			backgroundColor: this.props.bgColor,
		  width: "50",
		  height: "50",
		  fontSize: "36",
		  textAlign: "center",
		  fontFamily: "Roboto",
		  color: "white",
		  marginTop: "20"
		}

		return (
			<div className="main">
				<div style={letterStyle}>{this.props.children}</div>
			</div>
		);
	}
}	