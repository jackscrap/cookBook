import React from "react";

class Recipe extends React.Component {
	constructor() {
		super();

		fetch("/api/recipe")
			.then(
				response => {
					return response.json();
				}
			)
			.then(
				jsondata => {
				}
			)

		this.state = {
			recipe: [],

			title: "",
			note: "",
			ingredient: [],
			step: [],
			tmp: [],

			search: ""
		};

		this.setTitle = this.setTitle.bind(this);
		this.setAuthor = this.setAuthor.bind(this);
		this.setNote = this.setNote.bind(this);
		this.setIngredient = this.setIngredient.bind(this);
		this.setStep = this.setStep.bind(this);

		this.submit = this.submit.bind(this);

		this.setSearch = this.setSearch.bind(this);
	}

	setTitle(e) {
		this.setState({
			title: e.target.value
		});
	}
	setAuthor(e) {
		this.setState({
			author: e.target.value
		});
	}
	setNote(e) {
		this.setState({
			note: e.target.value
		});
	}
	setIngredient(e) {
		this.setState({
			ingredient: e.target.value
		});
	}
	setStep(e) {
		this.setState({
			step: e.target.value
		});
	}
	submit(e) {
		e.preventDefault();

		this.setState(
			prevState => (
				{
					tmp: [
						...prevState.tmp,
						this.state.title
					]
				}
			)
		);
	}

	setSearch(e) {
		e.preventDefault();

		this.setState({
			search: e.target.value
		});
	}
	componentDidMount() {
		fetch(
			"/api/recipe"
		)
			.then(
				res => res.json()
			)
			.then(
				recipe => {
					this.setState(
						{
							recipe // sets recipe: recipe via ES6 syntax
						}
					)
				}
			);
	}

  render() {
		let filter = this.state.tmp.filter(
			(
				item
			) => {
				return (
					<li>{"asdfa"}</li>
				);

				// if (title == this.state.search) {
				// 	return <li>hahha</li>;
				// } else {
				// 	return <li>hahha</li>;
				// }
			}
		);

    return (
			<div
				id="new"
			>
				<h3>New</h3>

				<form>
					<div>
						<label>Title: </label>
						<input
							type="text"
							onChange={
								(e) => this.setTitle(e)
							}
						/>
					</div>

					<div>
						<label>Author: </label>
						<input
							type="text"
							onChange={
								(e) => this.setAuthor(e)
							}
						/>
					</div>

					<div>
						<label>Note: </label>
						<input
							type="text"
							onChange={
								(e) => this.setNote(e)
							}
						/>
					</div>

					<div>
						<label>Ingredient: </label>
						<input
							type="text"
							onChange={
								(e) => this.setIngredient(e)
							}
						/>
					</div>

					<div>
						<label>Step: </label>
						<input
							type="text"
							onChange={
								(e) => this.setStep(e)
							}
						/>
					</div>

					<div>
						<button
							value="Submit"
							onClick={
								(e) => this.submit(e)
							}
						>
							Submit
						</button>
					</div>
				</form>

				<div
					id="search"
				>
					<h3>Search</h3>

					<form>
						<input
							type="text"
							onChange={
								(e) => {
									this.setSearch(e)
								}
							}
						/>
					</form>
				</div>

				<ul>
					{
						filter
					}
				</ul>
			</div>
    );
  }
}

export default Recipe;
