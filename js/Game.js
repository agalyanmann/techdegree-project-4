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

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   * Resets game if already played a previous round
   */

  startGame() {
    this.resetGame();

    const phrase = new Phrase(game.getRandomPhrase());
    $("#overlay").fadeOut(1000);
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */

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

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */

  checkForWin() {
    const winningPhraseLength = document.querySelectorAll(".letter").length;
    const currentPhraseLength = document.querySelectorAll(".show").length;
    const win = winningPhraseLength === currentPhraseLength ? true : false;
    return win;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */

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

  /**
   * Conditon to check for win or loss
   * If @win display win overlay
   * Else if @loss display lose overlay
   */

  gameOver() {
    const divOverlay = document.querySelector("#overlay");
    const h1WinLoseText = document.querySelector("#game-over-message");
    const startButton = document.querySelector("#btn__reset");
    $(divOverlay).fadeIn();
    startButton.focus();

    if (this.missed === 5) {
      h1WinLoseText.textContent = `Sorry, the phrase was "${this.activePhrase.phrase}"`;
      divOverlay.className = "lose";
    } else {
      h1WinLoseText.textContent = "Congrats, you win!";
      divOverlay.className = "win";
    }
  }

  /**
   * Resets game board
   * Removes all li items  in the phrase id
   * Reset all key classes to default
   * Reset disabled keys to a enabled setting
   * Resets all life images to default
   */

  resetGame() {
    const phraseLi = document.querySelectorAll("#phrase li");
    const hearts = document.querySelectorAll("img");
    const disabledKeys = [
      document.querySelectorAll(".chosen"),
      document.querySelectorAll(".wrong")
    ];

    phraseLi.forEach(li => li.parentNode.removeChild(li));

    disabledKeys[0].forEach(item => {
      item.disabled = false;
      item.className = "key";
    });
    disabledKeys[1].forEach(item => {
      item.disabled = false;
      item.className = "key";
    });

    hearts.forEach(heart => (heart.src = "images/liveHeart.png"));
  }
}
