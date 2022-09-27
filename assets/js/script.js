//assign
var historyContainer = $("#historyContainer");
var searchBar = $("#bar");
var searchBtn = $("#searchBtn");
var infoContainer = $("#infoContainer");
var fiveDay = $("#5day");
//"unauthorized key wont display ect error....401"
var apiForecast = "https://api.openweathermap.org/data/3.0/onecall?";
var latLong = "https://api.openweathermap.org/geo/1.0/direct?q=";
var apiKey = "&appid=039d31a585aa282d08ff4a2d89c81fe9";
//search input

//starting function when clicked search button
//takes info from searchbar and input into string
function searchLatLong() {
  cityName = searchBar.val().trim();
  fetch(latLong + cityName + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var latt = "lat" + data[0].lat;
      var longg = "&lon" + data[0].lon;
      searchWeather(cityName, latt, longg);
    });
}

//called to start from prior function
//inputs data into string and generates info
function searchWeather(cityName, latt, longg) {
  fetch(apiForecast + latt + longg + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
    });
}

//api key wont work to intput info
//should input info into container
function displayWeather(cityInfo) {}

searchBtn.on("click", searchLatLong);
