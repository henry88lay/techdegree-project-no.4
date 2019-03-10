/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
//add click event listener to reset button
document.querySelector('#btn__reset').addEventListener('click' , function() {
    //initializes a new Game object when clicked
    game = new Game();
    //calls the startGame() method on the new Game object
    game.startGame();
    game.handleKeyboard();
});
//add click event listeners to each onscreen key
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('click', function(e) {
    // call handleInteraction() on pressed key
    game.handleInteraction(e.target);
}));