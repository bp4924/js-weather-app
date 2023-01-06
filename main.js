import "./style.css";
import { getWeather } from "./weather";

getWeather(34, -84, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (data) => {
    console.log(data);
  }
);
