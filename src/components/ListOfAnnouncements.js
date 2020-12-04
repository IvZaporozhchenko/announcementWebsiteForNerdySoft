import Announcement from "./Announcement";

function ListOfAnnouncements(props) {
	console.log(props.announcements);
	return props.announcements.map((announcement) => {
		return <Announcement key={announcement.id} announcement={announcement} />
	})
}

export default ListOfAnnouncements;