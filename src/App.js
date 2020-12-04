import React, {Component} from "react";
import Header from "./components/Header";
import NewAnnouncement from "./components/NewAnnouncement"
import SearchAnnouncement from "./components/SearchAnnouncement";
import ListOfAnnouncements from "./components/ListOfAnnouncements";

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<NewAnnouncement />
				<SearchAnnouncement />
				<ListOfAnnouncements />
			</div>
		)
	}
}

export default App;
