const banner = document.getElementById('banner');
const exit = document.getElementById('exit');

exit.addEventListener('click', () => {
    banner.style.display = 'none';
    document.body.classList.remove('move-down')
});

function showBanner() {
    const day = new Date().getDay();
    if (day == 1 || day == 2 || day == 3) {
        banner.style.display = 'block';
    }
}

showBanner();