import React, {Component} from "react";

class SearchAnnouncement extends Component{
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.searchAnnouncement(e.target.value);
	}

	render() {
		return (
			<div className="searchField">
				<input type="search"
				       placeholder="Search..."
				       onChange={this.onChange}
				/>
			</div>
		)
	}
}

export default SearchAnnouncement;