import Announcement from "./Announcement";
import SelectedAnnouncement from "./SelectedAnnouncement";

function ListOfAnnouncements(props) {
	return props.announcements.sort(
		(a, b) => b.selected - a.selected
	).map((announcement) => {
		if(announcement.selected) {
			return <SelectedAnnouncement key={announcement.id}
			                             announcement={announcement}
			                             closeDetails={props.closeDetails}
			/>
		} else {
			return <Announcement key={announcement.id}
			                     announcement={announcement}
			                     selectAnnouncement={props.selectAnnouncement}/>
		}
	})
}

export default ListOfAnnouncements;