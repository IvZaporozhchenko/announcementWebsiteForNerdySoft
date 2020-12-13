import DateDisplay from "./DateDisplay";

function Announcement(props) {
	return (
		<div className="announcement"
		     onClick={props.selectAnnouncement.bind(this, props.announcement.id)}>
			<p>{props.announcement.title}</p>
			<DateDisplay date={props.announcement.date}/>
		</div>
	)
}

export default Announcement;