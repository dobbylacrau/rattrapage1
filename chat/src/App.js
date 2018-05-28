import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from "./components/Message";
import FormMessenger from "./components/FormMessenger";
import Channel from "./components/Channel";

import axios from "axios";

/*
	1 # - npm install --save axios

*/

class App extends Component {

	state = {
		nom: "",
		prenom:"",
		email:"",
		username_valid: false,
		isadmin: false,
		message: "",
		error: false,
		messages: [],
		channel: 1,
	}


	_onChange_prenom(e) {
		this.setState({
			prenom: e.target.value
		});
	}
	
	_onChange_nom(e) {
		this.setState({
			nom: e.target.value
		});
	}

	_onChange_email(e) {
		this.setState({
			email: e.target.value
		});
	}


	_onChange_channel(e) {
		this.setState({
			channel: e.target.value
		});
	}

	_onClick_valid_username() {
		this.setState({
			username_valid: true
		});
	}

	_onClick_valid_admin() {
		this.setState({
			isadmin: true
		});
	}


	_onChange_message(e) {
		console.log(e.target.value);
		this.setState({
			message: e.target.value
		});
	}

	_onClick_valid_message() {
		this._post_channel_message(this.state.channel)
			.then(() => {
				this.setState({
					message: "",
				});
			})
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to the Dobby Messenger</h1>
					<h2 className="App-title">Your eyes will be hurted</h2>
				</header>
				<div
					style={{
						position: "absolute",
						top: 150,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>
					<FormMessenger
						nom={this.state.nom} // ça recupere le nom
						prenom={this.state.prenom}
						email={this.state.email}
						message={this.state.message}
						channel={this.state.channel}
						usernameValid={this.state.username_valid}
						isadmin={this.state.isadmin}
						onChangeUserName={this._onChange_nom.bind(this)}
						onChangeprenom={this._onChange_prenom.bind(this)}
						onChangeemail={this._onChange_email.bind(this)}
						onClickValidUserName={this._onClick_valid_username.bind(this)}
						onClickAdmin={this._onClick_valid_admin.bind(this)}
						onChangeMessage={this._onChange_message.bind(this)}
						onClickValidMessage={this._onClick_valid_message.bind(this)}
						onChangeChannel={this._onChange_channel.bind(this)}
					/>
					<ul>
						{
							this.state.username_valid ?
								this.state.messages.map((item, index) => {

									return (
										<Message
											key={item.id}
											nom={item.nom}
											message={item.message}
										/>
									);

								})
							:
								null
						}
					</ul>
				</div>
			</div>
		);
	}

}

export default App;
