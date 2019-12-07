/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

     // This WORKS!!
//  Creating an instance of each class. Checked and they are working.
//  const phrase = new Phrase();
//  const game = new Game();

// const phrase = new Phrase(`Life is like a box of chocolates`);
// // phrase is the property of the phrase object. 
// console.log(`Phrase - phrase: ${phrase.phrase}`);
// console.log(phrase);
    // This WORKS!!
// const game = new Game();
// game.phrase.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// console.log(game);

    // This WORKS!!
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(game);

// const game = new Game();
// game.startGame();
// console.log(game);
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
const startButton = $('#btn__reset');
const screenKeyboard = $('#qwerty .key');

document.addEventListener('keyup', function(e) {
    console.log(e.key);
    // Not sure how to change the string into an object to be passed into my handleInteraction()
    
})

startButton.on('click', function() {
    game = new Game();
    game.startGame();
    
    
})

screenKeyboard.on('click', function(e) {
    
    let button = e.target;
    // console.log(button);
    game.handleInteraction(button);   

})
