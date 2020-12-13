import Announcement from "./Announcement";
import SelectedAnnouncement from "./SelectedAnnouncement";

function ListOfAnnouncements(props) {
	return props.announcements.sort(
		(a, b) => b.selected - a.selected
	).filter(
		(announcement) => {
			if (props.searchedAnnouncementTitle) {
				return announcement.title.toString().toLowerCase().includes(props.searchedAnnouncementTitle.toLowerCase()) || announcement.selected;
			} else {
				return announcement;
			}
		}
	).map((announcement) => {
			if (announcement.selected) {
				return <div key={announcement.id}>
					<SelectedAnnouncement announcements={props.announcements}
					                      announcement={announcement}
					                      closeDetails={props.closeDetails}
					                      deleteAnnouncement={props.deleteAnnouncement}
					                      editAnnouncement={props.editAnnouncement}
					                      selectAnnouncement={props.selectAnnouncement}/>
				</div>
			} else {
				return <Announcement key={announcement.id}
				                     announcement={announcement}
				                     selectAnnouncement={props.selectAnnouncement}/>
			}
		}
	)
}

export default ListOfAnnouncements;