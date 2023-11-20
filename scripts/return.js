const returnButton = document.querySelector('#return-button');

returnButton.addEventListener('click', () => {
    window.history.back();
});
