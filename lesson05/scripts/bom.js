const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value == '') {
        input.focus();
        return;
    }
    let li = document.createElement('li');
    let deleteButton = document.createElement('button'); 
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', () => {
        li.remove();
    })
    input.focus();
    input.value = '';
});