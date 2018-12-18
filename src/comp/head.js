import React from 'react';

import * as firebase from "firebase";

class Head extends React.Component {
	constructor(
		props
	) {
		super(
			props
		);
	}

  render() {
    return (
			<div>
				<div>
					<h3
						id="head"
					>
						<a
							href="/"
						>
							A
						</a>
					</h3>
				</div>

				<hr />

				<div
					id="nav"
				>
					<h3>
						<a
							href="/new"
						>
							New
						</a>
					</h3>

					<h3>
						<a
							href="/acct"
						>
							{
								this.props.eMail
							}
						</a>
					</h3>

					<h3>
						<a
							href="/form"
						>
							Form
						</a>
					</h3>

					<h3>
						<a
							href="/sign_out"
							onClick={
								firebase.auth().signOut().then(
									function() {
									}, function(
										err
									) {
										alert(
											err.message
										);
									}
								)
							}
						>
							Sign Out
						</a>
					</h3>
				</div>

				<hr />
			</div>
    );
  }
}

export default Head;
