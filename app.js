$(document).ready(function() {
  let apiKey = "5d066958a60d315387d9492393935c19";
  let city = "LVIV";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apiKey;

  $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: "json",
    success: function(data) {
      let temperature = data.main.temp;
      let pressure = data.main.pressure;
      let description = data.weather[0].description;
      let humidity = data.main.humidity;
      let windSpeed = data.wind.speed;
      let windDirection = data.wind.deg;
      let iconCode = data.weather[0].icon;
      let iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";

      let weatherHTML = "<p>Температура: " + temperature + "°C</p>";
      weatherHTML += "<p>Тиск: " + pressure + " гПа</p>";
      weatherHTML += "<p>Опис: " + description + "</p>";
      weatherHTML += "<p>Вологість: " + humidity + "%</p>";
      weatherHTML += "<p>Швидкість вітру: " + windSpeed + " м/с</p>";
      weatherHTML += "<p>Напрям вітру: " + windDirection + "°</p>";
      weatherHTML += "<img src='" + iconUrl + "' alt='Погодний значок'>";

      $("#weather").html(weatherHTML);
    },
    error: function(error) {
      console.log("Помилка при отриманні погоди:", error);
    }
  });
});