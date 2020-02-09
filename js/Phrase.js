/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const displayArray = this.phrase.split("");
    const div = document.querySelector("#phrase ul");
    displayArray.forEach(letter => {
      const li = document.createElement("li");
      if (letter === " ") {
        li.className = "space";
      } else {
        li.className = `hide letter ${letter}`;
      }
      div.append(li);
      li.textContent = letter;
    });
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(letter) {
    const selectedLetter = this.phrase.includes(letter.textContent)
      ? true
      : false;
    return selectedLetter;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

  showMatchedLetter(letter) {
    document.querySelectorAll(".letter").forEach(li => {
      if (li.textContent === letter.textContent) {
        li.className = `show letter ${letter.textContent}`;
      }
    });
  }
}
