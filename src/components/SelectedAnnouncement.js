import DeleteAnnouncementBtn from "./DeleteAnnouncementBtn";
import EditAnnouncementBtn from "./EditAnnouncementBtn";
import TopSimilarAnnouncements from "./TopSimilarAnnouncements";
import DateDisplay from "./DateDisplay";
import EditAnnouncementFields from "./EditAnnouncementFields";

function SelectedAnnouncement(props) {
	return (
		<div className="selectedAnnouncement">
			<div className="selectedAnnouncementInfo">
				<div>
					<p>Title: {props.announcement.title}</p>
					<p>Description: {props.announcement.description}</p>
					<DateDisplay date={props.announcement.date} />
				</div>
				<div className="buttons">
					<button onClick={props.closeDetails}>Close details</button>
					<div>
						<EditAnnouncementBtn/>
						<DeleteAnnouncementBtn id={props.announcement.id}
						                       deleteAnnouncement={props.deleteAnnouncement}/>
					</div>
				</div>
			</div>
			<TopSimilarAnnouncements/>
		</div>
	)
}

export default SelectedAnnouncement;