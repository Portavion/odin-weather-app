import "./styles.css";
import { fetchWeather, weatherDataProcessor } from "./weather.js";

const weatherJSON = await fetchWeather("london");
console.log(weatherJSON);

let weatherData = new weatherDataProcessor(weatherJSON);

console.log("Processed data");
console.log(weatherData);
