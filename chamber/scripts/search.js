const searchBtn = document.querySelector('#search');
const overlay = document.querySelector('.overlay');

function openSearch() {
    overlay.style.display = 'block';
    searchBtn.style.display = 'none';
}

function closeSearch() {
    overlay.style.display = 'none';
    searchBtn.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    openSearch();
});

