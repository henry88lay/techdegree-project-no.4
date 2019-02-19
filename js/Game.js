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
        this.missed += 1;
        const img = document.querySelectorAll('img');
   
          for (let i = 0; i < img.length; i++) {
              if (this.missed === 1) {
                  img[0].src = 'images/lostHeart.png';
              } else if (this.missed === 2) {
                  img[1].src = 'images/lostHeart.png';
              } else if (this.missed === 3) {
                  img[2].src = 'images/lostHeart.png';
              }  else if (this.missed === 4) {
                  img[3].src = 'images/lostHeart.png';
              } else if (this.missed === 5) {
                  img[4].src = 'images/lostHeart.png';
                  this.gameOver(false);
              }   
          }
    }

    /**
     * End game
     * @return {boolean} gameWon - whether or not a user has won or lost
     */
    gameOver(){
        const overlayDiv =  document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        const showAnswer = document.getElementById('show-answer');
     
        if (this.missed <= 4) {
            gameWon == true;
            overlayDiv.className = 'win';
            showAnswer.textContent = `Answer is: ${game.activePhrase.phrase}`;
            gameOverMessage.textContent = 'Great job!';
            document.getElementById('overlay').style.display = '';      
        } else {
            gameWon == false;
            overlayDiv.className ='lose';
            showAnswer.textContent = `Answer is: ${game.activePhrase.phrase}`;
            gameOverMessage.textContent = 'Sorry, better luck next time';
            document.getElementById('overlay').style.display = '';
        }
    }
    /**
     * Reset the game board
     */
    resetGame() {
        const ul = document.querySelector('ul');
        const li = ul.querySelectorAll('li');
        const qwertyDiv = document.getElementById('qwerty');
        const buttons = qwertyDiv.querySelectorAll('button');
        const img = document.querySelectorAll('img');
 
        for (let i = 0; i < li.length; i++) {
            li[i].remove();       
        }
 
        this.activePhrase = this.getRandomPhrase(); //shows the active phrase
        this.activePhrase.addPhraseToDisplay();
 
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].className = 'key';
        }
 
        img.forEach(image => image.src = 'images/liveHeart.png'); //resets the heart images
  
    }
 
 }