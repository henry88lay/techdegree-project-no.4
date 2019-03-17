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


 };
