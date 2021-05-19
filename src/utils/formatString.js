const formatString = (string) => {
	let formattedString = string.charAt(0).toUpperCase() + string.slice(1);
	if (formattedString.includes('-')) {
		formattedString = formattedString.replace(/-/g, ' ');
	}

	return formattedString;
};

export default formatString;
