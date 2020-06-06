// API OBJECT
const api = {
    key: "55a539ce4fb64989fe8e9c476b486c21",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

// WEATHER DATA OBJECT
const weather = {};

const notificationElement = document.querySelector(".notification");

// EVENT LISTENER TO GET AND SET WEATHER DEPENDING ON COORDINATES
window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            fetch(`${api.baseurl}weather?lat=${lat}&lon=${long}&units=metric&appid=${api.key}`)
                .then(weather => {
                    return weather.json();
                }).then(displayResults);
        }, showError);
    }
});

// ERROR MESSAGE FOR DENIED GEOLOCATION
function showError() {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>User denied geolocation.</p>`;
}

// SEARCH INPUT SELECTION AND KEYPRESS EVENT LISTENER
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keypress", setQuery);

// EVENT LISTENER FOR SEARCH INPUT
function setQuery(e) {
    if (e.key === "Enter") {
        getResults(searchInput.value);
        searchInput.value = "";
    }
}

// API FETCH FUNCTION
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp);
        }).then(displayResults)
}

// DISPLAY RESULTS FUNCTION TO CHANGE DISPLAYED HTML TEXT
function displayResults(weather) {
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weatherEl = document.querySelector(".current .weather");
    weatherEl.innerText = weather.weather[0].main;
}

// DATE BUILDER FUNCTION
function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

// TOGGLE BUTTON ELEMENTS
const tempToggle = document.querySelector(".met-imp-toggle");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");

// TEMPERATURE ELEMENTS
const temp = document.querySelector(".current .temp").innerText.substring(0, 2);
console.log(temp);

// EVENT LISTENER ON TEMPERATURE BUTTON


// CELSIUS TO FAHRENHEIT CONVERT FUNCTION
function tempConvert() {
    let convert = (temp * 9 / 5) + 32;
    temp.innerText = `${(Math.round(convert))}`;
}

function printResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(weather => {
            return (weather.json());
        })
}