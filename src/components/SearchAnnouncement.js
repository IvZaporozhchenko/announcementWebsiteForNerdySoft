import React, {Component} from "react";

class SearchAnnouncement extends Component{
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.searchedAnnouncement(e.target.value);
	}

	render() {
		return (
			<div>
				<input type="text"
				       placeholder="Search"
				       onChange={this.onChange}
				/>
			</div>
		)
	}
}

export default SearchAnnouncement;