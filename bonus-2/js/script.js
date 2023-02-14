//console.log('Attilio Caja');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        thumb: './img/wayne-barnett-founder-ceo.jpg',
    }, 

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        thumb: './img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        thumb: './img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        thumb: './img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        thumb: './img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        thumb: './img/barbara-ramos-graphic-designer.jpg',
    },
]

//console.log(teamMembers) 

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase 
//     usiamo il ciclo for…in )

for(let i = 0; i < teamMembers.length; i++){
    let member = teamMembers[i]
    for(let key in member) {
        console.log(member[key])
    }
    // MILESTONE 2:
        // Stampare le stesse informazioni su DOM sotto forma di stringhe
    const name = member.name
    const role = member.role
    const thumb = member.thumb

    const memberInfo = document.createElement('div')
    let imgThumb = document.createElement('img')
    imgThumb.classList.add('card__thumb')
    imgThumb.src = thumb
    memberInfo.appendChild(imgThumb)

    memberInfo.classList.add('member__card')
    if(i === 0) {
        memberInfo.classList.add('active')
    }

    memberInfo.innerHTML += `
    <div class = 'card__info'> 
        <h2> ${name} </h2>
        <p> ${role} </p>
    </div>
    ` 
    document.getElementById('team-members').appendChild(memberInfo)

}

let cardEl = document.querySelectorAll('.member__card')
let index = 0
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

let autoRun 

const timer = setTimeout( function() {
    autoRun = setInterval(cardSlideClockwise, 3000)
}, 3000);

arrowLeft.addEventListener('click', cardSlidAnticlockwise)
arrowLeft.addEventListener('click', clearAll)

arrowRight.addEventListener('click', cardSlideClockwise)
arrowRight.addEventListener('click', clearAll)


//FUNZIONI

function cardSlidAnticlockwise () {
    let cardActive = cardEl[index]
    cardActive.classList.remove('active')
    if (index > 0) {
         index -= 1;
       } else { 
         index = teamMembers.length - 1
       }

       let cardNext = cardEl[index];
       cardNext.classList.add("active");
}

function cardSlideClockwise () {
    let cardActive = cardEl[index]
    cardActive.classList.remove('active')
    if (index < teamMembers.length - 1) {
            index += 1;
    } else { 
         index = 0;
    }
    let cardNext = cardEl[index];
    cardNext.classList.add("active");
}

function clearAll() {
    clearTimeout(timer)
    clearInterval(autoRun)
}