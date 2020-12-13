import React, {Component} from "react";

import DeleteAnnouncementBtn from "./DeleteAnnouncementBtn";
import EditAnnouncementBtn from "./EditAnnouncementBtn";
import TopSimilarAnnouncements from "./TopSimilarAnnouncements";
import DateDisplay from "./DateDisplay";
import EditAnnouncementFields from "./EditAnnouncementFields";

class SelectedAnnouncement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayEditAnnouncementFields: "none",
			displayAnnouncementInfo: "block"
		}

		this.toggleEditingFields = this.toggleEditingFields.bind(this);
	}

	toggleEditingFields() {
		this.setState({
			displayEditAnnouncementFields: (this.state.displayEditAnnouncementFields === "none" ? "block" : "none"),
			displayAnnouncementInfo: (this.state.displayAnnouncementInfo === "none" ? "block" : "none")
		})
	}

	render() {
		return (
			<div className="selectedAnnouncement">
				<div className="selectedAnnouncementInfo">
					<div>
						<div style={{display: this.state.displayAnnouncementInfo}}>
							<p>Title: {this.props.announcement.title}</p>
							<p>Description: {this.props.announcement.description}</p>
						</div>
						<EditAnnouncementFields editAnnouncement={this.props.editAnnouncement}
						                        announcement={this.props.announcement}
						                        toggleEditingFields={this.toggleEditingFields}
						                        displayEditAnnouncementFields={this.state.displayEditAnnouncementFields}
						/>
						<DateDisplay date={this.props.announcement.date} />
					</div>
					<div className="buttons">
						<button onClick={this.props.closeDetails}>Close details</button>
						<div style={{display: this.state.displayAnnouncementInfo}}>
							<EditAnnouncementBtn toggleEditingFields={this.toggleEditingFields}/>
							<DeleteAnnouncementBtn id={this.props.announcement.id}
							                       deleteAnnouncement={this.props.deleteAnnouncement}/>
						</div>
					</div>
				</div>
				<TopSimilarAnnouncements/>
			</div>
		)
	}
}

export default SelectedAnnouncement;