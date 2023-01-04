const buttons = document.querySelectorAll('button')
let options_array = Array.from(buttons)
// console.log(buttons)

buttons.forEach ( button => {
    button.addEventListener('click', () => {

        if (player_points >= 5 || computer_points >= 5){
            player_points = 0
            computer_points = 0
        }
        let pChoice = button.id
        let cChoice = getComputerChoice()

        let div1 = document.querySelector('#new-score')
        div1.textContent = playRound(pChoice, cChoice)

        let div0 = document.querySelector('#current-score')
        div0.textContent = "Player: " + player_points + " point(s) | " + "Computer: " + computer_points + " point(s)\n"

        if (player_points == 5) {
            div0.textContent = "PLAYER WINS!"
            div1.textContent = ""
        } else if (computer_points == 5) {
            div0.textContent = "COMPUTER WINS!"
            div1.textContent = ""
        }

    })
})

let round = 1
let player_points = 0
let computer_points = 0

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {

    let current = "Player chooses " + String(playerSelection) + " and Computer chooses " + String(computerSelection) + ". "

    if (playerSelection == computerSelection) {
        return current + "Draw! Try again."
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        player_points++
        return current + "Rock beats Scissors. Player wins!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        player_points++
        return current + "Paper beats Rock. Player wins!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        player_points++
        return current + "Scissors beats paper. Player wins!"
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computer_points++
        return current + "Rock beats Scissors. Computer wins!"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computer_points++
        return current + "Paper beats Rock. Computer wins!"
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computer_points++
        return current + "Scissors beats paper. Computer wins!"
    }
    else {
        return "Something went wrong!"
    }
    round += 1
}

function game() {
    
    // for (let i = 0; i < 5; i++){

    //     let playerSelection = String(prompt("rock, paper or scissors?"))
    //     let computerSelection = getComputerChoice()

    //     console.log("Round " + round)
    //     console.log(playRound(playerSelection, computerSelection))

    //     console.log("Player: " + player_points + " point(s)\n" + "Computer: " + computer_points + " point(s)\n")
        
    //     if (player_points > computer_points) {
    //         console.log("Player wins!")
    //     }
    //     else if (player_points < computer_points) {
    //         console.log("Computer wins!")
    //     }
    //     else {
    //         console.log("Draw!")
    //     }
    // }
}

game()