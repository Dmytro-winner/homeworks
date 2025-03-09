$(document).ready(function() {
    $('#getWeather').click(function() {
        var city = $('#city').val();
        if(city) {
            var apiKey = '5d066958a60d315387d9492393935c19';
            var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

            // Виконуємо AJAX-запит до API OpenWeather
            $.ajax({
                url: apiUrl,
                method: 'GET',
                success: function(data) {
                    var weatherInfo = `
                        <h3>Погода в місті: ${data.name}</h3>
                        <p>Температура: ${data.main.temp}°C</p>
                        <p>Тиск: ${data.main.pressure} гПа</p>
                        <p>Опис: ${data.weather[0].description}</p>
                        <p>Вологість: ${data.main.humidity}%</p>
                        <p>Швидкість вітру: ${data.wind.speed} м/с</p>
                        <p>Напрямок вітру: ${data.wind.deg}°</p>
                        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">
                    `;
                    $('#weatherResult').html(weatherInfo);
                },
                error: function() {
                    $('#weatherResult').html('<p>При завантаженні виникла помилка</p>');
                }
            });
        } else {
            $('#weatherResult').html('<p>Будь ласка, введіть назву міста</p>');
        }
    });
});