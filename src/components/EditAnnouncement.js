import React, {Component} from 'react';

class EditAnnouncement extends Component {
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
		if(this.state.title && this.state.description) {
			this.props.editAnnouncement(this.state);
			this.setState({
				title: "",
				description: ""
			})
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input name="title"
					       type="text"
					       value={this.state.title}
					       onChange={this.onChange}
					/>
					<input name="description"
					       type="text"
					       value={this.state.description}
					       onChange={this.onChange}
					/>
					<input type="submit"/>
				</form>
				<button>Cancel</button>
			</div>
		)
	}
}

export default EditAnnouncement;