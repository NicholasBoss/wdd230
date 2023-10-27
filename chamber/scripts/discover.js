const LAST_VISIT_DATE_KEY = 'last-visit'
const DAY_IN_MILLIS = 24 * 60 * 60 * 1000

// Create function for updating the visit message
function updateVisitMessage() {
    let message = 'Welcome to the Chamber of Commerce!'
    let lastVisitDate = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date()
    if (lastVisitDate != null) {
        let lastVisit = parseInt(lastVisitDate)
        let daysSinceLastVisit = Math.floor((today.getTime() - lastVisit) / DAY_IN_MILLIS)
        if (daysSinceLastVisit === 0) {
            message = 'Back so soon? Awesome!'
        }
         else{
            if (daysSinceLastVisit == 1){
                message = "You last visited 1 day ago."
            } else{
                message = `Welcome back! It's been ${daysSinceLastVisit} days since you last visited.`
            }
        }
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
    return message
}

// Update the visit message
document.querySelector("#visit-msg h3").textContent = updateVisitMessage()
