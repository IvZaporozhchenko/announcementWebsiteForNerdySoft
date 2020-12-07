import React, {Component} from "react";

class AddNewAnnouncement extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			selected: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
				[e.target.name]: e.target.value
			}
		)
	}

	onSubmit(e) {
		e.preventDefault();
		if(this.state.title && this.state.description) {
			this.props.addNewAnnouncement(this.state)
			this.setState({
				title: "",
				description: "",
				selected: false
			})
		}
	}

	render() {
		return (
			<div hidden={this.props.visibility}>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="title">Title: </label>
					<input id="title"
					       name="title"
					       type="text"
					       placeholder="title"
					       value={this.state.title}
					       onChange={this.onChange}/>
					<br/>
					<label htmlFor="description">Description: </label>
					<input id="description"
					       name="description"
					       type="text"
					       placeholder="description"
					       value={this.state.description}
					       onChange={this.onChange}/>
					<br/>
					<input type="submit" value="Add new announcement"/>
				</form>
				<button onClick={this.props.cancelAdding}>Cancel</button>
			</div>
		)
	}
}

export default AddNewAnnouncement;