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

const temperatureSpan = document.getElementById('temperature');
const windSpeedSpan = document.getElementById('wind-speed');
const temperature = parseInt(temperatureSpan.textContent);
const windSpeed = parseInt(windSpeedSpan.textContent);

showWindChill(temperature, windSpeed);