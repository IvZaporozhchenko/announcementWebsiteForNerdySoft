import React, {Component} from "react";
import AddAnnouncementBtn from "./AddAnnouncementBtn";

class Header extends Component{
	render() {
		return (
			<div className="header">
				<h1>Your Announcements</h1>
				<AddAnnouncementBtn toggleAddAnnouncementFields={this.props.toggleAddAnnouncementFields} />
			</div>
		)
	}
}

export default Header;
