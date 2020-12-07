function Announcement(props) {
	return (
		<div onClick={props.selectAnnouncement.bind(this, props.announcement.id)}>
			{props.announcement.title}
		</div>
	)
}

export default Announcement;