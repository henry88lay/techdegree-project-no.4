/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        //lowercase version of phrase set to Phrase object
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        //grab <ul> element
        const ul = document.querySelector('ul');
        //set variable to store string
        let elem = '';
        for (let i=0; i < this.phrase.length; i++) {
                       
            if (this.phrase[i] == ' ') {
                elem += "<li class='space'> </li>";
            } else {
                elem += `<li class='hide letter ${this.phrase[i]}'>${this.phrase[i]}</li>`
            }
               
         }

         ul.innerHTML = elem;

    }
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        //return matching letter
        return this.phrase.includes(letter);
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */    
    showMatchedLetter(letter){
        //set string for reference
        const string = `.hide.letter.${letter}`;
        //use string to match elements
        const matchingLetters = document.querySelectorAll(string);
        //for each matching element
        for (let each of matchingLetters){
            //remove the hide class
            each.classList.remove('hide');
            //add the show class
            each.classList.add('show');
        }

    }


}