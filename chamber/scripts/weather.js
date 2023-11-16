const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const currTemp = document.querySelector('#temperature');
const speed = document.querySelector('#wind-speed');
const currDate = document.querySelector('#date');
const forcastDate1 = document.querySelector('#forcast-date1');
const forcastDate2 = document.querySelector('#forcast-date2');
const forcastDate3 = document.querySelector('#forcast-date3');
const forcastIcon1 = document.querySelector('#forcast-icon1');
const forcastIcon2 = document.querySelector('#forcast-icon2');
const forcastIcon3 = document.querySelector('#forcast-icon3');
const forcastDesc1 = document.querySelector('#forcast-desc1');
const forcastDesc2 = document.querySelector('#forcast-desc2');
const forcastDesc3 = document.querySelector('#forcast-desc3');
const forcastTemp1 = document.querySelector('#forcast-temp1');
const forcastTemp2 = document.querySelector('#forcast-temp2');
const forcastTemp3 = document.querySelector('#forcast-temp3');

const lat = 51.51867721800869
const lon = -0.07458780605399286
const apikey = `413936b8ac9583c3c6d84d336fe47165`
const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`
const forcasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`

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

function displayForcast(forcastData){
    // get weather forcast for three days based on the current date

    const forcastDataList1 = forcastData.list[0];
    const forcastDataList2 = forcastData.list[8];
    const forcastDataList3 = forcastData.list[16];

    const icon1 = `https://openweathermap.org/img/wn/${forcastDataList1.weather[0].icon}.png`
    const icon2 = `https://openweathermap.org/img/wn/${forcastDataList2.weather[0].icon}.png`
    const icon3 = `https://openweathermap.org/img/wn/${forcastDataList3.weather[0].icon}.png`
    const forcastdesc1 = forcastDataList1.weather[0].description;
    const forcastdesc2 = forcastDataList2.weather[0].description;
    const forcastdesc3 = forcastDataList3.weather[0].description;
    const desc1 = capatalize(forcastdesc1);
    const desc2 = capatalize(forcastdesc2);
    const desc3 = capatalize(forcastdesc3);
    const windSpeed1 = forcastDataList1.wind.speed.toFixed(0);
    const windSpeed2 = forcastDataList2.wind.speed.toFixed(0);
    const windSpeed3 = forcastDataList3.wind.speed.toFixed(0);
    const temperature1 = forcastDataList1.main.temp.toFixed(0);
    const temperature2 = forcastDataList2.main.temp.toFixed(0);
    const temperature3 = forcastDataList3.main.temp.toFixed(0);
    const date1 = new Date(forcastDataList1.dt * 1000);
    const date2 = new Date(forcastDataList2.dt * 1000);
    const date3 = new Date(forcastDataList3.dt * 1000);

    forcastDate1.innerHTML = `${date1.toLocaleString('en-US', {weekday: 'long'})} ${date1.toLocaleString('en-US', {month: 'long'})} ${date1.toLocaleString('en-US', {day: 'numeric'})},  ${date1.toLocaleString('en-US', {year: 'numeric'})} ${date1.toLocaleString('en-US', {hour: 'numeric'})}`;
    forcastDate2.innerHTML = `${date2.toLocaleString('en-US', {weekday: 'long'})} ${date2.toLocaleString('en-US', {month: 'long'})} ${date2.toLocaleString('en-US', {day: 'numeric'})},  ${date2.toLocaleString('en-US', {year: 'numeric'})} ${date2.toLocaleString('en-US', {hour: 'numeric'})}`;
    forcastDate3.innerHTML = `${date3.toLocaleString('en-US', {weekday: 'long'})} ${date3.toLocaleString('en-US', {month: 'long'})} ${date3.toLocaleString('en-US', {day: 'numeric'})},  ${date3.toLocaleString('en-US', {year: 'numeric'})} ${date3.toLocaleString('en-US', {hour: 'numeric'})}`;

    forcastIcon1.setAttribute('src', icon1);
    forcastIcon2.setAttribute('src', icon2);
    forcastIcon3.setAttribute('src', icon3);

    forcastDesc1.innerHTML = `${desc1}`;
    forcastDesc2.innerHTML = `${desc2}`;
    forcastDesc3.innerHTML = `${desc3}`;

    forcastTemp1.innerHTML = `${temperature1}&deg;F | ${windSpeed1} mph wind`;
    forcastTemp2.innerHTML = `${temperature2}&deg;F | ${windSpeed2} mph wind`;
    forcastTemp3.innerHTML = `${temperature3}&deg;F | ${windSpeed3} mph wind`;


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

async function getForcastData(){
    try {
        const response = await fetch(forcasturl);
        if (response.ok){
            const fdata = await response.json();
            displayForcast(fdata);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getWeatherData();
getForcastData();