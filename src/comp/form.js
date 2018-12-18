import React from "react";

import * as firebase from "firebase";

class UserPage extends React.Component {
	constructor() {
		super();
	}
}

class Form extends React.Component {
	constructor() {
		super();

		if (!firebase.apps.length) {
			firebase.initializeApp(
				{
					apiKey: "AIzaSyAKkeYEno7MYy9nhn4QjYQEVfxGIkp0FcA",
					authDomain: "cookbook-1a91d.firebaseapp.com",
					databaseURL: "https://cookbook-1a91d.firebaseio.com",
					projectId: "cookbook-1a91d",
					storageBucket: "cookbook-1a91d.appspot.com",
					messagingSenderId: "1083763890339"
				}
			);
		}

		firebase.auth().onAuthStateChanged(
			(
				user
			) => {
				this.setState(
					{
						"userEmail": user.email
					}
				);
			}
		);

		this.setEmail = this.setEmail.bind(
			this
		);
		this.setPass = this.setPass.bind(
			this
		);

		this.logIn = this.logIn.bind(
			this
		);
		this.register = this.register.bind(
			this
		);
		this.logOut = this.logOut.bind(
			this
		);
	}

	componentDidMount() {
		this.state = {
		};
	}

	setEmail(
		e
	) {
		this.setState(
			{
				"email": e.target.value
			}
		);
	}
	setPass(
		e
	) {
		this.setState(
			{
				"pass": e.target.value
			}
		);
	}

	logIn(
		e
	) {
		e.preventDefault();

		firebase.auth().signInWithEmailAndPassword(
			this.state.email,
			this.state.pass
		).catch(
			function(
				err
			) {
				alert(
					err.message
				);
			}
		)
	}

	logOut() {
		firebase.auth().signOut().then(
			function() {
			}, function(
				err
			) {
				alert(
					err.message
				);
			}
		);
	}

	register(
		e
	) {
		e.preventDefault();

		firebase.auth().createUserWithEmailAndPassword(
			this.state.email,
			this.state.pass
		).catch(
			function(
				err
			) {
				alert(
					err.message
				);
			}
		)
	}

	render() {
		return (
			<div
				id="auth"
			>
				<div
					id="head"
				>
					<h3>
						{
							this.state ? this.state.userEmail : null
						}
					</h3>
				</div>

			<div
				id="body"
			>
				<form
					onSubmit={
						(
							e
						) => this.logIn(
							e
						)
					}
				>
				<h3>Log in</h3>

				<div>
				<input
				type="email"
				placeholder="E-mail"
				onChange={
					(
						e
					) => this.setEmail(
						e
					)
				}
				/>
				</div>
				<div>
				<input
				type="password"
				placeholder="Password"
				onChange={
					(
						e
					) => this.setPass(
						e
					)
				}
				/>
				</div>

				<div>
				<input
				type="submit"
				/>
				</div>
				</form>

				<form
				onSubmit={
					(
						e
					) => this.register(
						e
					)
				}
				>
				<h3>Register</h3>

				<div>
					<input
						type="email"
						placeholder="E-mail"
						onChange={
							(
								e
							) => this.setEmail(
								e
							)
						}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						onChange={
							this.setPass
						}
					/>
				</div>

				<div>
					<input
						type="submit"
					/>
				</div>
				</form>
			</div>
		</div>
		)
	}
};

export default Form;
