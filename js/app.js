/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");

startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(game.activePhrase);
});

keyboard.addEventListener("click", event => {
  const letter = event.target;
  if (letter.textContent.length > 1) {
    event.preventDefault();
  } else {
    game.handleInteraction(letter);
  }
});
