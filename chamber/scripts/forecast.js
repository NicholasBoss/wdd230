const flat = 51.51867721800869
const flon = -0.07458780605399286
const fapikey = `413936b8ac9583c3c6d84d336fe47165`
const forcasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${flat}&lon=${flon}&appid=${fapikey}&units=imperial`

const ONE_DAY = 24 * 60 * 60 * 1000

function displayForecast(forecastData){
    // get weather forcast for three days based on the current date

    // Update this URL to your API call URL to openweather
    let dates = []
    let mydate = new Date();
    for (let i=0; i < 3; i++){
        mydate = new Date(mydate.getTime() + ONE_DAY)
        nextdate = mydate.toISOString().slice(0, 10)
        dates.push(nextdate)
    }
    console.log(dates)
    // Find the object with the highest temperature for each day
    highTemps = dates.map((date) => forecastData
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((prev, next) => prev.main.temp > next.main.temp ? prev : next)
    )    
    // Find the object with the lowest temperature for each day
    lowTemps = dates.map((date) => forecastData
        .filter(x => x.dt_txt.startsWith(date))
        .reduce((prev, next) => prev.main.temp < next.main.temp ? prev : next)        
    )    
    console.log(highTemps)
    console.log(lowTemps)
    // Add the forecast information to the HTML document
    weatherElt = document.querySelector("body .forecast .days")

    // change dates to Day of week , month, day
    dates = dates.map((date) => {
        let mydate = new Date(date)
        const newdate = `${mydate.toLocaleString('en-US', {weekday: 'long'})} ${mydate.toLocaleString('en-US', {month: 'long'})} ${mydate.toLocaleString('en-US', {day: 'numeric'})}, ${mydate.toLocaleString('en-US', {year: 'numeric'})}`
        return newdate
    })


    for (let i=0; i < 3; i++){
        let newsection = document.createElement("section");
        newsection.classList.add("day-card");
        newsection.innerHTML = `<h4>${dates[i]}</h4><p>High: ${highTemps[i].main.temp.toFixed(0)}&deg;</p><p>Low: ${lowTemps[i].main.temp.toFixed(0)}&deg;</p>`
        weatherElt.append(newsection)
    }    
}


async function getForcastData(){
    try {
        const response = await fetch(forcasturl);
        if (response.ok){
            const fdata = await response.json();
            displayForecast(fdata.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getForcastData();