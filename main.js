// Setting Up all the variables.
const h1 = document.querySelector('#h1');
const text = document.querySelector('#text');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const player = document.querySelector('#player');
const computer = document.querySelector("#computer") 
let playerScore = 0;
let computerScore = 0;

// Function of the machine choice.
function machineChoice() {
    var values = ['rock', 'paper', 'scissors'];
    valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}

// Reset 
function reset() {
    playerScore = 0;
    computerScore = 0;
    h1.innerHTML = "Rock, Paper, Scissors!"
    player.innerHTML = "Player";
    computer.innerHTML = "Computer";
    text.innerHTML = "Select One to Challenge Me";
}

// Results
rock.addEventListener('click', function(){
    if(machineChoice() == 'scissors'){
        h1.innerHTML = "You Won!";
        text.innerHTML ="I chosed Scissors...";
        playerScore++;
        player.innerHTML = `Player ${playerScore}`;
        whoWon();
    } else if(machineChoice() == 'paper'){
        h1.innerHTML = "You Lost!";
        text.innerHTML ="I chosed Paper, noob.";
        computerScore++;
        computer.innerHTML = `Computer ${computerScore}`;
        whoWon();
    } else {
        h1.innerHTML = "It's a draw.";
        text.innerHTML ="I chosed Rock too";
    }
})

paper.addEventListener('click', function(){
    if(machineChoice() == 'rock'){
        h1.innerHTML = "You Won!";
        text.innerHTML = "I chosed Rock..."
        playerScore++;
        player.innerHTML = `Player ${playerScore}`;
        whoWon();
    } else if(machineChoice() == 'scissors'){
        h1.innerHTML = "You Lost!"
        text.innerHTML ="I chosed Scissors, noob.";
        computerScore++;
        computer.innerHTML = `Computer ${computerScore}`;
        whoWon();
    } else {
        h1.innerHTML = "It's a draw."
        text.innerHTML ="I chosed Paper too";
    }
})

scissors.addEventListener('click', function(){
    if(machineChoice() == 'paper'){
        h1.innerHTML = "You Won!";
        text.innerHTML ="I chosed Paper...";
        playerScore++;
        player.innerHTML = `Player ${playerScore}`;
        whoWon();
    } else if(machineChoice() == 'rock'){
        h1.innerHTML = "You Lost!";
        text.innerHTML ="I chosed Rock, noob.";
        computerScore++;
        computer.innerHTML = `Computer ${computerScore}`;
        whoWon();
    } else {
        h1.innerHTML = "It's a draw.";
        text.innerHTML ="I chosed Scissors too";
    }
})

// Who won? 
function whoWon(){
    if(playerScore == 5){
        alert('Player Wins!');
        reset();
    } else if(computerScore == 5) {
        alert('Player Lost :(');
        reset();
    }
}