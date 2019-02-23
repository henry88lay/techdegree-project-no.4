/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase;
    }

    //This method lopps through the characters in the phrase and creates list items for each letter then appends them insight of the ul with the id #phrase
    addPhraseToDisplay() {
        const ulOfPhrases = document.querySelector('#phrase ul');
        for(let i=0; i < this.phrase.length; i++) {
        let liPhrase = document.createElement('li');
        liPhrase.textContent = this.phrase[i];
        if (liPhrase.textContent == ' ') {
            liPhrase.className = 'space';
        } else {
            liPhrase.className = 'letter';
        }
        ulOfPhrases.appendChild(liPhrase);
        }
    }

    /*This methods checks to see if the letter selected excists in the current game phrase.
     *The Target that triggers the event is passed as an argument.
     *The method will either return the letter contained in the prase or return null. */
     checkLetter(letter) {
         //letterFound is declared as false and will only become true if letter shows up in following loop.
         let letterFound = false;
         const letters = document.querySelectorAll('.letter');

         for(let i=0; i < letters.length; i++) {
             if (letters[i].textContent.toUpperCase() === letter.toUpperCase()) {
                 letterFound = true;
                 this.showMatchedLetter(letters[i]);
             }
         }
            if(letterFound) {
                return letter;
            }
            return null;
     }

     showMatchedLetter(letter) {
         letter.className += " show"
     }

}
