import React, {Component} from "react";
import {v4 as uuidv4} from 'uuid';

import Header from "./components/Header";
import AddNewAnnouncementFields from "./components/AddNewAnnouncementFields"
import SearchAnnouncement from "./components/SearchAnnouncement";
import ListOfAnnouncements from "./components/ListOfAnnouncements";

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			announcements: [],
			newAnnouncementFieldsDisplay: "none",
			searchedAnnouncementTitle: ""
		}

		this.toggleAddAnnouncementFields = this.toggleAddAnnouncementFields.bind(this);
		this.addNewAnnouncement = this.addNewAnnouncement.bind(this);
		this.selectAnnouncement = this.selectAnnouncement.bind(this);
		this.closeDetails = this.closeDetails.bind(this);
		this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
		this.searchAnnouncement = this.searchAnnouncement.bind(this);
		this.editAnnouncement = this.editAnnouncement.bind(this);
	}

	componentDidMount() {
		let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
		announcements.forEach((announcement) => announcement.date = new Date(announcement.date));
		this.setState({
			announcements: announcements
		})
	}

	componentDidUpdate() {
		localStorage.setItem('announcements', JSON.stringify(this.state.announcements));
	}


	//Toggle "Add new announcement fields"
	toggleAddAnnouncementFields(e) {
		if (e.target.name === "showAddNewAnnouncementFields") {
			this.setState({
				newAnnouncementFieldsDisplay: "flex"
			})
		} else if (e.target.querySelector("input[name='hideAddNewAnnouncementFields']").name === "hideAddNewAnnouncementFields") {
			this.setState({
				newAnnouncementFieldsDisplay: "none"
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
			newAnnouncementFieldsDisplay: "none"
		})
	}

	//Search announcement by title
	searchAnnouncement(title) {
		this.setState({
			searchedAnnouncementTitle: title
		})
	}

	//Select announcement
	selectAnnouncement(id) {
		this.setState({
			announcement: this.state.announcements.map((announcement) => {
				announcement.selected = false;
				if (announcement.id === id) {
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
		this.setState({
			announcement: this.state.announcements.map((announcement) => {
				if (announcement.id === editedAnnouncement.id) {
					announcement.title = editedAnnouncement.title;
					announcement.description = editedAnnouncement.description;
				}
				return announcement;
			})
		})
	}

	render() {
		return (
			<div className="wrapper">
				<Header toggleAddAnnouncementFields={this.toggleAddAnnouncementFields}/>
				<AddNewAnnouncementFields display={this.state.newAnnouncementFieldsDisplay}
				                          addNewAnnouncement={this.addNewAnnouncement}
				                          toggleAddAnnouncementFields={this.toggleAddAnnouncementFields}/>
				<SearchAnnouncement searchAnnouncement={this.searchAnnouncement}/>
				<ListOfAnnouncements announcements={this.state.announcements}
				                     searchedAnnouncementTitle={this.state.searchedAnnouncementTitle}
				                     selectAnnouncement={this.selectAnnouncement}
				                     closeDetails={this.closeDetails}
				                     deleteAnnouncement={this.deleteAnnouncement}
				                     editAnnouncement={this.editAnnouncement}/>
			</div>
		)
	}
}

export default App;
