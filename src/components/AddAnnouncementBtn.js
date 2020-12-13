function AddAnnouncementBtn(props) {
	return (
		<div>
			<button name="showAddNewAnnouncementFields" onClick={props.toggleAddAnnouncementFields}>ADD NEW ANNOUNCEMENT</button>
		</div>
	)
}

export default AddAnnouncementBtn;