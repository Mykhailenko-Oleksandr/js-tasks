
const startBtn = document.querySelector('#startBtn')
const score = document.querySelector('#score')
const gameField = document.querySelector('#gameField')

startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick(event) {

    gameField.innerHTML = ''

    const gameContainer = document.createElement('div')
    gameContainer.style.width = '300px'
    gameContainer.style.height = '300px'
    gameContainer.style.border = '5px solid black'

    gameField.append(gameContainer)

    const gameBall = document.createElement('div')
    gameBall.style.width = '30px'
    gameBall.style.height = '30px'
    gameBall.style.backgroundColor = 'red'
    gameBall.style.borderRadius = '50%'
    gameBall.classList.add('ball')
    gameBall.style.position = 'relative'
    gameBall.style.top = `${Math.floor(Math.random() * (270 + 1))}px`
    gameBall.style.left = `${Math.floor(Math.random() * (270 + 1))}px`

    gameContainer.append(gameBall)

    console.dir(gameBall)

    let timeOnClickMS = 1500;
    let timeOnClick;

    gameBall.addEventListener('click', () => {
        score.textContent = Number(score.textContent) + 1

        timeOnClickMS -= 10;

        gameBall.remove()

        gameBall.style.top = `${Math.floor(Math.random() * (270 + 1))}px`
        gameBall.style.left = `${Math.floor(Math.random() * (270 + 1))}px`
        gameContainer.append(gameBall)
        clearTimeout(timeOnClick)
        timeOnClick = setTimeout(onEndGame, timeOnClickMS)
        console.log(timeOnClick);

    })

    function onEndGame() {
        alert(`Не встиг. Ваш рахунок ${score.textContent}`)
        score.textContent = '0'
    }
}


