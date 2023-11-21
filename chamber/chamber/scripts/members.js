const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('.cards');
// target the section 
const card = document.querySelector('.grid');


gridbutton.addEventListener('click', () => {
    display.classList.remove('list');
    gridbutton.classList.add('active');
    listbutton.classList.remove('active');
    display.classList.add('grid');
});

listbutton.addEventListener('click', () => {
    display.classList.remove('grid');
    card.classList.remove('card');
    listbutton.classList.add('active');
    gridbutton.classList.remove('active');
    display.classList.add('list');
});

// "name": "Elendil's Tavern",
// "address": "123 Main St",
// "phone": "992-872-2254",
// "website": "http://www.elendilstavern.com",
// "image": "../images/tavern.webp",
// "membership": "Gold"

const url = './data/members.json';
const cards = document.querySelector('.cards');

function displayMembers(members){
    members.forEach((member) => {
        let section = document.createElement('section')
        section.classList.add("directory-card")
        section.classList.add("grid")
        let sectionHTML = `<h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}">${member.name}</a></p>
            <p>Membership Level: ${member.membership}</p>
            <img src="${member.imageurl}" "height="200" width="200" loading="lazy" alt="Picture of ${member.name}">`
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
    });
}

async function getMemberData(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayMembers(data.members)
    }
    else{
        console.error("Uh Oh! Something went wrong!")
        const cards = document.querySelector('#cards');
        cards.innerHTML = "<h3>Uh Oh! Something went wrong! There was an error loading the data</h3>"
    }
}

getMemberData();