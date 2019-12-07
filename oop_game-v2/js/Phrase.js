/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//  Think of this as 1 object of a selected Phrase

 class Phrase {
     constructor (phrase) {
            // this.phrase is creating a property called phrase for this object(class called phrase). we want to make it a string. 
        this.phrase = phrase.toLowerCase();
     }

        /**
        * Display phrase on game board
        */

     addPhraseToDisplay() {
            //  Grabs the phrase header
            let phraseHeader = document.getElementById("phrase").firstElementChild;
            let listItem = document.createElement('li');

            for (let i=0; i < this.phrase.length; i++) {
                let grabCharacter = this.phrase[i];
                if (grabCharacter !== " "){
                    listItem.innerHTML += `<li class="hide letter ${grabCharacter}">${grabCharacter}</li>`;
                    phraseHeader.append(listItem);
                } else {
                    listItem.innerHTML += `<li class="space"> </li>`;
                    phraseHeader.append(listItem);
                }
            }        
        }

        /**
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
        */

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };

        /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
        */

    showMatchedLetter(letter) {
        // Letter is a string, 
        // Grabs all list items with the class of letter. 
        let matchedLetter = document.querySelectorAll(`.letter`);
        // console.log(matchedLetter);
        // creates a loop to check all letter within the array, check to see if the match letter
        for (let i = 0; i < matchedLetter.length; i++) {

            if ( matchedLetter[i].innerHTML === letter) {
                matchedLetter[i].classList.remove('hide');
                matchedLetter[i].classList.add('show');
            }
        }
        // console.log(matchedLetter);
        // Must return letter 
        return letter;
    };

 }