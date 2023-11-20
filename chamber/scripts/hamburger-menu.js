const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const search = document.querySelector('#search');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	search.classList.toggle('hide');
});