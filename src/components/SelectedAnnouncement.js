import DeleteAnnouncementBtn from "./DeleteAnnouncementBtn";
import EditAnnouncementBtn from "./EditAnnouncementBtn";

function SelectedAnnouncement(props) {
	return (
		<div>
			<button onClick={props.closeDetails}>Close details</button>
			<p>Title: {props.announcement.title}</p>
			<p>Description: {props.announcement.description}</p>
			<EditAnnouncementBtn />
			<DeleteAnnouncementBtn id={props.announcement.id}
			                       deleteAnnouncement={props.deleteAnnouncement} />
		</div>
	)
}

export default SelectedAnnouncement;