export { searchNewGif };

async function searchNewGif(conditions) {
	const searchQuery = conditions;
	console.log("Conditions: " + conditions);
	let url = "";

	if (searchQuery === "") {
		url =
			`https://api.giphy.com/v1/gifs/translate?api_key=8VNUOIV65ZHjMTV9kn4UYKflJJ6Q8d7w&s=` +
			`cats`;
	} else {
		url =
			`https://api.giphy.com/v1/gifs/translate?api_key=8VNUOIV65ZHjMTV9kn4UYKflJJ6Q8d7w&s=` +
			searchQuery;
	}

	const gifResponse = await fetch(url, { mode: "cors" });
	const gifData = await gifResponse.json();

	return gifData.data.images.original.url;
}
