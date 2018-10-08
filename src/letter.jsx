import React from 'react'


export default class Letter extends React.Component {
	render() {

		let letterStyle = {
			backgroundColor: this.props.bgColor,
			padding: 10,
			margin: 10,
		  width: 40,
		  height: 40,
		  fontSize: "32",
		  textAlign: "center",
		  fontFamily: "Roboto",
		  color: "white",
		  display: "inline-block"
		}

		return (
			<div style={letterStyle}>
				{this.props.children}
			</div>
		);
	}
}	