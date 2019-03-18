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

 };
