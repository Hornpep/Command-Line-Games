//Array mit den Optionen
const moves = ["rock", "paper", "scissors"];

//User Input
const playersChoice = process.argv.slice(2)[0].toLowerCase(); //Weil process.argv ein Array ausgibt miss noch der Index [0] rein, um an die Eingabe zu kommen. 
console.log(`You chose ${playersChoice}`);

//Computer wählt hier zufällig aus dem moves array
const computerChoice = moves[Math.floor(Math.random() * 3)];
console.log(`The computer chose ${computerChoice}.`);

//Funktion ermittelt den Sieger
const game = (playersChoice, computerChoice) => {
    if (playersChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playersChoice === "rock" && computerChoice === "scissors") ||
      (playersChoice === "paper" && computerChoice === "rock") ||
      (playersChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  };

//Funktionsaufruf mit den beiden Parametern
game(playersChoice, computerChoice);
