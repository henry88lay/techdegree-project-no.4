/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const text = this.phrase;
        const phraseDiv = document.querySelector('#phrase');
        const phraseList = document.getElementsByTagName('ul')[0];     
        

        // Uses an ES6 method to iterate over an array to find each character of the phrase
        // Returns a list of characters which will be appended to the phrase div
        for(const character of text) {
            const phraseLI = document.createElement('li');
            phraseLI.classList.add('letter');
            if(character === ' ') {
                phraseLI.classList.remove('letter');
                phraseLI.classList.add('space');
            }
            phraseLI.textContent = character;
            phraseList.appendChild(phraseLI);
        }

        phraseDiv.appendChild(phraseList);
        return phraseDiv;
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        let lettersInPhrase = this.phrase;
        if(lettersInPhrase.includes(letter)) {
            return true
        } else {
            return false;
        }
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

        let letters = document.querySelectorAll('.letter');
        for(let i = 0; i < letters.length; i+=1) {
            if(letter === letters[i].textContent) {
                letters[i].className = 'show';
            }
        }
    }
    
}