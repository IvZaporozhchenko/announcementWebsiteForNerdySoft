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
		this.onReset = this.onReset.bind(this);
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

	onReset() {
		this.props.toggleEditingFields();
		this.setState({
			title: this.props.announcement.title,
			description: this.props.announcement.description
		})
	}

	render() {
		return (
			<div style={{display: this.props.displayEditAnnouncementFields}}>
				<form className="editAnnouncementFields"
				      onSubmit={this.onSubmit}
				      onReset={this.onReset}>
					<input name="title"
					       type="text"
					       required={true}
					       value={this.state.title}
					       onChange={this.onChange}/>
					<input name="description"
					       type="text"
					       required={true}
					       value={this.state.description}
					       onChange={this.onChange}/>
					<div>
						<input type="submit"
						       value="Edit announcement"/>
						<input type="reset"
						       value="Cancel"/>
					</div>
				</form>
			</div>
		)
	}
}

export default EditAnnouncementFields;