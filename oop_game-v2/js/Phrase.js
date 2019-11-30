/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//  Think of this as 1 object of a selected Phrase
 class Phrase {
     constructor(phrase) {
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

     
 }