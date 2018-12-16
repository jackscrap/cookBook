import React from "react";

import * as firebase from 'firebase';

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

class Idx extends React.Component {
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
			}
		);
	}

  render() {
    return (
			<ul
				id="idx"
			>
				{
					this.state.recipe.map(
						(
							recipe,
							k
						) => {
							return (
								<li>
									<a
										href={
											"/" + (k + 1)
										}
									>
										{recipe.title}
									</a>
								</li>
							);
						}
					)
				}
			</ul>
    );
  }
}

export default Idx;
