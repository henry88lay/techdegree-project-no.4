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

    
}
