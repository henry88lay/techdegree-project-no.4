/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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