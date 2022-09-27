//assign
var historyContainer = $("#historyContainer");
var searchBar = $("#bar");
var searchBtn = $("#searchBtn");
var infoContainer = $("#infoContainer");
var fiveDay = $("#5day");
var apiForecast = "https://api.openweathermap.org/data/2.5/forecast?";
var latLong = "https://api.openweathermap.org/geo/1.0/direct?q=";
var apiKey = "&appid=039d31a585aa282d08ff4a2d89c81fe9";
//search input

function searchLatLong() {
  cityName = searchBar.val().trim();
  fetch(latLong + cityName + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var latt = 'lat' + data[0].lat
      var longg = '&lon' + data[0].lon
    });
}

function search

searchBtn.on("click", searchLatLong);
