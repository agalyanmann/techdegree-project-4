/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }
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
  checkLetter(letter) {
    const selectedLetter = this.phrase.includes(letter.textContent) ? true : false;
    return selectedLetter;
  }
  showMatchedLetter(letter) {
    document.querySelectorAll(".letter").forEach(li => {
      if (li.textContent === letter.textContent) {
        li.className = `show letter ${letter.textContent}`;
      }
    });
  }
}
