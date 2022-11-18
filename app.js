const masterContainer = document.querySelector('.master-container')
console.log(masterContainer)

const characters = [
    {
        image: "./images/shrek.jpg",
        name: "Shrek",
        alt: "Shrek",
        bio: "Shrek is the protagonist and hero in the film Shrek. In the beginning of this film, Shrek struggles with accepting himself as an ogre."
    },

    {
        image: "./images/download (1).jpg",
        name: "Fiona",
        alt: "Fiona",
        bio: "Princess Fiona is the wife of Shrek, the daughter of Queen Lillian and King Harold, a close friend of Donkey, and the mother of the Ogre triplets."
    },

    {
        image: "./images/donkey.jpg",
        name: "Donkey",
        alt: "Donkey",
        bio: "Donkey is the talkative, euphoric, happy-go-lucky, and flighty sidekick and the best friend of Shrek, Dragon's husband, and the Dronkeys' father."
    },

    {
        image: "./images/prince (2).jpg",
        name: "Prince Charming",
        alt: "Prince Charming",
        bio: "Prince Charming is depicted as an incredibly vain and self-absorbed individual who is fixated on his own good looks and on being perceived as the “handsome prince” by those around him."
    },

    {
        image: "./images/king.jpg",
        name: "King Harold",
        alt: "King Harold",
        bio: "King Harold was the King of Far Far Away, although he was not born into the true royal family. He is the husband of Queen Lillian and maintained the title of King through his marriage with her."
    },

    {
        image: "./images/queen.jpg",
        name: "Queen Lillian",
        alt: "Queen Lillian",
        bio: "Queen Lillian is the Queen of Far Far Away and the husband of King Harold and the mother of Princess Fiona."
    },
]

function display() {
    characters.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')

        const imgPlace = document.createElement('div')
        imgPlace.classList.add('characters-img')

        const charactersImage = document.createElement('img')
        charactersImage.src = item.image

        imgPlace.appendChild(charactersImage)

        const charactersInfo = document.createElement('div')
        charactersInfo.classList.add('characters-info')

        const namePlace = document.createElement('h1')
        namePlace.textContent = 'Name: ' + item.name;

        const about = document.createElement('h3')
        about.textContent = 'Bio';

        const info = document.createElement('p')
        info.textContent = item.bio;

        charactersInfo.appendChild(namePlace)
        charactersInfo.appendChild(about)
        charactersInfo.appendChild(info)
        console.log(charactersInfo)
        
        card.appendChild(imgPlace)
        card.appendChild(charactersInfo)
        console.log(card)
        masterContainer.appendChild(card)
    })
}

display()


    








