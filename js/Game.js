/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: "The truth will set you free" },
      { phrase: "Join the darkside" },
      { phrase: "Life is like a box of chocolates" },
      { phrase: "Forgive and forget" },
      { phrase: "Winner winner chicken dinner" }
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }

  startGame() {
    const phrase = new Phrase(game.getRandomPhrase());
    const divOverlay = document.querySelector("#overlay");
    divOverlay.style.display = "none";
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }

  handleInteraction(letter) {
    this.activePhrase.checkLetter(letter);
    this.activePhrase.showMatchedLetter(letter);
    this.checkForWin();
    this.removeLife();
  }

  checkForWin() {
    const winningPhraseLength = document.querySelectorAll(".letter").length;
    const currentPhraseLength = document.querySelectorAll(".show").length;
    const win = winningPhraseLength === currentPhraseLength ? true : false;
    return win;
  }
  removeLife() {
    const hearts = document.querySelectorAll(".tries");
  }
  gameOver() {}
}
