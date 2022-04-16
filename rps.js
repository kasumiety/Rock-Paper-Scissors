// Rock-Paper-Scissors v.1.0

// console.log("Hey there, brother. Nice.");

function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3) + 1;
    switch (randomPlay) {
        case 1:
            return("Rock");
            break;
        case 2:
            return("Scissors");
            break;
        case 3:
            return("Paper");
            break;
        default:
            return("Oops, something hasn't gone according to plan, sowwy");
            break;
    }
}

// console.log(computerPlay());

let computerValue = computerPlay(); 
let playerValue = prompt("Select rock, paper or scissors: ");

console.log(`Computer chooses ${computerValue}`);
console.log(`Player chooses ${playerValue}`);

function rpsRound(playerSelection, computerSelection) {
    let playerUpper = playerSelection.toUpperCase();
    let computerUpper = computerSelection.toUpperCase();
    if (playerUpper === computerUpper) {
        return("It's a draw!");
    } else {
        if (playerUpper === "ROCK" && computerUpper === "SCISSORS" 
            || playerUpper === "SCISSORS" && computerUpper === "PAPER" 
            || playerUpper === "PAPER" && computerUpper === "ROCK") {

            return(`Congrats, your ${playerSelection} wins against computer's ${computerSelection}!`)

        } else {
            return (`Sorry, your ${playerSelection} loses against computer's ${computerSelection}.`)
        }
    }
}

console.log(rpsRound(playerValue, computerValue));

// function game() {
//     for (let i = 0; i = 5; i++) {

//     }
// }