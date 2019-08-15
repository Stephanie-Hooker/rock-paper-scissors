function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice)

  //player choice is "rock"
  //computerChoice goes through rock, paper, scissors
  if (playerChoice === computerChoice) {
    alert("Tie!")
    return;
  }


  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      alert("You Lose!")
    } else {
      alert("You Win!")
    }
  }
  //player choice is "paper"
  //computerChoice goes through rock, paper, scissors

  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert("You Win!")
    } else {
      alert("You Lose!")
    }
  }

  //player choice is "scissors"
  //computerChoice goes through rock, paper, scissors

  else {
    if (computerChoice === "rock") {
      alert("You Lose!")
    } else if (computerChoice === "paper") {
      alert("You Win!")
    }// else {
    //   alert("Tie!")
    // }
  }
}