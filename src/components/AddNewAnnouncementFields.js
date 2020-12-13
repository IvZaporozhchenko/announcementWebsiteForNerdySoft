import React, {Component} from "react";

class AddNewAnnouncementFields extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			selected: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	onChange(e) {
		this.setState({
				[e.target.name]: e.target.value
			}
		)
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.addNewAnnouncement(this.state)
		this.setState({
			title: "",
			description: "",
			selected: false
		})
	}

	onReset(e) {
		this.props.toggleAddAnnouncementFields(e);
		this.setState({
			title: "",
			description: "",
			selected: false
		})
	}

	render() {
		return (
			<div className="addNewAnnouncementFields"
			     style={{display: this.props.display}}>
				<h2>Post your announcement</h2>
				<form onSubmit={this.onSubmit}
				      onReset={this.onReset}>
					<div className="inputFields">
						<label htmlFor="title">Title: </label>
						<br/>
						<input id="title"
						       name="title"
						       type="text"
						       required={true}
						       placeholder="title"
						       value={this.state.title}
						       onChange={this.onChange}/>
						<br/>
						<label htmlFor="description">Description: </label>
						<br/>
						<textarea id="description"
						          name="description"
						          required={true}
						          placeholder="description"
						          value={this.state.description}
						          onChange={this.onChange}>
						</textarea>
						<br/>
					</div>
					<div className="buttons">
						<input type="submit" value="Add new announcement"/>
						<input name="hideAddNewAnnouncementFields" type="reset" value="Cancel"/>
					</div>
				</form>
			</div>
		)
	}
}

export default AddNewAnnouncementFields;