function SearchAnnouncement(props) {
	return (
		<div>
			<input type="text"
			       placeholder="Search"
			       onChange={props.onChange}
			/>
		</div>
	)
}

export default SearchAnnouncement;