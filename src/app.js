import React from 'react';

import {
	Redirect,
	Route,
	Switch
} from 'react-router';
import {
	BrowserRouter
} from "react-router-dom";

import Head from "./comp/head";
import New from "./comp/new";
import Idx from "./comp/idx";
import Recipe from "./comp/recipe";

import './index.css';

class App extends React.Component {
  render() {
    return (
			<div>
				<Head />

				<hr />

				<BrowserRouter>
					<Switch>
						<Route
							path="/"
							exact
							component={
								Idx
							}
						/>

						<Route
							path="/new"
							component={
								New
							}
						/>

						<Route
							path="/:i"
							render={
								(
									props
								) => {
									return (
										<Recipe
											i={props.match.params.i}
											{...props}
										/>
									);
								}
							}
						/>
					</Switch>
				</BrowserRouter>
			</div>
    );
  }
}

export default App;
