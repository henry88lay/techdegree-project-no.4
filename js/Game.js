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
     * Selects random prashe from the phrases
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.floor(Math.random() * this.phrases.length))];
    }

    
 }