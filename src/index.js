import "./styles.css";
import { fetchWeather, weatherDataProcessor } from "./weather.js";
import { searchNewGif } from "./searchGif.js";

let weatherJSON = await fetchWeather("london");
let weatherData = new weatherDataProcessor(weatherJSON);
displayWeatherData(weatherData);

const locationSearchForm = document.querySelector("form");
locationSearchForm.addEventListener("submit", searchLocation);

async function searchLocation(event) {
	const locationSearched = document.getElementById("location");

	if (locationSearched === "") {
		event.preventDefault();
	} else {
		event.preventDefault();
		weatherJSON = await fetchWeather(locationSearched.value);
		locationSearched.value = "";
		weatherData = new weatherDataProcessor(weatherJSON);
		displayWeatherData(weatherData);
	}
}

async function displayWeatherData(weatherData) {
	const dataContainer = document.querySelector(".data-container");
	dataContainer.innerHTML = "";

	const location = document.createTextNode(
		"Location: " + weatherData.location
	);
	const date = document.createTextNode("Date: " + weatherData.date);
	const temperature = document.createTextNode(
		"Temp: " + weatherData.temperature
	);
	const conditionsGifUrl = await searchNewGif(weatherData.conditions);
	const conditions = document.createTextNode(
		"Conditions: " + weatherData.conditions
	);

	const windSpeed = document.createTextNode(
		"Wind Speed: " + weatherData.windSpeed
	);
	const precipitations = document.createTextNode(
		"Precipitation Chance: " + weatherData.precipitations + "%"
	);

	const locationDiv = document.createElement("div");
	locationDiv.className = "location-field";
	locationDiv.appendChild(location);

	const dateDiv = document.createElement("div");
	dateDiv.className = "date-field";
	dateDiv.appendChild(date);

	const temperatureDiv = document.createElement("div");
	temperatureDiv.className = "temperature-field";
	temperatureDiv.appendChild(temperature);

	const conditionsImg = document.createElement("img");
	const conditionsDiv = document.createElement("div");
	conditionsDiv.className = "conditions-div";
	conditionsDiv.appendChild(conditions);
	conditionsImg.className = "conditions-gif";
	conditionsImg.src = conditionsGifUrl;

	const windSpeedDiv = document.createElement("div");
	windSpeedDiv.className = "wind-speed-field";
	windSpeedDiv.appendChild(windSpeed);

	const precipitationsDiv = document.createElement("div");
	precipitationsDiv.className = "precipitations-field";
	precipitationsDiv.appendChild(precipitations);

	dataContainer.append(locationDiv);
	dataContainer.append(dateDiv);
	dataContainer.append(temperatureDiv);
	dataContainer.append(windSpeedDiv);
	dataContainer.append(precipitationsDiv);
	dataContainer.append(conditionsDiv);
	dataContainer.append(conditionsImg);
}
