const apiKey = '2b026ba6632ac5a9f773709fed6dffe4';
const city = 'Guri-si';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=kr&units=metric`
fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('temp').textContent = data.main.temp;
        document.getElementById('feels_like').textContent = data.main.feels_like;
        document.getElementById('temp_min').textContent = data.main.temp_min;
        document.getElementById('temp_max').textContent = data.main.temp_max;
        document.getElementById('pressure').textContent = data.main.pressure;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('wind_speed').textContent = data.wind.speed;
        document.getElementById('wind_deg').textContent = data.wind.deg;
        document.getElementById('clouds').textContent = data.clouds.all;
    })
.catch(error => console.error('Error fetching the weather data:', error));