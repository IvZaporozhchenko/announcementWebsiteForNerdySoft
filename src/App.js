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
			announcements: [],
			newAnnouncementVisibility: false
		}

		this.onClick = this.onClick.bind(this);
		this.addNewAnnouncement = this.addNewAnnouncement.bind(this);
	}

	onClick(e) {
		this.setState({
			newAnnouncementVisibility: !this.state.newAnnouncementVisibility
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
			announcements: [...this.state.announcements, newAnnouncement]
		})
	}

	render() {
		return (
			<div>
				<Header onClick={this.onClick} />
				<AddNewAnnouncement visibility={this.state.newAnnouncementVisibility}
				                    addNewAnnouncement={this.addNewAnnouncement}
				/>
				<SearchAnnouncement onChange={this.onChange} />
				<ListOfAnnouncements announcements={this.state.announcements} />
			</div>
		)
	}
}

export default App;
