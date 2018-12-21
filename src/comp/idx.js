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

	const db = firebase.database();
}

class Idx extends React.Component {
	constructor() {
		super();

		this.state = {
			recipe: [],
			ln: []
		};

		this.alphabet = this.alphabet.bind(
			this
		);
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

				alert(this.state.recipe)

				// this.setState(
				// 	{
				// 		ln: this.state.recipe.map(
				// 			(
				// 				val
				// 			) => {
				// 				return val.title;
				// 			}
				// 		)
				// 	}
				// );
			}
		);
	}

	alphabet() {
		var
			c = [],

			i = "a".charCodeAt(
				0
			);

		const j = "z".charCodeAt(
			0
		);

		for (
			;
			i <= j;
			++i
		) {
			c.push(
				String.fromCharCode(
					i
				)
			);
		}

		return c;
	}

  render() {
    return (
			<ul
				id="index"
			>
				{
					this.alphabet().map(
						(
							c
						) => {
							return (
								<div>
									<h1>{c.toUpperCase()}</h1>

									{
										this.state.ln.map(
											(
												title,
												k
											) => {
												if (title[0].toLowerCase() == c) {
													return (
														<li>
															<a
																href={k}
															>
																{title}
															</a>
														</li>
													);
												}
											}
										)
									}
								</div>
							);
						}
					)
				}

				{
					// this.state.recipe.map(
					// 	(
					// 		recipe,
					// 		k
					// 	) => {
					// 		return (
					// 			<li>
					// 				<a
					// 					href={
					// 						"/" + (k + 1)
					// 					}
					// 				>
					// 					{recipe.title}
					// 				</a>
					// 			</li>
					// 		);
					// 	}
					// )
				}
			</ul>
    );
  }
}

export default Idx;
