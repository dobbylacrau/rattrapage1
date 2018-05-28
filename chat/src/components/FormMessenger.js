
import React from 'react';

import UsernameDisplay from "./UsernameDisplay";
import Message from "./Message";
import Channel from "./Channel";
import '../App.css';

const FormMessenger = (props) => {
	const styleChild = {
		position: "absolute",
		top: "50%",
		width: "50%",
		transform: "translateX(50%)"
	}
	return (
		<div class="App-form">
			{
				!props.usernameValid ?
					<div style={styleChild}>
						<UsernameDisplay nom={props.nom} tagline="Votre nom est"/>
						<UsernameDisplay nom={props.prenom} tagline="Votre prénom est"/>
						<UsernameDisplay nom={props.email} tagline="Votre email est"/>
						

						Ecrivez votre nom

						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidUserName();
								}
							}}
							type="text"
							value={props.nom}
							onChange={props.onChangeUserName}
						/>

						<br/>

						
						Entrez votre prénom

						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onChangeprenom();
								}
							}}
							type="text"
							value={props.prenom}
							onChange={props.onChangeprenom}
						/>

						<br/>

						Entrez votre email
						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidUserName();
								}
							}}
							type="text"
							value={props.email}
							onChange={props.onChangeemail}
						/>

						<br/>

						Administrateur
						<input
							
							type="checkbox"
							onChange={props.onClickAdmin}
							
						/>

						<br/>

						<button class="button" onClick={props.onClickValidUserName}>
							Valider
						</button>

					</div>
				:
					<div style={styleChild}>
						
						
						<UsernameDisplay nom={props.nom + ' ' + props.prenom} tagline="Bienvenue à toi "/>

						{
							props.isadmin ?	
								<span>
									<span style={
										 {
										 	margin: 150,
										 	height: 200
										 }
									 }>
										<Channel/>
									</span>
									<span>
										<Message/>
									</span>
								</span>
							:
								<div>
									<Message/>
								</div>
								
						}	

						

						
					</div>
			}
		</div>
	);
}

export default FormMessenger;
