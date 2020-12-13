function DateDisplay(props) {
	let date = props.date,
		hours = date.getHours(),
		minutes = date.getMinutes(),
		dd = date.getDate(),
		mm = date.getMonth(),
		yy = date.getFullYear();

	hours  = (hours < 10 ? "0" + hours : hours);
	minutes  = (minutes < 10 ? "0" + minutes : minutes);
	switch (mm) {
		case 0:
			mm = "Jan";
			break;
		case 1:
			mm = "Feb";
			break;
		case 2:
			mm = "Mar";
			break;
		case 3:
			mm = "Apr";
			break;
		case 4:
			mm = "May";
			break;
		case 5:
			mm = "Jun";
			break;
		case 6:
			mm = "Jul";
			break;
		case 7:
			mm = "Aug";
			break;
		case 8:
			mm = "Sep";
			break;
		case 9:
			mm = "Oct";
			break;
		case 10:
			mm = "Nov";
			break;
		case 11:
			mm = "Dec";
			break;
		default:
			mm = "error";
	}

	return <p className="dateDisplay">{hours}:{minutes} {dd}-{mm}-{yy}</p>
}

export default DateDisplay;