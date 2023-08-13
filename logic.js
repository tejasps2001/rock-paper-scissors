/* Start a loop to play game 5 times.
   Ask user to play.
   Get the computer to choose a random option.
   Decide the winner from game logic for each turn.
   Decide who won from the 5 games. */

let compScore = 0; 
let playerScore = 0;


function play(e) {
    let playerChoice = '';
    playerChoice = e.target.innerText;
    let compChoice = getCompPlay();
    console.log(decideWinner(playerChoice, compChoice))
    if (playerScore + compScore == 5) {
        getGameWinner();
        compScore = 0;
        playerScore = 0;
    }
}

function getCompPlay() {
    choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

// Get user's play from button press
rock.addEventListener('click', play);
paper.addEventListener('click', play);
scissors.addEventListener('click', play);

function getGameWinner() {
    if (playerScore > compScore) {
        console.log('Whooo! You won!');
    }
    else if(compScore > playerScore) {
        console.log('Bummer! You lost!');
    }
    else {
        console.log("It's a tie!");
    }
}

function decideWinner(player, comp) {
    if(player == comp) {
        console.log(player, "doesn't do anything to", comp);
        console.log("It's a tie!")
        return 'tie';
    }
    else if((player == 'rock' && comp == 'scissors') ||
            (player == 'paper' && comp == 'rock') ||
            (player == 'scissors' && comp == 'paper')) {
                playerScore++;
                printWinner(player, comp);
            }
    else if((comp == 'rock' && player == 'scissors') ||
            (comp == 'paper' && player == 'rock') ||
            (comp == 'scissors' && player == 'paper')) {
                compScore++;
                printWinner(comp, player);
            }
}

function printWinner(winnerChoice, loserChoice) {
    console.log(winnerChoice, ' beats ', loserChoice);
    console.log('----Scoreboard----');
    console.log('You: ', playerScore);
    console.log('Computer: ', compScore);
}