function AddAnnouncementBtn(props) {
	return (
		<div>
			<button name="showAddNewAnnouncementFields" onClick={props.toggleAddAnnouncementFields}>Add Announcement</button>
		</div>
	)
}

export default AddAnnouncementBtn;