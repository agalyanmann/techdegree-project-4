/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
startButton.focus();

/**
 * Starts a new game on user input
 */

startButton.addEventListener("click", () => {
  game = new Game();
  game.startGame();
  console.log(game.activePhrase);
});

/**
 * Listen to on screen keyboard for user input
 * Prevent page reload
 * Pass user input to the @handleInteraction function for program logic
 */

keyboard.addEventListener("click", event => {
  const letter = event.target;
  if (letter.textContent.length > 1) {
    event.preventDefault();
  } else {
    game.handleInteraction(letter);
  }
  console.log(letter);
});

document.addEventListener("keyup", event => {
  const pressedKey = event.key;
  const keyButtons = document.querySelectorAll(".key");
  keyButtons.forEach(key => {
    if (key.textContent === pressedKey) {
      const letter = key;
      game.handleInteraction(letter);
    }
  });
});
