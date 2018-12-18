import React from "react";

import * as firebase from 'firebase';

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

	const
		db = firebase.database(),
		dbRef = db.ref();
}

class Recipe extends React.Component {
	constructor() {
		super();

		this.state = { 
			recipe: []
		};
	}

	componentDidMount() {
		const
			root = firebase.database().ref(),

			ref = root.child("recipe");

		ref.on(
			"value",
			snap => {
				this.setState(
					{
						recipe: snap.val()
					}
				);

				this.setState(
					{
						curr: snap.val()[this.props.i]
					}
				);
			}
		);
	}

	render() {
		const
			stepSide = this.state.curr ? this.state.curr.step.map(
				(
					item,
					k
				) => {
					return (
						<li>
							<a
								href={"div#" + (k + 1)}
							>
								{item.title}
							</a>
						</li>
					);
				}
			) : null,

			stepLower = this.state.curr ? this.state.curr.step.map(
				(
					step,
					k
				) => {
					return (
						<div
							id={(k + 1)}
						>
							<h3
								id="val"
							>
								{step.title}
							</h3>

							<p>
								{step.desc}
							</p>
						</div>
					);
				}
			) : null,
			ingredientMap = this.state.curr ? this.state.curr.ingredient.map(
				(
					ingredient
				) => {
					return <li>{ingredient}</li>;
				}
			) : null;

		return (
			<div
				id="cont"
			>
				<div
					id="title"
				>
					<h1>{this.state.curr ? this.state.curr.title : null}</h1>
					<p>{this.state.curr ? this.state.curr.note : null}</p>
				</div>

				<div
					id="body"
				>
					<ol>
						{stepSide}
					</ol>

					<div
						id="guide"
					>
						<h3>Ingredients</h3>

						<ul>
							{ingredientMap}
						</ul>

						<br />

						<div>
							{stepLower}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Recipe;
