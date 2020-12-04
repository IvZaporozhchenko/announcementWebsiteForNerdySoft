import React, {Component} from "react";
import AddAnnouncementBtn from "./AddAnnouncementBtn";

class Header extends Component{
	render() {
		return (
			<div>
				<h1>Announcement Website</h1>
				<AddAnnouncementBtn onClick={this.props.onClick} />
			</div>
		)
	}
}

export default Header;
