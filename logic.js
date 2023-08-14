/* Ask user to play.
   Get the computer to choose a random option.
   Decide the winner from game logic for each turn.
   Decide who won from the 5 games. 
   Ask user whether he/she wants to play again. */

function getCompPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function decideWinner(player, comp) {
    if (player == comp) return '';
    else if((player == 'rock' && comp == 'scissors') ||
            (player == 'paper' && comp == 'rock') ||
            (player == 'scissors' && comp == 'paper')) {
                playerScore++;
                return [player, comp];
            }
    else if((comp == 'rock' && player == 'scissors') ||
            (comp == 'paper' && player == 'rock') ||
            (comp == 'scissors' && player == 'paper')) {
                compScore++;
                return [comp, player];
            }
}

function printWinner(decision, result) {
    if(decision == '') result.textContent = "It's a tie!";

    // first element in decision is winner; second is loser
    else result.textContent = decision[0] + ' beats ' + decision[1];
    scoreboard.textContent = 'You ' + playerScore + '  ' + compScore + ' Computer';
}

function printGameWinner(htmlBody) {
    let gameWinner = document.createElement('p');
    gameWinner.classList.add('end-note');
    if (playerScore > compScore) 
        gameWinner.textContent = 'Whooo! You won!';
    else if(compScore > playerScore) 
        gameWinner.textContent = 'Bummer! You lost!';
    else 
        gameWinner.textContent = "It's a tie!";
    htmlBody.appendChild(gameWinner);
}

function clearScreen() {
    let htmlElement = document.querySelector('html');
    let htmlBody = document.querySelector('body');
    htmlElement.removeChild(htmlBody);
}

function createNew() {
    let htmlElement = document.querySelector('html');
    let htmlBody = document.createElement('body');
    htmlElement.appendChild(htmlBody);
    return htmlBody;
}

function resetScreen() {
    clearScreen();
    let htmlBody = createNew();
    return htmlBody;
}

function playAgain(htmlBody) {
    let playAgainbtn = document.createElement('button');
    playAgainbtn.classList.add('again');
    playAgainbtn.textContent = 'Play Again';
    htmlBody.appendChild(playAgainbtn);
    if (playAgainbtn) {
        playAgainbtn.addEventListener('click', () => {
            location.reload();
        });
    }
}
let compScore = 0; 
let playerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let result = document.querySelector('.result');
let scoreboard = document.querySelector('.scoreboard');

// Get user's play from button press
rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);

function playGame(e) {
    if (compScore + playerScore >= 5) {
        let htmlBody = resetScreen();
        printGameWinner(htmlBody);
        playerScore = 0;
        compScore = 0;
        playAgain(htmlBody);
    }

    let playerChoice = e.target.className;
    let compChoice = '';
    compChoice = getCompPlay();
    let decision = decideWinner(playerChoice, compChoice);
    printWinner(decision, result);
}
