import React from 'react';


export default class iPhone extends React.Component {

	render() {

		let imageUrl = "../assets/images/iphone6silver.png";
		let iphoneStyle = {
					width: "200",
					height: "400",
					backgroundColor: "#111"
				}

		return (
			<img
			style={iphoneStyle}
			src={imageUrl} alt="iphone6image"/>
		);
	}
}