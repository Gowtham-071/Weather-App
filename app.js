const apiKey = "82005d27a116c2880c8f0fcb866998a0";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").innerText = `${Math.round(data.main.temp)} °C`;
      document.getElementById("description").innerText = data.weather[0].description;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      alert("Error fetching weather data");
      console.error(error);
    });
}
