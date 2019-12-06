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
                    new Phrase("What we think we become"),
                    new Phrase("Stop existing and start living"),
                    new Phrase("There is always a way"),
                    new Phrase("Chance favors the prepared mind"),
                    new Phrase("All limitations are self imposed")
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
            // hides the display so that you can see the Boxes
            $('#overlay').hide();
            // calls the getRandom Method to grab a random phrase from the game class
            let word = this.getRandomPhrase();
            // this returns an object (phrase), which allows me to call that objects method of Display
            word.addPhraseToDisplay();
            // Set the object (word), Set it equal to activephrase.
            this.activePhrase = word;
        };

            // Once the game has ended this function will be called. 

        resetGame() {
            const listItems = document.getElementById("phrase");
            console.log(listItems);

            while (listItems.hasChildNodes()){
                listItems.removeChild(listItems.firstChild);
            }
        }



        /**
        * Handles onscreen keyboard button clicks
        * @param (HTMLButtonElement) button - The clicked button element
        */

        handleInteraction(button) {
            button.disabled = true;
            
            if(this.activePhrase.checkLetter(button.innerText) === true){
                button.className = 'chosen';
                this.activePhrase.showMatchedLetter(button.innerText);
                if(this.checkForWin() === true){
                    this.gameOver(true);
                }
            } else if (this.activePhrase.checkLetter(button.innerText) === false) {
                button.className = 'wrong';
                this.removeLife();
            }
        }

        /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't
        won
        */

        checkForWin() {
            // Grabbed all the elements with the class of hide, which are Jquery objects, compared the length to the length of the phrase after removing the spaces.
            if ($('.hide').length === game.activePhrase.phrase.replace(/\s+/g, '').length) {
                return false;
            } else if ($('.show').length === game.activePhrase.phrase.replace(/\s+/g, '').length) {
                return true;
            }
            
        };

        /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out
        */
       
        removeLife() {
            // Created an if statement instead of a for loop because I only wanted to lose 1 life at a time.
            if (this.missed < 5) {
                // Grabbed the img tag name, brings back an array. 
                let hearts = document.getElementsByTagName('img');
                // accessed the hearts array index, and the property of src to change it. 
                hearts[this.missed].src = "images/lostHeart.png";
                // set the games this.missed property to the index. 
                return this.missed++
            } else {
                this.gameOver(false);
            }
                
        };


        /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
        */
        gameOver(gameWon) {
            $('#overlay').show();
            if(this.checkForWin === true || gameWon === true) {
                $("#overlay").removeClass("start").addClass('win');
                $("#game-over-message")[0].innerText = "CONGRATS YOU WON";
            } else if (this.checkForWin === false || gameWon === false) {
                $("#overlay").removeClass("start").addClass('lose');
                $("#game-over-message")[0].innerText = "SORRY BETTER LUCK NEXT TIME";
                console.log();
            }
            this.resetGame();
        };

        

        


        }