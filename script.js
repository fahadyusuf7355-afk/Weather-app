const apiKey = "c532690cea77f1b3141fcf26ea3539a2";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

  const city = document.getElementById("cityInput").value;

  if(city === ""){
    alert("Please enter a city name");
    return;
  }

  getWeather(city);

});

async function getWeather(city){

  try{

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if(data.cod == "404"){

      alert("City not found");

      return;
    }

    document.getElementById("cityName").innerText =
    data.name;

    document.getElementById("temperature").innerText =
    `Temperature: ${data.main.temp}°C`;

    document.getElementById("description").innerText =
    `Weather: ${data.weather[0].description}`;

    document.getElementById("humidity").innerText =
    `Humidity: ${data.main.humidity}%`;

    document.getElementById("wind").innerText =
    `Wind Speed: ${data.wind.speed} km/h`;const weatherCondition =
data.weather[0].main;

if(weatherCondition == "Clear"){

  document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')";

}

else if(weatherCondition == "Rain"){

  document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";

}

else if(weatherCondition == "Clouds"){

  document.body.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";

}

else{

  document.body.style.background =
  "linear-gradient(135deg,#4facfe,#00f2fe)";

}
const emoji = document.createElement("h1");

if(weatherCondition == "Clear"){
  emoji.innerText = "☀";
}

else if(weatherCondition == "Rain"){
  emoji.innerText = "🌧";
}

else if(weatherCondition == "Clouds"){
  emoji.innerText = "☁";
}

document.querySelector(".weather-box").prepend(emoji);

  }

  catch(error){

  console.log(error);

  alert(error.message);

}

}