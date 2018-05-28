
import React from 'react';
import UsernameDisplay from "./UsernameDisplay";

const getRandomColor = () => {
	return Math.floor(Math.random() * 255) + 1
}

const Message = (props) => {
	return (
		<div
			style={{
				marginLeft: 33,
				height: 500,
				width: 550,
				padding: 15,
				backgroundColor: `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()} )`
			}}
		>

			<h1>Partie Message</h1>

			Ecrivez votre message
						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidMessage();
								}
							}}
							type="text"
							value={props.message}
							onChange={props.onChangeMessage}
						/>
						<button
							onClick={props.onClickValidMessage}
						>
							Envoyer
						</button>
		</div>
	);
}

export default Message;
