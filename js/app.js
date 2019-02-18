/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById("btn__reset");
const game = new Game();

/* Start game by clicking, New game object is called */
startGameButton.addEventListener('click', () => {
    game.startGame();
    game.resetGame();
});


document.getElementById('qwerty').addEventListener('click', (e) => {
    game.handleInteraction(e.target);
});

