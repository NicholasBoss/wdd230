// Create a key
const VISITS_KEY = 'site-visits'

function getSiteVisits(){
    // Check to see if the key exists in local storage
    let currentValue = localStorage.getItem(VISITS_KEY)
    // If the key doesn't exist, initialize the key to 1
    let siteVisits = 1

    if (currentValue != null){
        // If the key does exist, add one to the current value
        siteVisits = parseInt(currentValue) + 1
    }
    // Save the new value for current visits
    localStorage.setItem(VISITS_KEY, `${siteVisits}`)
    return siteVisits
}
// Update the HTML with current page visits
document.getElementById('visits').textContent = `${getSiteVisits()}`
