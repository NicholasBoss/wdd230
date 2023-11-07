let count = 5;
let countdown = setInterval(function() {
    count--;
    document.querySelector('.count-down').textContent = count;
    if (count === 0) {
        clearInterval(countdown);
        window.location.href = "index.html";
    }
}, 1000);


