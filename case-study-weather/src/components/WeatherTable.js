import { $ } from "./$";

export const WeatherTable = (weather) => {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let tr3 = document.createElement("tr");
  let tdLatLon = $("th", `search for lat: ${weather.lat} lon: ${weather.lon}`, {
    colspan: 4,
  });
  let tdTimeZone = $("th", `timezone: ${weather.timezone}`, {
    colspan: 4,
  });
  tr1.appendChild(tdLatLon);
  tr1.appendChild(tdTimeZone);
  thead.appendChild(tr1);
  //   console.log(weather.daily[0].weather[0].description);//testing
  //   console.log(weather.daily[1].weather[0].description);
  //   console.log(weather.daily[2].weather[0].description);
  //   console.log(weather.daily[3].weather[0].description);
  //   console.log(weather.daily[4].weather[0].description);
  //   console.log(weather.daily[5].weather[0].description);
  //   console.log(weather.daily[6].weather[0].description);
  //   console.log(weather.daily[7].weather[0].description);
  // helper function to render day in words
  const calcDay = (weather, index) => {
    let milis = weather.daily[index].dt * 1000;
    let date = new Date(milis);
    let day = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
      date
    );
    return day;
  };
  for (let i = 0; i < weather.daily.length; i++) {
    //append DAY to row 2
    tr2.appendChild($("td", `${calcDay(weather, i)}`));
    //append desciption to row 3
    tr3.appendChild($("td", `${weather.daily[i].weather[0].description}`));
  }
  tbody.appendChild(tr2);
  tbody.appendChild(tr3);
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
};
