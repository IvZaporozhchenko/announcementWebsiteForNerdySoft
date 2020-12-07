function SelectedAnnouncement(props) {
	return (
		<div>
			<button onClick={props.closeDetails}>Close details</button>
			<p>Title: {props.announcement.title}</p>
			<p>Description: {props.announcement.description}</p>
			<button>Edit</button>
			<button>Delete</button>
		</div>
	)
}

export default SelectedAnnouncement;