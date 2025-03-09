document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = "5d066958a60d315387d9492393935c19";
    if (!city) {
        alert("Будь ласка, введіть місто!");
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Місто не знайдено");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>Погода в місті ${data.name}</h2>
                <p><strong>Температура:</strong> ${data.main.temp} °C</p>
                <p><strong>Тиск:</strong> ${data.main.pressure} hPa</p>
                <p><strong>Опис:</strong> ${data.weather[0].description}</p>
                <p><strong>Вологість:</strong> ${data.main.humidity} %</p>
                <p><strong>Швидкість вітру:</strong> ${data.wind.speed} м/с</p>
                <p><strong>Напрямок вітру:</strong> ${data.wind.deg}°</p>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Icon">
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
            document.getElementById("error").innerHTML = '';
        })
        .catch(error => {
            document.getElementById("error").innerHTML = `<p style="color:red;">${error.message}</p>`;
            document.getElementById("weatherInfo").innerHTML = '';
        });
});