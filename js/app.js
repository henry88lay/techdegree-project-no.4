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
const qwertyButtons = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');
const tries = document.querySelectorAll('li.tries img');
const startButton = document.querySelector('#btn__reset');

let game;
let phrase;

//Creates a new instance Game Object, and calls startGame and initialize methods to refresh.
function startGame() {
    game = new Game(phrasesLiteral);
    game.startGame();
    game.initialized()
}

// Start Game Overlay Hidden
startButton.addEventListener('click', () => {
    startGame();
});

//Event listener added to onscreen keyboard.
qwertyButtons.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let letter = event.target;
        game.handleInteraction(letter);
    }
    game.checkForWin();
});

//Event listener triggered on keyboard.
window.addEventListener('keypress', (e) => {
    if(docuement.querySelector('#overlay').style.display === '') {
        if (e.keyCode == '13') {
            startGame();
        }
    }
    game.activePhrase.checkLetter(event.key);
    for(i=0; i<keys.length; i++) {
        if(e.key === keys[i].textContent) {
            let letter = keys[i];
            game.handleInteraction(letter);
        }
    }
    game.checkForWin();
})
