/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Global Variables
const phrasesLiteral = [
    "there is nothing permanent except change",
    "you cannot shake hands with a clenched fist",
    "Learning never exhuasts the mind",
    "the only journey is the one within",
    "independence is happiness"
]
let game; 
const btnStart = document.querySelector("#btn__reset");
btnStart.addEventListener('click', function() {
    game = new Game();
    game.phrases = game.createPhrase();
    game.startGame();
});

// Select all keyboars on the screen
// Attach an eventlistener to listen for the selected letter
const keyButtons = document.querySelector('#qwerty');
keyButtons.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        // This will make a call to handle all interactions regarding:
        game.handleInteraction(e.target);
    }

})