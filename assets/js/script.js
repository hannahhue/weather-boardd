var apiForecast = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "bae3b25e0cbb2d09fb32215030ed2ee9";

//assign
var historyContainer = $("#historyContainer");
var searchBar = $("#bar");
var searchBtn = $("#searchBtn");
var infoContainer = $("#infoContainer");
var fiveDay = $("#5day");

//search input
//grabbing city in from api and turning into string
function searchWeather() {
  var cityName = searchBar.val().trim();
  fetch(apiForecast + cityName + "&units=metric&appid=" + apiKey)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
    });
}

//api key wont work to intput info
//should input info into container
function displayWeather(data) {
  //present
  //wind
  var wind = $("<p>");
  wind.text(data.wind.speed + " Wind Speed.");
  infoContainer.append(wind);
  //icon
  if (data.wind.speed < 15) {
    infoContainer.append("🎏");
  } else {
    infoContainer.append("🍃");
  }

  //temp
  var temp = $("<p>");
  temp.text(data.main.feels_like + " Degrees.");
  infoContainer.append(temp);

  //humidity
  var humid = $("<p>");
  humid.text(data.main.humidity + " Humidity.");
  infoContainer.append(humid);
}

// function displayWeatherFiveDay(data) {
//   //5days
//   //wind
//   var wind = $("<p>");
//   wind.text(data.wind.speed + " Wind Speed.");
//   infoContainer.append(wind);
//   //icon
//   if (data.wind.speed < 15) {
//     infoContainer.append("🎏");
//   } else {
//     infoContainer.append("🍃");
//   }

//   //temp
//   var temp = $("<p>");
//   temp.text(data.main.feels_like + " Degrees.");
//   infoContainer.append(temp);

//   //humidity
//   var humid = $("<p>");
//   humid.text(data.main.humidity + " Humidity.");
//   infoContainer.append(humid);
// }

function saveHistory(cityName, latt, longg) {
  //saving local storage of searched cities
  var history = {
    cityName,
    latt,
    longg,
  };

  localStorage.setItem(cityName, JSON.stringify(history));
}

function displayHistory() {
  if (localStorage.length === 0) {
  } else {
    for (i = 0; i < localStorage.length; i++) {}
  }
  //call local storage display under bar
  //if clicked brings to that city ect
}

// function callHistory() {}

//search button calling functions
searchBtn.on("click", searchWeather);

//on.clickbtn for history container any button within container will call
