const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const currTemp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const currDate = document.querySelector('#date');


const lat = 51.51867721800869
const lon = -0.07458780605399286
const apikey = `413936b8ac9583c3c6d84d336fe47165`
const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`

function capatalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function showWindChill(temp, speed) {
    const windchillSpan = document.getElementById('wind-chill');
    let message = 'N/A';
    if (temp <= 50 && speed > 3){
        let chillfactor = Math.pow(speed, 0.16);
        let chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));
        message = `${chill}`;
    }

    windchillSpan.textContent = message;
}

function displayWeather(weatherData){
    const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    const weatherdesc = weatherData.weather[0].description;
    const desc = capatalize(weatherdesc);
    const feelsLike = weatherData.main.feels_like.toFixed(0);
    const windSpeed = weatherData.wind.speed.toFixed(0);
    const temperature = weatherData.main.temp.toFixed(0);
    const date = new Date(weatherData.dt * 1000);

    showWindChill(temperature, windSpeed)
    
    currDate.innerHTML = `${date.toLocaleString('en-US', {weekday: 'long'})} ${date.toLocaleString('en-US', {month: 'long'})} ${date.toLocaleString('en-US', {day: 'numeric'})},  ${date.toLocaleString('en-US', {year: 'numeric'})}`;
    currentTemp.innerHTML = `Feels like: ${feelsLike}&deg;F`;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `${desc}`;
    currTemp.innerHTML = `${temperature}`;
    speed.innerHTML = `${windSpeed}`;
}



async function getWeatherData(){
    try {
        const response = await fetch(weatherurl);
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
