/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    
    createPhrases() {
        const phrases = [
            new Phrase("Sexy 4 Eva"),
            new Phrase("Crazy Rich Asians"),
            new Phrase("Rolex GMT Master II"),
            new Phrase("Rolex Panda Ceramic Daytona"),
            new Phrase("What has a stronger pull? Fear or Money"),
            new Phrase("Value Driven Developer"),
            new Phrase("Richard Mille Felipe Massa")
            ];
        return phrases;
     }

    /**
     * Selects random phrases from the phrases
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.floor(Math.random() * this.phrases.length))];
    }

    /**
     * Begins game by selecting a random phrase and display to user.
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.resetGame(); // calls the reset game for a new game
    }

    /**
     * Handles user interaction
     */
    handleInteraction (button) {

        if(button.tagName === 'BUTTON') {

            let letter = button.textContent; 
            button.setAttribute('disabled',true);

            let checkedLetter = this.activePhrase.checkedLetter(letter); //DRY Principle always!
            
            if(!checkedLetter) {
                this.removeLife();
                button.className = 'wrong'
            } else {
                button.className = 'chosen'
            }

            this.checkForWin();
        }
    }

    /**
     * Check for game win
     * @return {boolean} true for win, false for loss
     */

    checkForWin(){
        // check if all letters are revealed
        let hidden = document.querySelectorAll('.hide');
        if(hidden.length === 0) {
            this.gameOver();
        }
    }

    /**
     * Remove life counter
     */
    removeLife(){
        //increment this.missed by one
        this.missed += 1;
        // changes heart image
        let hearts = document.querySelectorAll('.tries img');
        hearts[this.missed -1].src = 'images/losingHeart.png';
        if(this.missed === 5) {
            this.gameOver();
        }
    }
 }