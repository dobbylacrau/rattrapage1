import React from 'react';
import UsernameDisplay from "./UsernameDisplay";

const getRandomColor = () => {
	return Math.floor(Math.random() * 255) + 1
}

const Channel = (props) => {
	return (
		<div
			style={{
				marginLeft: 3,
				height: 500,
				width: 550,
				padding: 15,
				backgroundColor: `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()} )`
			}}
		>
			Channel :
							<input
								type="number"
								name="quantity"
								min="-10"
								max="10"
								value={ !props.channel ? props.channel : 0 }
								onChange={props.onChangeChannel}
							/>

		</div>
	);
}
export default Channel;