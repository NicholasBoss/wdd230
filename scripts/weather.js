const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44&lon=-111&appid=413936b8ac9583c3c6d84d336fe47165&units=imperial'

function displayWeather(weatherData){
    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    const desc = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed.toFixed(0);
    const temperature = weatherData.main.temp.toFixed(0);

    currentTemp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind`;
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