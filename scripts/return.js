let count = 5;
document.querySelector('.count-down').textContent = count;
let countdown = setInterval(function() {
    count--;
    document.querySelector('.count-down').textContent = count;
    if (count === 0) {
        clearInterval(countdown);
        window.location.href = "chamber/index.html";
    }
}, 1000);