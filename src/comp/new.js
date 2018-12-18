import React from "react";

import fire from "./fire";

import "../index.css";

class New extends React.Component {
	constructor(props) {
		super(
			props
		);

		this.state = {
			recipe: [],

			stepCnt: 1,
			step: [],

			ingredientCnt: 1,
			ingredient: [],
			qty: 1
		};

		this.addIngredient = this.addIngredient.bind(
			this
		);
	}

	componentWillMount() {
		let recipeRef = fire.database().ref(
			"recipe"
		);

		recipeRef.on(
			"child_added",
			snap => {
				var message = snap.val();

				this.setState(
					{
						recipe: [message].concat(
							this.state.recipe
						)
					}
				);
			}
		);
	}

	addMessage(
		e
	) {
		e.preventDefault();

		fire.database().ref(
			"recipe"
		).push(
			{
				title: this.inputTitle.value,
				author: "jackhasakeyboard@gmail.com",
				note: this.inputNote.value,
				ingredient: this.state.ingredient,
				step: this.state.step

				// title: this.inputTitle.value,
				// author: "jackhasakeyboard@gmail.com",
				// note: this.inputNote.value,
				// ingredient: this.ingredient,
				// step: this.state.step
			}
		);
	}

	addIngredient(
		e
	) {
		e.preventDefault();

		this.setState(
			{
				ingredientCnt: this.state.ingredientCnt + 1
			}
		);
	}
	addStep(
		e
	) {
		e.preventDefault();

		this.setState(
			{
				stepCnt: this.state.stepCnt + 1
			}
		);
	}

	render() {
		const
			stepRng = [...Array(this.state.stepCnt).keys()],
			stepInputMap = stepRng.map(
				(
					i
				) => {
					return (
						<div>
							<div>
								<label>Title</label>
								<input
									type="text"
									onChange={
										(
											e
										) => {
											this.state.step[i] = {
												title: e.target.value,
												desc: e.target.value
											}
										}
									}
								/>
							</div>

							<div>
								<label>Description:</label>
								<input
									type="text"
									onChange={
										(
											e
										) => {
											this.state.step[i] = {
												title: e.target.value,
												desc: e.target.value
											}
										}
									}
								/>
							</div>
						</div>
					);
				}
			),

			ingredientRng = [...Array(this.state.ingredientCnt).keys()],
			ingredientMap = ingredientRng.map(
				(
					i
				) => {
					return (
						<div>
							<div>
								<input
									type="text" 
									onChange={
										(
											e
										) => {
											this.state.ingredient[i] = {
												name: e.target.value,
												metric: e.target.value,
												qty: e.target.value
											}
										}
									}
								/>

								<select
									onChange={
										(
											e
										) => {
											this.state.ingredient[i] = {
												name: e.target.value,
												metric: e.target.value,
												qty: e.target.value
											}
										}
									}
								>
									<option>Teaspoon</option>
									<option>Tablespoon</option>
									<option>Cup</option>
								</select>
							
								<input
									type="number"
									min="1"
									max="10"
									onChange={
										(
											e
										) => {
											this.state.ingredient[i] = {
												name: e.target.value,
												metric: e.target.value,
												qty: e.target.value
											}
										}
									}
								/>
							</div>
						</div>
					);
				}
			)

		return (
			<form
				id="new"
				onSubmit={
					this.addMessage.bind(
						this
					)
				}
			>
				<div
				>
					<label>
						Title
					</label>
					<textarea
						ref={
							(
								el
							) => this.inputTitle = el
						}
					/>
				</div>

				<div>
					<label>
						Notes
					</label>
				
					<textarea
						ref={
							(
								el
							) => this.inputNote = el
						}
					/>
				</div>
				<div>
					<h3>
						Ingredients
					</h3>

					{
						ingredientMap
					}

					<div>
						<button
							onClick= {
								(
									e
								) => this.addIngredient(
									e
								)
							}
						>
							Add ingredient
						</button>
					</div>
				</div>
				<div>
					<div>
						<h3>
							Steps
						</h3>
					</div>

					<div
						id="step"
					>
						{
							stepInputMap
						}
					</div>
					<div>
						<button
						onClick={
							this.addStep.bind(
								this
							)
						}
						>
							Add step
						</button>
					</div>
				</div>

				<input
					type="submit"
				/>
			</form>
		);
	}
}

export default New;
