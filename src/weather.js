export { fetchWeather, weatherDataProcessor };

async function fetchWeather(location) {
	const weatherResponse = await fetch(
		"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
			location +
			"?unitGroup=metric&include=current&key=9QY9CVFB3ACB873VUL7K8AJP8&contentType=json",
		{
			method: "GET",
			headers: {},
		}
	);

	const weatherData = await weatherResponse.json();
	return weatherData;
}

function weatherDataProcessor(weatherJSONData) {
	this.location = weatherJSONData.address;
	this.date = weatherJSONData.days[0].datetime;
	this.temperature = weatherJSONData.currentConditions.temp;
	this.conditions = weatherJSONData.currentConditions.conditions;
	this.icon = weatherJSONData.currentConditions.icon;
	this.windSpeed = weatherJSONData.currentConditions.windspeed;
	this.precipitations = weatherJSONData.currentConditions.precipprob;
}
