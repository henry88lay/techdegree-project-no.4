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

    //Returns boolean value reflecting game status
    checkForWin() {
        //Contains the amount of elements with the shown class, which is added when player guesses letter correctly
        const totalShown = docuement.querySelectorAll('.show').length;
        //contains the number of letters in the phrase
        const totalLetters = document.querySelectorAll('.letter').length;
        const startScreen = document.querySelector('#overlay');
        const h2 = document.querySelector('h2.title');
        // if total number of letters guessed correctly equals the number of letters
        if (totalShown === totalLetters) {
            startScreen.style.display = '';
            startScreen.className = 'win';
            startScreen.textContent = 'Play Again!?'
            h2.textContent = 'Well Done! You Win!'
            this.missed = 0;
            return true;
        } else if (this.missed >= tries.length) {
            startScreen.style.display = '';
            startScreen.className = 'lose';
            startScreen.textContent = 'Try Again!'
            h2.textContent = 'You Lose! Better Luck Next Time!'
            this.missed = 0;
            return false;            
        }
    }

    //Remove heart and replace with lostHeart img 
    removeLife(letter) {
        tries[tries.length-1-this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
    }

    //qwerty keyboard classes only contain the 'key' class
    intiailize() {
        const chosen = document.querySelectorAll('.key');

        for(let i = 0; i < chosen.length; i++) {
            chosen[i].removeAttribute("disabled");
            chosen[i].className = 'key';
        }

        
    }
}