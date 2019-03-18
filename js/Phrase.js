/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * This Class handles the creation of Phrases
  */
 class Phrase {
    
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
    
    // Grabbing the <ul> element on the index.html
    const ul = document.querySelector('ul');

    // setting variable to store string phrase
    let element = '';
    for (let i=0; i < this.phrase.length; i++) {

        if (this.phrase[i] == ' ') {
            element += "<li class='space'> </li>";
        } else {
            element += `<li class='hide letter $hide letter ${this.phrase[i]}'>${this.phrase[i]}</li>`
        }
    }
    ul.innterHTML = element;
    };

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        //return matching letters
        return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        // setting string for reference
        const referenceString = `.hide.letter.${letter}`;
        // matching string elements
        const matchingLetters = document.querySelectorAll(referenceString);
        // for each matching elements
        for (let each of matchingLetters) {
            //remove hide class
            each.classList.remove('hide');
            //add show class
            each.classList.add('show');
        }
    };
 };

