import DateDisplay from "./DateDisplay";

function Announcement(props) {
	return (
		<div onClick={props.selectAnnouncement.bind(this, props.announcement.id)}>
			{props.announcement.title}
			<DateDisplay date={props.announcement.date}/>
		</div>
	)
}

export default Announcement;