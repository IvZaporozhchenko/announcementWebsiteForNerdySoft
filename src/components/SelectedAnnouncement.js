function SelectedAnnouncement(props) {
	return (
		<div>
			{props.announcement.title}
			{props.announcement.description}
		</div>
	)
}

export default SelectedAnnouncement;