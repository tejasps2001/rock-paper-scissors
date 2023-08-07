/* Start a loop to play game 5 times.
   Ask user to play.
   Get the computer to choose a random option.
   Decide the winner from game logic for each turn.
   Decide who won from the 5 games. */

let compScore = 0; 
let playerScore = 0;

for (let i = 1; i < 6; i++) {
    if(i === 1){
        console.log("Let's play Rock Paper Scissors");
    }
    console.log("Game: ", i);
    let playerChoice = prompt("Your play(Type Rock, Paper, Scissors): ");
    let compChoice = getPlay();
    playerChoice = playerChoice.toLowerCase();
    decideWinner(playerChoice, compChoice);
}

if (playerScore > compScore) {
    console.log('Whooo! You won!');
}
else if(compScore > playerScore) {
    console.log('Bummer! You lost!');
}
else {
    console.log("It's a tie!");
}


function getPlay() {
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

function decideWinner(player, comp) {
    if(player == comp) {
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