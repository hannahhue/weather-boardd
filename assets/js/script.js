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
      //send info to both functions
      searchWeather(cityName, latt, longg);
      saveHistory(cityName, latt, longg);
    });
}
console.log();

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
