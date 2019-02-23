/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor(array) {
        //Tracking number of missed guess by the player
        this.missed = 0
        //arrayLiteral has a value set to the array passed in
        this.arrayLiteral = array;
        //phrases has a value that uses the createPhrases method to grab 5 random phrases
        this.phrases = this.createPhrases();
        //activePhrase holds the phrase in play
        this.activePhrase = null;
    }

    //Hides the #overlay start screen, sets the activePhrase to a random phrase from the phrases array, then adds it to the screen.
    startGame() {
        document.querySelector('#overlay').getElementsByClassName.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //Returns an array of 5 unique phrases grabbed from the arrayLiteral
    createPhrases() {
        let tempPhrases = [];
        let phrases = [];
            for (let i=0; i<5;) {
                let random = Math.floor(Math.random() * this.arrayLiteral.length);
                let phrase = this.arrayLiteral[random];
                if(tempPhrases.indexOf(phrase)===-1) {
                    tempPhrases.push(phrase)
                    i++
                }
            }
        for (let j=0; j < tempPhrases.length; j++) {
            phrases.puch(new Phrase(tempPhrases[j]))
        }
        return phrases;
    }

}