const searchBtn = document.querySelector('#search');
const overlay = document.querySelector('.overlay');

function openSearch() {
    overlay.style.display = 'block';
    searchBtn.classList.toggle('hide');
}

function closeSearch() {
    overlay.style.display = 'none';
    searchBtn.classList.toggle('hide');
}

searchBtn.addEventListener('click', () => {
    openSearch();
});

