const ROCK = 'rock'
const SCISSORS = 'scissors'
const PAPER = 'paper'

const DRAW = 'draw'
const WON = 'won'
const LOST = 'lost'

const playOptions = [ROCK, SCISSORS, PAPER]

function computerPlay () {
   const playSelection = Math.floor(Math.random() * playOptions.length)
   return playOptions[playSelection]
}

function playerPlay (round) {
    let play = prompt(`round ${round}! Please choose Rock, Paper or Scissors`)
    return play
}

const lowercasePlaySelection = playSelection => playSelection.toLowerCase()

const drawResult = playSelection => {
    const message = `You draw! ${playSelection} and ${playSelection} are friends `

    console.log(message)
    alert(message)

    return DRAW
}

const wonResult = (winnerSelection, loserSelection) => {
    const message = `You win! ${winnerSelection} beats ${loserSelection}`

    console.log(message)
    alert(message)

    return WON
}

const lostResult = (winnerSelection, loserSelection) => {
    const message = `You lose! ${winnerSelection} beats ${loserSelection}`

    console.log(message)
    alert(message)
 
    return LOST
}

const defaultResult = () => {
    const message = `game round crashed, please try again!`
    alert(message)

    return null
}

function playerSelectsRock (computerSelection) {
    if (computerSelection === ROCK) 
        return drawResult(ROCK)

    else if (computerSelection === SCISSORS) 
        return wonResult(ROCK, SCISSORS)
        
    else if (computerSelection === PAPER) 
        return lostResult(PAPER, ROCK)
    
    else 
        return defaultResult()
}

function playerSelectsPaper (computerSelection) {
    if (computerSelection === PAPER) 
        return drawResult(PAPER)
    
    else if (computerSelection === ROCK) 
        return wonResult(PAPER, ROCK)

    else if (computerSelection === SCISSORS) 
        return lostResult(SCISSORS, PAPER)
    
    else
        return defaultResult()
}

function playerSelectsScissors (computerSelection) {
    if (computerSelection === SCISSORS) 
        return drawResult(SCISSORS)

    else if (computerSelection === PAPER)
        return wonResult(SCISSORS, PAPER)

    else if (computerSelection === ROCK)
        return lostResult(ROCK, SCISSORS)

    else 
        return defaultResult()
}

function playRound (playerSelection, computerSelection) {
    const lowercasedPlayerSelection = lowercasePlaySelection(playerSelection)
    const lowercasedComputerSelection = lowercasePlaySelection(computerSelection)

    if (lowercasedPlayerSelection === ROCK)
        return playerSelectsRock(lowercasedComputerSelection)

    else if (lowercasedPlayerSelection === PAPER)
        return playerSelectsPaper(lowercasedComputerSelection)

    else if (lowercasedPlayerSelection === SCISSORS)
        return playerSelectsScissors(lowercasedComputerSelection)

    else return alert('You have to choose a valid option between Rock, Paper and Scissors in order to play')
}

function game () {
    const ROUNDS = 5
    let playerWinCount = 0
    let computerWinCount = 0

    for (let i = 0; i < ROUNDS; i++) {
        const playerSelection = playerPlay(i + 1)
        const roundResult = playRound(playerSelection, computerPlay())
        
        if (roundResult === DRAW) 
            continue

        else if (roundResult === WON) 
           playerWinCount = playerWinCount + 1
           
        else if (roundResult === LOST) 
            computerWinCount = computerWinCount + 1
        
           
    }

    if (playerWinCount === computerWinCount) 
        console.log('after five rounds There has been a draw!')
    
    else if (playerWinCount > computerWinCount) 
        console.log('after five rounds you win!! congrats')
    else 
        console.log('after five rounds computer wins, good luck next time :)')
}

window.onload = game