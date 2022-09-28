//assign api and key
var apiForecast = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "bae3b25e0cbb2d09fb32215030ed2ee9";
var apiFiveDay = "https://api.openweathermap.org/data/2.5/forecast?";

//assign
var historyContainer = $("#historyContainer");
var searchBar = $("#bar");
var searchBtn = $("#searchBtn");
var infoContainer = $("#infoContainer");
var fiveDay = $("#5day");
var moment = moment();

//search input
//grabbing city in from api and turning into string
function searchWeather() {
  var cityName = searchBar.val().trim();
  fetch(apiForecast + cityName + "&units=metric&appid=" + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
      searchFiveDay(data, cityName);
      saveHistory(cityName, data);
    });
}

//five day cast
function searchFiveDay(current) {
  fetch(
    `${apiFiveDay}lat=${current.coord.lat}&lon=${current.coord.lon}&cnt=5&units=metric&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeatherFiveDay(data);
    });
}

//api key wont work to intput info
//should input info into container
function displayWeather(data) {
  infoContainer.children().remove();

  //get name of city plus date
  var cityNameInput = $("<h2>");
  cityNameInput.text(data.name);
  infoContainer.append(cityNameInput);

  //wind icon plus current day weather and boot
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

//five day cast inputs
function displayWeatherFiveDay(data, cityName) {
  fiveDay.children().remove();
  var day = data.list;
  //bootstrap
  for (i = 0; i < day.length; i++) {
    var cityNameInput = $("<h2>");
    var cardlidate = $("<h3>");
    var card = $("<div>");
    var cardul = $("<ul>");
    var cardliwind = $("<li>");
    var cardlitemp = $("<li>");
    var cardlihumid = $("<li>");

    //place city name/date
    cityNameInput.text(data.city.name);
    cardlidate.text(day[i].dt_txt);

    //bootstrabcards
    card.addClass("card col-4");
    cardul.addClass("list-group list-group-flush");
    cardlihumid.addClass("list-group-item");
    cardliwind.addClass("list-group-item");
    cardlitemp.addClass("list-group-item");
    card.append(cityNameInput);
    card.append(cardlidate);
    card.append(cardul);
    cardul.append(cardlihumid);
    cardul.append(cardlitemp);
    cardul.append(cardliwind);
    //load info into correct container
    fiveDay.append(card);

    cardliwind.text(day[i].wind.speed + " Wind Speed.");
    //icon
    if (day[i].wind.speed < 15) {
      card.append("🎏");
    } else {
      card.append("🍃");
    }

    //temp
    cardlitemp.text(day[i].main.feels_like + " Degrees.");

    //humidity
    cardlihumid.text(day[i].main.humidity + " Humidity.");
  }
}

function saveHistory(cityName, data) {
  //saving local storage of searched cities
  var history = {
    cityName,
    latt: data.coord.lat,
    longg: data.coord.lon,
  };

  localStorage.setItem(cityName, JSON.stringify(history));

  displayHistory();
}

function displayHistory() {
  if (localStorage.length === 0) {
  } else {
    for (i = 0; i < localStorage.length; i++) {
      var historyBtn = $("<button>");
      var currentKey = localStorage.key(i);
      var currentCity = JSON.parse(localStorage.getItem(currentKey));
      historyBtn.text(currentCity.cityName);
      historyBtn.addClass("btn history");
      historyContainer.append(historyBtn);
    }
  }
}

//clicked old history btns fuinction

function historySearch() {
  var cityTo = $(this).text();
  searchWeatherHistory(cityTo);
}

function searchWeatherHistory(cityName) {
  fetch(apiForecast + cityName + "&units=metric&appid=" + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data);
      searchFiveDay(data, cityName);
    });
}

//history bbuttons
historyContainer.on("click", ".history", historySearch);

//search button calling functions
searchBtn.on("click", searchWeather);
