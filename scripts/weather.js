const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const locationName = document.querySelector('#location-name')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82322285850488&lon=-111.7919498662657&appid=413936b8ac9583c3c6d84d336fe47165&units=imperial'

function capatalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function displayWeather(weatherData){
    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    const weatherdesc = weatherData.weather[0].description;
    const desc = capatalize(weatherdesc);
    const feelsLike = weatherData.main.feels_like.toFixed(0);
    const windSpeed = weatherData.wind.speed.toFixed(0);
    const temperature = weatherData.main.temp.toFixed(0);
    const city = weatherData.name;

    locationName.innerHTML = `${city}`;
    currentTemp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind | Feels like ${feelsLike}&deg;F`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `${desc}`;
}

async function getWeatherData(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getWeatherData();