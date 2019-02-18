/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;
    const startButton = document.querySelector("#btn_reset");
    const keyboard = document.querySelector('#qwerty');
    const keys = document.querySelectorAll('#qwerty .keyrow button');
    const overlay = document.querySelector('#overlay');

const start = () => {
    game = new Game ();
    game.startGame();
}

startButton.addEventListener('click', () => {
    $('#overlay').fadeToggle('slow', () => start());
});

keyboard.addEventListener('click', () => {
    game.handleInteraction(e.target);
});

document.addEventListener('keydown', (e) => {
    if(e.which === 13 && overlay.style.display !== 'none'){
        $('#overlay').fadeToggle('slow', () => start());
    }
    for(let i = 0; i < keys.length; i++) {
        if(e.key === keys[i].textContent) {
            if(keys[i].classList.contains('wrong')) {
                e.preventDefault();
            } else {
                game.handleInteraction(keys(i));
            }
        }
    }
});