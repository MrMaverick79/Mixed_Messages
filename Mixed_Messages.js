/* Mixed Messages. Returns a string forming a  'motivations quote' from random selection.
Part of Codeacademy's 'Full Stack Developer' course.  

Brendan Tuckerman 2022 
*/

const Mixed_Messages = {
        //establish the phrases to be selected from
        introduction : ["A strong soul is one which", "Don't give up unless", "You are bound to succeed unless", "This world is one where", "Life is simple except"],
        middle: ["your mother", "someone else", "the dog next door", "that weirdo from work", "a single chicken"],
        conclusion: ["forgets." , "gives in first.", "sleeps in so long that they miss the bus to work.", "steals your credit card.", "forgets your birthday."],

        //choose a random number from 0 - length of array
        chooseRandom(ArrayChoice) {
            return Math.floor(Math.random() * ArrayChoice.length);
        },
        
        //use chooseRandom to generate a number and then return a phrase
        //from the specific array
        selectPhrase(ArrayChoice) {
            let select = this.chooseRandom(ArrayChoice);
            return ArrayChoice[select];
        },

        //runs the methods above and returns the string.
        createSentence() {
            let start = this.selectPhrase(this.introduction);
            let mid = this.selectPhrase(this.middle);
            let end = this.selectPhrase(this.conclusion);
            return start + " " + mid + " " + end;
        },      

        
}


//Testing 30 iterationsto check randomness 
//for (let count = 0; count < 30; count++ ) {
//    console.log(Mixed_Messages.chooseRandom(Mixed_Messages.introduction))}


for (let count = 0; count < 30; count++ ) {
console.log(Mixed_Messages.createSentence());}