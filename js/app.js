/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//start game button
let game = '';

document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
});