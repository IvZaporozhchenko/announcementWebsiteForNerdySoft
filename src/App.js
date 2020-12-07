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
			newAnnouncementVisibility: true
		}

		this.showAddAnnouncementFields = this.showAddAnnouncementFields.bind(this);
		this.addNewAnnouncement = this.addNewAnnouncement.bind(this);
		this.selectAnnouncement = this.selectAnnouncement.bind(this);
		this.closeDetails = this.closeDetails.bind(this);
	}


	//Show "Add new announcements fields"
	showAddAnnouncementFields(e) {
		if(this.state.newAnnouncementVisibility) {
			this.setState({
				newAnnouncementVisibility: !this.state.newAnnouncementVisibility
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
			announcements: [...this.state.announcements, newAnnouncement]
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
			announcement: this.state.announcements.map((announcement) => {
				announcement.selected = false;
			})
		})
	}

	render() {
		return (
			<div>
				<Header showAddAnnouncementFields={this.showAddAnnouncementFields} />
				<AddNewAnnouncement visibility={this.state.newAnnouncementVisibility}
				                    addNewAnnouncement={this.addNewAnnouncement}
				/>
				<SearchAnnouncement onChange={this.onChange} />
				<ListOfAnnouncements announcements={this.state.announcements}
				                     selectAnnouncement={this.selectAnnouncement}
				                     closeDetails={this.closeDetails}
				/>
			</div>
		)
	}
}

export default App;
