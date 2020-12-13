import React, {Component} from 'react';

class EditAnnouncementFields extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: "",
			title: "",
			description: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			id: this.props.announcement.id,
			title: this.props.announcement.title,
			description: this.props.announcement.description
		})
	}

	onChange(e) {
		this.setState({
				[e.target.name]: e.target.value
			}
		)
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.editAnnouncement(this.state);
		this.setState({
			title: this.props.announcement.title,
			description: this.props.announcement.description
		})
	}

	render() {
		return (
			<div hidden>
				<form onSubmit={this.onSubmit}>
					<input name="title"
					       type="text"
					       required={true}
					       value={this.state.title}
					       onChange={this.onChange}
					/>
					<input name="description"
					       type="text"
					       required={true}
					       value={this.state.description}
					       onChange={this.onChange}
					/>
					<br />
					<input type="submit"
					       value="Edit announcement"
					/>
					<input type="reset"
					       value="Cancel"
					/>
				</form>
			</div>
		)
	}
}

export default EditAnnouncementFields;