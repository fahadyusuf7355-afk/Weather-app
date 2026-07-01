const searchBtn = document.getElementById("search-btn");
const weatherResult = document.getElementById("weather-result");
async function getWeather(url) {

    const response = await fetch(url);

    const data = await response.json();
    setBackground(data.weather[0].main);

    if (data.cod === "404") {
        weatherResult.innerHTML =
        "<h3>City not found</h3>";
        return;
    }

    weatherResult.innerHTML = `
        <h2>${data.name}</h2>

        <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
function setBackground(weather) {
    const body=document.body;

    if (weather === "Clear") {

        body.style.backgroundImage =
        "url('images/clear.jpg')";

    }else if (weather === "Clouds") {
body. style.backgroundImage =
"url('images/clouds.jpg')";
} else if (weather === "Rain") {
body. style.backgroundImage =
"url('images/rain.jpg')";
} else if (weather === "Drizzle") {
body.style.backgroundImage =
"url('images/drizzle.jpg')";
} else if (weather === "Mist" || weather === "Haze" ||
weather === "Fog") {
body. style.backgroundImage =
"url('images/mist.jpg')";
} else if
(weather === "Snow") {
body.style.backgroundImage =
"url('images/snow.jpg')";
} else if (weather === "Thunderstorm") {
body. style.backgroundImage =
"url('images/thunderstorm.jpg')";
} else {
body.style.backgroundImage = "url('images/default.jpg')";}
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundAttachment = "fixed";
body.style. transition = "background-image 0.5s ease-in-out"

}

searchBtn.addEventListener("click", async () => {

    try {

        const city = document.getElementById("city").value;

        const apiKey = "c532690cea77f1b3141fcf26ea3539a2";

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        weatherResult.innerHTML =
"<h3>Getting your city...</h3>";
await getWeather(url);

       
        

    } catch (error) {

        weatherResult.innerHTML =
        "<h3>Something went wrong</h3>";

        console.log(error);
    }

});
document
.getElementById("city")
.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});
const locationBtn =
document.getElementById("location-btn");
locationBtn.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(async(position) => {

        const latitude = position.coords.latitude;
const longitude = position.coords.longitude;

const apiKey = "c532690cea77f1b3141fcf26ea3539a2";

const url =
`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

weatherResult.innerHTML =
"<h3>Getting your location...</h3>";

await getWeather(url);

    });

});
