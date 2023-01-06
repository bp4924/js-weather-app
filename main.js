import "./style.css";
import { getWeather } from "./weather";
import { ICON_MAP } from "./iconMap";

getWeather(34, -84, Intl.DateTimeFormat().resolvedOptions().timeZone)
  .then(renderWeather)
  .catch((e) => {
    console.error(e);
    alert("Error getting weather data");
  });

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  renderDailyWeather(daily);
  /*renderHourlyWeather(hourly);
   */
  document.body.classList.remove("blurred");
}

// data selector helper function
function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

// Icon path selector helper
function getIconUrl(iconCode) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon");
function renderCurrentWeather(current) {
  currentIcon.src = getIconUrl(current.iconCode);
  setValue("current-temp", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-low", current.lowTemp);
  setValue("current-precip", current.precip);
  setValue("current-fl-high", current.highFeelsLike);
  setValue("current-fl-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const dailySection = document.querySelector("[data-day-section] ");
const dayCardTemplate = document.getElementById("day-card-template");
function renderDailyWeather(daily) {
  dailySection.innerHTML = "";
  daily.forEach((day) => {
    const element = dayCardTemplate.content.cloneNode(true);
    setValue("temp", day.maxTemp, { parent: element });
    setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: element });
    element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
    dailySection.append(element);
  });
}
//  renderHourlyWeather(hourly);
