let resposta;
let stageGame = document.querySelector('.stage-game')
const parrots = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
]

const revealCard = ({target}) =>{
    target.parentNode.classList.add('mostra-carta')
}

playGame()
createCard()




function playGame(){   
    while((resposta % 2 !== 0 || resposta > 14) || (resposta % 2 !== 0 || resposta < 4) || resposta === undefined){
        resposta = window.prompt("Por favor, digite a quantidade de cartas \n(Valores pares de 4 a 14):")    
    }  

    resposta = resposta/2
    const parrotsGame = []
    for(let i = 0 ; i < resposta ; i++){
        parrotsGame.push(parrots[i])
    }

    const parrotsDeck = [...parrotsGame, ...parrotsGame]
    const shuffleDeckParrot = parrotsDeck.sort( () => Math.random()- 0.5)

    for(let i = 0 ; i < shuffleDeckParrot.length ; i++){
        const carta = createCard(shuffleDeckParrot[i])
        stageGame.appendChild(carta)
    }

}


function createCard(parrot){
    const card = document.createElement("div")
    const front = document.createElement("div")
    const back = document.createElement("div")

    front.style.backgroundImage = `url('../gifs/${parrot}.gif')`
    
    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'
    
    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)


    return card
}


