import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header";
import AddNewAnnouncement from "./components/AddNewAnnouncement"
import SearchAnnouncement from "./components/SearchAnnouncement";
import ListOfAnnouncements from "./components/ListOfAnnouncements";

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			announcements: [
				{
					id: 1,
					title: 1,
					description: 1,
					date: 1,
					selected: false
				},
				{
					id: 2,
					title: 2,
					description: 2,
					date: 2,
					selected: false
				},
				{
					id: 3,
					title: 3,
					description: 3,
					date: 3,
					selected: false
				}
			],
			newAnnouncementFieldsIsHidden: true,
			searchedAnnouncementTitle: ""
		}

		this.toggleAddAnnouncementFields = this.toggleAddAnnouncementFields.bind(this);
		this.addNewAnnouncement = this.addNewAnnouncement.bind(this);
		this.selectAnnouncement = this.selectAnnouncement.bind(this);
		this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
		this.searchedAnnouncement = this.searchedAnnouncement.bind(this);
		this.editAnnouncement = this.editAnnouncement.bind(this);
	}


	//Search announcement by title
	searchedAnnouncement(title) {
		this.setState({
			searchedAnnouncementTitle: title
		})
	}

	//Toggle "Add new announcement fields"
	toggleAddAnnouncementFields(e) {
		if(e.target.name === "showAddNewAnnouncementFields") {
			this.setState({
				newAnnouncementFieldsIsHidden: false
			})
		} else if(e.target.name === "hideAddNewAnnouncementFields") {
			this.setState({
				newAnnouncementFieldsIsHidden: true
			})
		}

	}


	//Add new announcement
	addNewAnnouncement(announcement) {
		let newAnnouncement = {
				id: uuidv4(),
				title: announcement.title,
				description: announcement.description,
				date: new Date(),
				selected: announcement.selected
			};

		this.setState({
			announcements: [...this.state.announcements, newAnnouncement],
			newAnnouncementFieldsIsHidden: true
		})
	}

	//Select announcement
	selectAnnouncement(id) {
		this.setState({
			announcement: this.state.announcements.map((announcement) => {
				announcement.selected = false;
				if(announcement.id === id) {
					announcement.selected = !announcement.selected;
				}
				return announcement;
			})
		})
	}

	//Close details
	closeDetails() {
		this.setState({
			announcement: this.state.announcements.map((announcement) => announcement.selected = false)
		})
	}

	//Delete announcement
	deleteAnnouncement(id) {
		this.setState({
			announcements: this.state.announcements.filter((announcement) => announcement.id !== id)
		})
	}

	//Edit announcement
	editAnnouncement(editedAnnouncement) {
		console.log(editedAnnouncement);
		this.setState({
			announcement: this.state.announcements.map((announcement) => {
				if(announcement.id === editedAnnouncement.id) {
					announcement.title = editedAnnouncement.title;
					announcement.description = editedAnnouncement.description;
				}
				return announcement;
			})
		})
	}

	render() {
		return (
			<div>
				<Header toggleAddAnnouncementFields={this.toggleAddAnnouncementFields} />
				<AddNewAnnouncement visibility={this.state.newAnnouncementFieldsIsHidden}
				                    addNewAnnouncement={this.addNewAnnouncement}
				                    toggleAddAnnouncementFields={this.toggleAddAnnouncementFields}
				/>
				<SearchAnnouncement searchedAnnouncement={this.searchedAnnouncement} />
				<ListOfAnnouncements announcements={this.state.announcements}
				                     searchedAnnouncementTitle={this.state.searchedAnnouncementTitle}
				                     selectAnnouncement={this.selectAnnouncement}
				                     closeDetails={this.closeDetails}
				                     deleteAnnouncement={this.deleteAnnouncement}
				                     editAnnouncement={this.editAnnouncement}
				/>
			</div>
		)
	}
}

export default App;
