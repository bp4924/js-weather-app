import "./style.css";
import { getWeather } from "./weather";

getWeather(34, -84, Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert("Error getting weather data");
  });

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  /*renderDailyWeather(daily);
  renderHourlyWeather(hourly);
  */
  document.body.classList.remove("blurred");
}

// data selector helper function
function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

// Icon path selector helper
function getIconUrl(iconCode) {
  return "icons/${iconCode}.svg";
}

function renderCurrentWeather(current) {
  setValue("current-temp", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-low", current.lowTemp);
  setValue("current-precip", current.precip);
  setValue("current-fl-high", current.highFeelsLike);
  setValue("current-fl-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
  //  setValue("icon");
}
/*  renderDailyWeather(daily);
  renderHourlyWeather(hourly);*/
