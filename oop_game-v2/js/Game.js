/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor() {
            // Used to check the number of lives, or how many incorrectly guessed. Set to 0 at the start of the game.
        this.missed = 0;
            // An array of phrase objects to be used for the game, will be randomy selected. 
        this.phrase = this.createPhrase();
            // The currently phrase at the start of the game. 
        this.activePhrase = null;
    }

        /**
        * Creates phrases for use in game
        * @return {array} An array of phrases that could be used in the game
        */
            createPhrase() {
                // Create an [Array] of {objects(phrases)} that can be used in the game
                let phrases = [
                    {phrase:"What we think we become"},
                    {phrase:"Stop existing and start living"},
                    {phrase:"There’s always a way"},
                    {phrase:"Chance favors the prepared mind"},
                    {phrase:"All limitations are self imposed"}
                ];
            return phrases;
        };

        /**
        * Selects random phrase from phrases property
        * @return {Object} Phrase object chosen to be used
        */

        getRandomPhrase() {
                // Creates a function (remember you must return the function as well) that create a random number, in order to select a random index number within our this.phrase property. 
            let randomPhrase = this.phrase[Math.floor(Math.random()* this.phrase.length)]
            return randomPhrase;
        };


        /**
        * Begins game by selecting a random phrase and displaying it to user
        */

        startGame() {
            $('overlay').hide();
            
        };



}