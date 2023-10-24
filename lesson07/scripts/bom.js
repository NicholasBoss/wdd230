const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chapters = getChapterList() || [];

chapters.forEach(createItem);

function getChapterList() {
    const chapterList = localStorage.getItem('chapters');
    if (chapterList == null) {
        return null;
    } 
    return JSON.parse(chapterList);
}

function updateLocalStorage() {
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

function createItem(chapter) {
    let listitem = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    listitem.appendChild(deleteButton);
    list.append(listitem);
    deleteButton.addEventListener('click', () => {
        listitem.remove();
        chapters.splice(chapters.indexOf(chapter), 1);
        updateLocalStorage();
    })
    chapters.push(chapter);
    updateLocalStorage();
}

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