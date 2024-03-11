let order = [] // ordens do jogo que apareceram
let clickedOrder = [] // ordem dos cliques
let score = 0 // pontuação

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4) // sortear número que seja de zero a 3
    order[order.length] = colorOrder // atribuindo o indice do array que será populado com a cor que sairá da função de sorteio
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i]) // o "i" será o índice do array que será colocado dentro dessa variável
        lightColor(elementColor, Number(i) + 1) // passando para essa função cada uma das cores que forem iteradas
    }
}

let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected') // rodar os 250 e depois remover
    })
}

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Voce acertou! Iniciando próximo nível`)
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add("selected")

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red
    } else if (color == 2) {
        return yellow
    } else if (color == 3) {
        return blue
    }
}

let nextLevel = () => { // chamar a função e gerar nova ordem
    score++
    shuffleOrder()
}

let gameOver = () => {
    alert(`Pontuação: ${score} \nVoce perdeu! Inicie novamente para tentar outra vez`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Iniciando jogo')
    score = 0

    nextLevel()
}

// green.onClick = () => click(0)
// red.onClick = () => click(1)
// yellow.onClick = () => click(2)
// blue.onClick = () => click(3)
green.addEventListener('click', () => click(0))
red.addEventListener('click', () => click(1))
yellow.addEventListener('click', () => click(2))
blue.addEventListener('click', () => click(3))

playGame()