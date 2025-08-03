let userScore = 0;
let botScore = 0;
let symbols = ["rock", "paper", "scissor"];
let userChoices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let Score1 = document.querySelector("#score1");
let Score2 = document.querySelector("#score2");

userChoices.forEach((val) => {
  val.addEventListener("click", () => {
    const userchoosed = val.getAttribute("id");
    let botChoosed = botChoice();
    gamePlay(userchoosed, botChoosed);
    Score1.innerHTML = userScore;
  });
});

function botChoice() {
  let idx = Math.floor(Math.random() * userChoices.length);
  return symbols[idx];
}

const gamePlay = (userchoosed, botChoosed) => {
  if (userchoosed === botChoosed) {
    console.log("it's draw");
    msg.innerHTML = `its draw, both choosed ${botChoosed} `;
    msg.style.backgroundColor = "orange";
  } else if (
    (userchoosed === "rock" && botChoosed === "scissor") ||
    (userchoosed === "paper" && botChoosed === "rock") ||
    (userchoosed === "scissor" && botChoosed === "paper")
  ) {
    msg.innerHTML = `Congratulation You win! ${userchoosed} beats ${botChoosed}`;
    msg.style.backgroundColor = "green";
    userScore++;
    Score1.innerHTML = userScore;
  } else {
    msg.innerHTML = `You lost! ${userchoosed} defeated by ${botChoosed}`;
    msg.style.backgroundColor = "red";
    botScore++;
    Score2.innerHTML = botScore;
  }
};
