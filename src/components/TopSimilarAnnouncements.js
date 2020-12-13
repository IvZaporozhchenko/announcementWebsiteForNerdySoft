function TopSimilarAnnouncements (props) {
	let topSimilarAnnouncements = props.announcements.filter((announcement) => {
		return announcement.id !== props.announcement.id &&
			props.announcement.title.toString().toLowerCase().split(" ").some((a) => {return announcement.title.toString().toLowerCase().includes(a)}) &&
			props.announcement.description.toString().toLowerCase().split(" ").some((a) => {return announcement.description.toLowerCase().toString().includes(a)});
	})

	if (topSimilarAnnouncements.length !== 0) {
		return <div>
			<p>You might also like this announcements:</p>
			{topSimilarAnnouncements.slice(0, 3).map((announcement) => {
				return (
					<div key={announcement.id}
					     onClick={props.selectAnnouncement.bind(this, announcement.id)}>
						{announcement.title}
					</div>
				)
			})}
		</div>
	} else {
		return (
			<p>Similar announcements not found</p>
		)
	}

}

export default TopSimilarAnnouncements;