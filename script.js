//  EASTER EGG: => DIGITE 9999 NO PRIMEIRO CONSOLE *****************************************************************************
let resposta;
let simNao;
let totJogadas = 0;
let fimGame = 0;
let stageGame = document.querySelector('.stage-game')
let cardOne;
let cardTwo;
const timer = document.querySelector('.timer')
const parrots = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
    'z3parrots',
    'zbirthdayparrot',
    'zbrazilparrot',
    'zdetectiveparrot',
    'zdevilparrot',
    'zdogeparrot',
    'zdrinkingparrot',
    'zfootballparrot',
    'zheadbangingparrot',
    'zlsdparrot',
    'zmustacheparrot',
    'znegativeparrot',
    'zpirateparrot',
    'zpoliceparrot',
    'zpopcornparrot',
    'zscientistparrot',
    'zsoccerparrot',
    'zsunglassparrot',
    'ztenisparrot',
]
playGame()
createCard()

function startTimer(){
    this.item = setInterval(() =>{
        const tempo = Number(timer.innerHTML)
        timer.innerHTML = tempo + 1
    }, 1000);
}


function playGame(){   
    while((resposta % 2 !== 0 || resposta > 14) || (resposta % 2 !== 0 || resposta < 4) || resposta === undefined){
        resposta = window.prompt("Por favor, digite a quantidade de cartas \n(Valores pares de 4 a 14):")   
        console.log(resposta)
        if(resposta == 9999){
            break
        }
    } 
    if(resposta == 9999){
        const fundo = document.querySelector(".body")
        const palco = document.querySelector('.stage-game')
        const topo = document.querySelector(".cabecalho")
        const musicOn = document.querySelector(".audio-controls")
        const audio = document.querySelector('.audio-game')

        fundo.classList.add('body-estilized')
        palco.classList.add('main-estilized')
        topo.classList.add('cabecalho-estilized')
        musicOn.classList.remove('audio-controls')
        musicOn.classList.add('audio-control-estilized')
        audio.autoplay = true
        console.log(audio)

        resposta = 52

        alert('Parab??ns, Voc?? liberou o desafio das 52 cartas. \nVoc?? n??o teria essa coragem de jogar isso certo? [O.o]')
    }
    startTimer()

    resposta = resposta/2
    const parrotsGame = []
    for(let i = 0 ; i < resposta ; i++){
        parrotsGame.push(parrots[i])
    }

    const parrotsDeck = [...parrotsGame, ...parrotsGame]
    const shuffleDeckParrot = parrotsDeck.sort(
        function shuffleCards(){
        let posicao = Math.random() - 0.5
        return posicao
    })

    for(let i = 0 ; i < shuffleDeckParrot.length ; i++){
        const carta = createCard(shuffleDeckParrot[i])
        stageGame.appendChild(carta)
    }
}


function createCard(parrot){
    const card = document.createElement("div")
    const front = document.createElement("div")
    const back = document.createElement("div")

    front.style.backgroundImage = `url('./gifs/${parrot}.gif')`
    
    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'

    if(resposta == 26){
        card.className = 'card-estilized'
        front.className = 'face-estilized front-estilized'
        back.className = 'face-estilized back-estilized'
    }
    
    card.appendChild(front)
    card.appendChild(back)

    card.setAttribute('data-parrot', parrot)
    card.addEventListener('click', revelaCard)

    return card
}


function revelaCard(objeto){

    totJogadas ++
    console.log(`clique: ${totJogadas}`)
    
    if(cardOne === undefined){
        objeto.target.parentNode.classList.add('mostra-carta')
        cardOne = objeto.target.parentNode

    } else if(cardTwo === undefined){
        objeto.target.parentNode.classList.add('mostra-carta')
        cardTwo = objeto.target.parentNode
        
        compareCard(cardOne, cardTwo)
    }
}


function compareCard(a, b){
    const firstCard = a.getAttribute('data-parrot')
    const secondCard = b.getAttribute('data-parrot')

    if( firstCard === secondCard){

            cardOne = undefined
            cardTwo = undefined

            fimGame++
            if(fimGame == resposta){
                setTimeout(()=>{
                    clearInterval(this.item)
                    alert(`Voc?? ganhou em ${totJogadas} jogadas e o seu tempo foi ${timer.innerHTML} segundos.`)
                    playAgain()   
                },1200)
            }
    }else{
        setTimeout(()=>{
            cardOne.classList.remove('mostra-carta')
            cardTwo.classList.remove('mostra-carta')  
            
            cardOne = undefined
            cardTwo = undefined
        }, 1000)
    }
}


function playAgain(){
    let jogarDeNovo = window.prompt("Deseja jogar de Novo? [sim/n??o]").toLowerCase().trim()
    if(jogarDeNovo === 'sim'){
        location.reload()
    }else if(jogarDeNovo === 'n??o'){
        alert('At?? a pr??xima! :D')
    }else{
        alert('Voc?? precisa digitar apenas sim ou n??o')
        playAgain()
    }
}


function playMusic(){
    const audio = document.querySelector('.audio-game')
        audio.play()
}

function stopMusic(){
    const audio = document.querySelector('.audio-game')
    audio.pause()
    audio.currentTime = 0;
}