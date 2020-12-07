function DeleteAnnouncementBtn(props) {
	return (
		<button onClick={props.deleteAnnouncement.bind(this, props.id)}>Delete</button>
	)
}

export default DeleteAnnouncementBtn;