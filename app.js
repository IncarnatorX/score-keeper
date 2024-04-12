const player1Score = document.querySelector("#p1ScoreDisplay"); //Player 1 score
const player2Score = document.querySelector("#p2ScoreDisplay"); //Player 2 score

const winningScoreNumber = document.querySelector("#selectNumbers");

const p1Button = document.querySelector("#p1Button"); //Player 1 Button
const p2Button = document.querySelector("#p2Button"); //Player 2 Button

const resetBtn = document.querySelector("#resetButton"); //accessing the reset button

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

let winningScore = 1;

winningScoreNumber.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

p1Button.addEventListener("click", function () {
  //In the below line, Since we are using a NOT operator, this line is true. if condition runs only if it is true.
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true; // we are setting the value as true since both scores are equal. Hence the isGameOver becomes false and if consition doesn't run.
      player1Score.classList.add("winner");
      player2Score.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    player1Score.innerHTML = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      player2Score.classList.add("winner");
      player1Score.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    player2Score.innerHTML = p2Score;
  }
});

// p2Button.addEventListener("click", function () {
//   if (p2Score !== winningScore) {
//     p2Score += 1;
//     player2Score.innerHTML = p2Score;
//   }
// });

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.innerHTML = 0;
  p2ScoreDisplay.innerHTML = 0;
  player1Score.classList.remove("winner", "loser");
  player2Score.classList.remove("winner", "loser");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
