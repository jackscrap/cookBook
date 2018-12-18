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
import Acct from "./comp/acct";
import Idx from "./comp/idx";
import Recipe from "./comp/recipe";

import Form from "./comp/form";
import New from "./comp/new";

import './index.css';

class App extends React.Component {
  render() {
    return (
			<div>
				<Head
					eMail="jackhasakeyboard@gmail.com"
				/>

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
							path="/acct"
							render={
								(
									props
								) => {
									return (
										<Acct
											eMail={"nalma@telus.net"}
											{...props}
										/>
									);
								}
							}
						/>

						<Route
							path="/new"
							component={
								New
							}
						/>

						<Route
							path="/gothca"
							exact
							component={Form}
						/>

						<Route
							path="/acct"
							exact
							component={Acct}
						/>

						<Route
							path="/new"
							exact
							component={New}
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
