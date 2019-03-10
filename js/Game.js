/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        //track misses
        this.missed = 0;
        // create array of phrases objects and set activewPhrase to null
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases array from phrases property
    * @return {array} phrases array
    */
    createPhrases() {
        let phrasesArray = [
            new Phrase('The best things in life are not for sale'),
            new Phrase('reap what you sow'),
            new Phrase('devil may cry'),
            new Phrase('Hopefully people can see my music is tethered to my brain'),
            new Phrase('You cannot avoid war in life'),
        ];
        return phrasesArray;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        //start game by resetting everything
        this.gameReset();
        //hide start screen
        document.querySelector('#overlay').style.display = 'none';
        //get a random phrase
        let phrase = this.getRandomPhrase();
        //add the phrase to display
        phrase.addPhraseToDisplay(phrase);
        //make phrase activePhrase
        this.activePhrase = phrase;
    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        //if hidden letters return false
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            
            return false;
        }
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        //increase misses after each miss
        this.missed += 1;
        //check # of misses and call gameOver if === 5
        if (this.missed === 5) {
            // pass  loss to gameOver()
            this.gameOver(false);
        } else {
            //call wrongAnswer
            this.wrongAnswer();
            setTimeout(game.answerReset, 300);
            //scoreboard of images reduces by one with each loss
            const heartImg = document.querySelector("img[src='images/liveHeart.png']");
            heartImg.src="images/lostHeart.png";
        }
    }
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        //set overlay display back to block
        document.querySelector('#overlay').style.display = '';
        //show reset button
        document.querySelector('button').style.display = '';
        //if game is won
        if (gameWon) {
            document.querySelector('#overlay').setAttribute('class', 'win');
            document.querySelector('#game-over-message').innerHTML = 'Congratulations! You Won!';
            // if game is lost  
            }    
            else {
                document.querySelector('#overlay').setAttribute('class', 'lose');
                document.querySelector('#game-over-message').innerHTML = 'Sorry, You Lost. Please Try Again.';
            }
    }
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        //disable button
        button.disabled = true;
        //extracts text from button
        const letter = button.innerHTML;
        //if phrase doesn't match letter
        if (this.activePhrase.checkLetter(letter) === false){
            //remove a life
            this.removeLife();
            //add wrong class to button
            button.classList.add('wrong');
            
        } else if (this.activePhrase.checkLetter(letter) === true){
            this.activePhrase.showMatchedLetter(letter);
            let $won = this.checkForWin();
            if ($won === true) {
              this.gameOver(true);
            } else {
                this.rightAnswer();
                setTimeout(game.answerReset , 750);
                //set class to chosen
                button.classList.add('chosen');
            }        
        
        }
        
    }
    /**
     *Performs Reset functionality and called at start of each game
     *
     * @memberof Game
     */
    gameReset(){
        //remove <li></li> elements from <ul>
        document.querySelectorAll('#phrase li').forEach(link => link.remove());
        //reset each key by enabling and adding/removing appropriate classes
        document.querySelectorAll('.key').forEach(key => {
            key.removeAttribute('disabled');
            key.classList.remove('chosen', 'wrong');
            key.classList.add('key')
        });
        //reset scoreboard images
        document.querySelectorAll('.tries img').forEach(image => image.src="images/liveHeart.png");
        //reset misses to 0
        this.missed = 0;
        //reset scoreboard images
        
        
    }
    /*
    * code to execute if guess is wrong
    *
    * */
    wrongAnswer(){
        document.querySelector('#game-over-message').innerHTML = 'Nope! Sorry!';
        document.querySelector('#overlay').style.backgroundColor = '#FBE864';
        document.querySelector('button').style.display = 'none';
        document.querySelector('#overlay').style.display = 'flex';
    }
    /*
    * code to execute if guess is wrong
    *
    * */
    rightAnswer(){
        document.querySelector('#game-over-message').innerHTML = 'Boo-Yah!';
        document.querySelector('#overlay').style.backgroundColor = '#9F8BE5';
        document.querySelector('button').style.display = 'none';
        document.querySelector('#overlay').style.display = 'flex';
    }
    /*
    * code to hide overlay after wrongAnswer() or rightAnswer()
    *
    * */
    answerReset() {
        document.querySelector('#overlay').style.display = 'none';
    }
    handleKeyboard (){
        document.addEventListener('keydown', function (e) {
        const keys = document.querySelectorAll('.key');
        for (let key of keys) {
            if (key.innerHTML == e.key) {
                if(!key.classList.contains('chosen') && !key.classList.contains('wrong')) {
                game.handleInteraction(key);
                }

            }
        }
    }

    )};
   
};
