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
    const userGuess = this.activePhrase.checkLetter(letter);
    letter.disabled = true;
    if (!userGuess) {
      letter.className = "wrong";
      this.removeLife(letter);
    } else {
      letter.className = "chosen";
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver();
      }
    }
  }

  checkForWin() {
    const winningPhraseLength = document.querySelectorAll(".letter").length;
    const currentPhraseLength = document.querySelectorAll(".show").length;
    const win = winningPhraseLength === currentPhraseLength ? true : false;
    return win;
  }
  removeLife(letter) {
    const hearts = document.querySelectorAll("img");
    const checkLife = this.activePhrase.checkLetter(letter);
    if (!checkLife) {
      hearts[this.missed].src = "images/lostHeart.png";
      this.missed += 1;
      if (this.missed === 5) {
        this.gameOver();
      }
    }
  }
  gameOver() {
    const divOverlay = document.querySelector("#overlay");
    const h1WinLoseText = document.querySelector("#game-over-message");
    divOverlay.style.display = "";
    if (this.missed === 5) {
      h1WinLoseText.textContent = "Sorry, you lose";
      divOverlay.className = "lose";
    } else {
      h1WinLoseText.textContent = "Congrats, you win!";
      divOverlay.className = "win";
    }
  }
}
