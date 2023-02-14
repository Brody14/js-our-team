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

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        thumb: 'wayne-barnett-founder-ceo.jpg',
    }, 

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        thumb: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        thumb: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        thumb: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        thumb: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        thumb: 'barbara-ramos-graphic-designer.jpg',
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
}

// MILESTONE 2:
    // Stampare le stesse informazioni su DOM sotto forma di stringhe