// Computer randomly generates choice for itself:
function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);
  if (i === 0) {
    return "rock";
  }
  if (i === 1) {
    return "paper";
  }
  if (i === 2) {
    return "scissor";
  }
}

// Player prompted to select choice:
function getPlayerChoice() {
  let j = prompt("Please select rock, paper, or scissor.");
  j = j.toLowerCase();
  if (j === "rock" || j === "paper" || j === "scissor") {
    return j;
  } else return getPlayerChoice();
}

// Function to check winner and loser:
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Rock loses to paper.";
  }
  if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You win! Rock beats scissor.";
  }
  if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You lose! Paper loses to scissor.";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock.";
  }
  if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You lose! Scissor loses to rock.";
  }
  if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You win! Scissor beats paper.";
  }
}

// Play a round:
function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

// Starts game:
function game() {
  for (let i = 0; i <= 4; i++) {
    playRound();
  }
}

game();
