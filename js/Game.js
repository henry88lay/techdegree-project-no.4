/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * Game class is for starting and ending the game
  * handling interactions
  * getting a random phrase
  * checking for a win
  * removing a life from the scoreboard
  */

 class Game {
    constructor() {
        //Tracking the missed guesses by the player
        this.missed = 0;
        //An array of Phrases Created here
        this.phrases = this.createPhrases();
        //Selecting a random phrase from the array
        this.activePhrase = null;
        }


    /**
    * Creates phrases for use in game
    * @return {array} An array of prhases that could be used in the game
    */    
    createPhrases() {
        let phrasesArray = [
            new Phrase('A happy soul in a happy body'),
            new Phrase('A journey of a thousand miles must begin with a single step'),
            new Phrase('A very interesting theory makes no sense at all'),
            new Phrase('Feeling gratitude and not expressing it is like wrapping a present and not giving it'),
            new Phrase('Humility is not thinking less of yourself, it’s thinking of yourself less'),
        ];
        return phrasesArray;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        // start game via reset
        //this.gameReset();

        // hide random phrase
        document.querySelector('#overlay').style.display = 'none';

        this.activePhrase = this.activePhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
      let hiddenLetters = document.querySelectorAll('.hide');

      // If letters return false
      if (hiddenLetters === 0) {
          return true;
      } else {
          return false;
      }

    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        // Incremental miss after each miss
        this.missed += 1;
        // check number of misses and calling game over
        if (this.missed === 5) {
            this.gameOver(false);
        } else {
            this.wrongAnswer();
            const heartImg = document.querySelector("img[src='images/liveHeart.png']");
            heartImg.src="images/lostHeart.png";
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        
        //setting the overlay display back to block
        document.querySelector('#overlay').style.display = '';

        //make reset button visable
        document.querySelector('button').style.display = '';

        // if the player won
        if (gameWon) {
            document.querySelector('#overlay').setAttribute('class', 'win');
            document.querySelector('#game-over-message').innerHTML = 'You did it! You Won!'
        } else {
            // if the player lost
            document.querySelector('#overlay').setAttribute('class', 'lose');
            document.querySelector('#game-over-message').innerHTML = 'Better Luck Next Time! Try Again!?'
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        if (button.tagName === 'BUTTON') {
            
            // capture selected letter
            let letter = button.textContext;
            button.setAttribute('disabled', true);

            // match letter with phrase
            let checkedLetter = this.activePhrase.checkLetter(letter);
            
            if (!checkedLetter) {
                this.removeLife();
                button.className = 'wrong'
            } else {
                button.className = 'chosen'
            }
        }

        //checking for a game win
        if (this.checkForWin() == true) {

            this.gameOver(true);

        }
    }

        // reset the game
	resetGame() {
		let li = document.querySelectorAll('#phrase ul li');
		let ul = document.querySelector('#phrase ul');
		for (ul of li) {
			ul.remove(li);
		}
		let key = document.querySelectorAll('#qwerty .keyrow button');
		for (let i = 0; i < key.length; i++) {
			key[i].removeAttribute('disabled');
			key[i].className = 'key';
		}
		let hearts = document.querySelectorAll('.tries img');
		hearts.forEach(life => life.src = 'images/liveHeart.png')
    }
}
