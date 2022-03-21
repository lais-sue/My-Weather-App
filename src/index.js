function showWeather(response) {
  console.log(response);
  let showCity = response.data.name;
  document.querySelector("#city").innerHTML = showCity;
  let showTemperature = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = showTemperature;
  let showHumidity = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = showHumidity;
  let showWind = response.data.wind.speed;
  document.querySelector("#wind").innerHTML = showWind;
  let showSky = response.data.weather[0].main;
  document.querySelector("#sky-condition").innerHTML = showSky;
  let showTempFeeling = response.data.main.feels_like;
  document.querySelector(
    "#feels-like"
  ).innerHTML = `Feels like: ${showTempFeeling}`;
}

function searchCity(city) {
  let apiKey = "bc9c173a3ba1b56ece5993ed8c0643da";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "bc9c173a3ba1b56ece5993ed8c0643da";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let weekDays = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[weekDays];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
