import { H2 } from "./components/H2";
import Paragraph from "./components/Paragraph"; //default export - no curlies
import axios from "axios";
import { $ } from "./components/$";
import { WeatherTable } from "./components/WeatherTable";
console.log("index.js loaded");

const logCurrentWeather = (response) => console.log(response.data);
onload = () => {
  document.body.appendChild(H2("Weekly forecast"));
  // document.body.appendChild(
  //   Paragraph(
  //     `I was part of something special. Jaguar shark! So tell me - does it really exist? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. God help us, we're in the hands of engineers. So you two dig up, dig up dinosaurs?`
  //   )
  // );

  //async callback
  // axios
  //   .get(connectionString)
  //   .then((response) => logCurrentWeather(response))
  //   .catch(console.error);
  // };

  //TODO: accept lat and lon coords from user and pass into connectionString
  // display 8-day dailies data in table
  // refresh render for each and every subsequent

  let labelGroupLat = $(
    "label",
    "latitude: ",
    {
      id: "latLabel",
      for: "lat",
    },
    [
      $("input", null, {
        type: "number",
        id: "lat",
      }),
    ]
  );
  document.body.appendChild(labelGroupLat);
  let labelGroupLon = $(
    "label",
    "longitude: ",
    {
      id: "lonLabel",
      for: "lon",
    },
    [
      $("input", null, {
        type: "number",
        id: "lon",
      }),
    ]
  );
  document.body.appendChild(labelGroupLon);

  let searchButton = $("button", "GET FORECAST", {
    type: "button",
    id: "find-weather",
  });
  document.body.appendChild(searchButton);
  searchButton.onclick = () => findWeather();

  function findWeather() {
    let lat = document.querySelector("#lat").value;
    let lon = document.querySelector("#lon").value;
    let main = document.querySelector("main");
    const connectionString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=d7fe376f36acedb2a2eebe9c90a2a8fb`; //JS2 key
    axios
      .get(connectionString)
      // .then((response) => console.log(response.data)) //this is where we do our async work
      .then((response) => main.appendChild(WeatherTable(response.data))) //this is where we do our async work
      // swap this out for a component that renders a table
      // based on daily weather (Array 8 objects)
      .catch(console.error);
  }
}; // end onload wrapper
