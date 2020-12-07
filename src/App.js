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
			newAnnouncementVisibility: true,
			searchedAnnouncementTitle: ""
		}

		this.showAddAnnouncementFields = this.showAddAnnouncementFields.bind(this);
		this.addNewAnnouncement = this.addNewAnnouncement.bind(this);
		this.selectAnnouncement = this.selectAnnouncement.bind(this);
		this.closeDetails = this.closeDetails.bind(this);
		this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
		this.searchedAnnouncement = this.searchedAnnouncement.bind(this);
		this.cancelAdding = this.cancelAdding.bind(this);
	}


	//Search announcement by title
	searchedAnnouncement(title) {
		this.setState({
			searchedAnnouncementTitle: title
		})
	}

	//Show "Add new announcement fields"
	showAddAnnouncementFields(e) {
		if(this.state.newAnnouncementVisibility) {
			this.setState({
				newAnnouncementVisibility: !this.state.newAnnouncementVisibility
			})
		}
	}

	//Hide "Add new announcement fields"
	cancelAdding() {
		this.setState({
			newAnnouncementVisibility: true
		})
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
			newAnnouncementVisibility: true
		})
	}

	//Select announcement
	selectAnnouncement(id) {
		this.setState({
			announcement: this.state.announcements.map((announcenemt) => {
				announcenemt.selected = false;
				if(announcenemt.id === id) {
					announcenemt.selected = !announcenemt.selected;
				}
				return announcenemt;
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

	render() {
		return (
			<div>
				<Header showAddAnnouncementFields={this.showAddAnnouncementFields} />
				<AddNewAnnouncement visibility={this.state.newAnnouncementVisibility}
				                    addNewAnnouncement={this.addNewAnnouncement}
				                    cancelAdding={this.cancelAdding}
				/>
				<SearchAnnouncement searchedAnnouncement={this.searchedAnnouncement} />
				<ListOfAnnouncements announcements={this.state.announcements}
				                     searchedAnnouncementTitle={this.state.searchedAnnouncementTitle}
				                     selectAnnouncement={this.selectAnnouncement}
				                     closeDetails={this.closeDetails}
				                     deleteAnnouncement={this.deleteAnnouncement}/>
			</div>
		)
	}
}

export default App;
