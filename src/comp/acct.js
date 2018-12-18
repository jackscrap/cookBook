import React from "react";

import fire from "./fire";

import {
	Redirect,
	Route,
	Switch
} from "react-router";
import {
	BrowserRouter
} from "react-router-dom";

class Acct extends React.Component {
	constructor(props) {
		super(
			props
		);

		this.state = {
			recipe: [
			]
		};
	}

	componentWillMount() {
		let recipeRef = fire.database().ref(
			"recipe"
		)

		recipeRef.on(
			"child_added",
			snap => {
				var tmp = snap.val();

				this.setState(
					{
						recipe: [tmp].concat(
							this.state.recipe
						)
					}
				);
			}
		);
	}

	render() {
		return (
			<div>
				{
					this.state.recipe.map(
						item => {
							if (item.author == this.props.eMail) {
								return (
									<h1>
										<a
											href={"asdf"}
										>
											{item.title}
										</a>
									</h1>
								);
							}
						}
					)
				}
			</div>
		);
	}
}

export default Acct;
