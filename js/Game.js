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
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
      }

      //Returns a random phrase from the phrases array
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);
        let randPhrase = this.phrases[random];
        return randPhrase;
        };

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
        for (let i=0; i < tempPhrases.length; i++) {
            phrases.push(new Phrase(tempPhrases[i]))
        }
        return phrases;
    }

    //Returns boolean value reflecting game status
    checkForWin() {
        //Contains the amount of elements with the shown class, which is added when player guesses letter correctly
        const totalShown = document.querySelectorAll('.show').length;
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

  //The qwerty keyboard classes are updated to only contain the 'key' class.
  initialize() {
    const chosen = document.querySelectorAll('.key');
    // Initalizes attributes and class settings on display banner and qwerty display
    for(let i=0; i<chosen.length; i++) {

      chosen[i].removeAttribute("disabled");
      chosen[i].className = 'key';
    }
    //Removes current phrase being displayed
    const letter = document.querySelectorAll('.letter')
    for (let i=0;i<letter.length;i++) {
        letter[i].parentNode.removeChild(letter[i]);
      }
    const space = document.querySelectorAll('.space')
    for (let i=0;i<space.length;i++) {
        space[i].parentNode.removeChild(space[i]);
      }
  //Initializes Hearts
    for(let i=0; i<tries.length; i++){
          tries[i].setAttribute('src','images/liveHeart.png');
        }
  //startGame method is called and another phrase is generated and displayed
    this.startGame();
  }

  //Method takes in the letter that triggers the event as an argument
  handleInteraction(letter) {
    //letter selected is disabled so it cannot be chosen again
    letter.setAttribute('disabled', true);
    //userAttempts stores the value returned by the checkLetter method.
    let userAttempt = this.activePhrase.checkLetter(letter.textContent);
    //If player answers incorrectly the removeLife method is called and the "wrong" class is added to the letter
    if (userAttempt === null  && letter.className != "key wrong"){
      game.removeLife();
      letter.className += " wrong";
    }
    //If player answers correctly the "chosen" class is added to the letter
    else if (userAttempt != null && letter.className != "key chosen") {
      letter.className += " chosen";
    }
  }

}