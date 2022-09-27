//"unauthorized key wont display ect error....401"
var apiForecast = "https://api.openweathermap.org/2.5/weather?q=";
var latLong = "https://api.openweathermap.org/geo/1.0/direct?q=";
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
  fetch(apiForecast + cityName + "&units=imparial&appid=" + apiKey)
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
function displayWeather(cityInfo) {
  //present
  //icon
  //temp
  //humidity
  //wind
  //5days
  //icon
  //temp
  //humidity
  //wind
}

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

function callHistory() {}

//search button calling functions
searchBtn.on("click", searchLatLong);

//on.clickbtn for history container any button within container will call
