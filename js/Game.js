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
        let phrases = [];
        
            phrases.push(new Phrase("Sexy for Eva"));
            phrases.push(new Phrase("Crazy Rich Asians"));
            phrases.push(new Phrase("Rolex GMT Master II"));
            phrases.push(new Phrase("Rolex Panda Ceramic Daytona"));
            phrases.push(new Phrase("Fear or Money"));
            phrases.push(new Phrase("Value Driven Developer"));
            phrases.push(new Phrase("Richard Mille Felipe Massa"));
        
            return phrases;
     }

    /**
     * Selects random phrases from the phrases
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * 7);
        return this.phrases[randomNum];
    }

    /**
     * Begins game by selecting a random phrase and display to user.
     */
    startGame() {
        this.resetGame();
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Handles user interaction
     */
    handleInteraction (button) {

        if(button.tagName === 'BUTTON') {

            let letter = button.textContent; 
            button.setAttribute('disabled',true);

            let checkedLetter = this.activePhrase.checkLetter(letter); //DRY Principle always!
            
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
        hearts[this.missed -1].src = 'images/lostHeart.png';
        if(this.missed === 5) {
            this.gameOver();
        }
    }

    /**
     * End game
     * @return {boolean} gameWon - whether or not a user has won or lost
     */
    gameOver(){
        let phrase = document.querySelectorAll('.hide');
        let overlay = document.querySelector('#overlay');
        let msg = document.querySelector("#game-over-message");

        //display original overlay
        overlay.style.display = 'block';
            if(phrase.length === 0) {
                msg.textContent = "WINNING YO!!!!"
                overlay.className = "win"
            } else {
                msg.textContent = "Better Luck Next Time! GG Tho!"
                overlay.className = "lose"
            }
    }
    /**
     * Reset the game board
     */
    resetGame(){
        let li = document.querySelectorAll('#phrase ul li');
        let ul = document.querySelector('#phrase ul');
        for(ul of li) {
            ul.remove(li);
        }
        let key = document.querySelectorAll('#qwerty .keyrow button');
        for(let i = 0; i < key.length; i++){
            key[i].removeAttribute('disabled');
            key[i].className = 'key';
        }

        let hearts = document.querySelectorAll('.tries img');
        hearts.forEach(life => life.src = 'images/liveHeart.png');
    }
 }