/*jslint browser: true, devel: true, white: true, plusplus: true, sloppy: true*/

/* 
Genearte a Winning Number between 1-100 (Validate the number).
An input field to submit a guess.
Store a Player's previous guesses and include them in the DOM.
Limit the number of guess attempts.
Update the DOM with feedback such as the result of their guess, hints, etc.
Custom HTML & CSS (Part 1)
On Github
Github Pages is optional, here is a tutorial on how to add your project to a live site using Github Pages!
Limit or eliminate global variables!
*/

// Set the basics for each player
var Player = function () {
        //Genearte a Winning Number between 1-100 (Validate the number).
        this.randomNumber = Math.ceil(Math.random() * 100);
        //Store a Player's previous guesses and include them in the DOM.
        this.guesses = [];
        //Limit the number of guess attempts.
        this.attempts = 5;
        //Update the DOM with feedback such as the result of their guess, hints, etc.
        this.feedback = ["<15 You are Hot! and very close to the answer too...",
                         "+-25 Getting closer, like a forcefield",
                         ">25 Cold as my Ex",
                         "Adios amigo! Try again",
                         "Bingo! Go play the Lotto NOW!"];
        this.givefeedback = function (num, remaining) {
            //            debugger
            $('#feedback').text(player1.feedback[num]);
            $('.lead').text(remaining + " Guess Remaining");
            $('.guesses').text(player1.guesses);
        };
        this.hint = [">25", "+-25", "<15"];
        this.giveHint = function (num) {
                $('.hintext').text(player1.hint[num] + " close")
            }
            //An input field to submit a guess.
        this.getInput = function () {
            return $('#playerInput').val()
        };
        //The game logic itself in all it's glory
        this.submit = function (remChan,random) {
            remChan -= 1;
            var toGuess = random;
            var playerGuess = player1.getInput();
            //Store a Player's previous guesses and include them in the DOM
            player1.guesses.push(playerGuess);
            var doTheMath = Math.abs(toGuess - playerGuess);
            // Check how far is the input from the answer and provide feedback 
            if (remChan < 0) {
                player1.givefeedback(3, remChan);
                $('#checkChallenge').remove();
            } else if (doTheMath > 25) {
                player1.givefeedback(2, remChan)
            } else if (doTheMath < 25 && doTheMath > 15) {
                player1.givefeedback(1, remChan)
            } else if (doTheMath < 15 && doTheMath >= 1) {
                player1.givefeedback(0, remChan)
            }
            // We have a winner!
            else if (doTheMath === 0) {
                player1.givefeedback(4, remChan)
                $('#checkChallenge').remove();
                $('#hintPlz').remove();
                $('.hintext').remove();
                $('.guesses').remove();
                $('.lead').remove();
            }

            console.log("Math: " + doTheMath + " To Guess: " + toGuess + " and input is: " + playerGuess + ". Chances left: " + remChan)
        }
        this.game = function (chances, random) {
            console.log("chances: " + chances);
            var remChan = chances;
            // Hint button behavior
            $('#hintPlz').click(function () {
                var toGuess = random;
                var playerGuess = player1.getInput();
                var doTheMath = Math.abs(toGuess - playerGuess);
                if (doTheMath > 25) {
                    player1.giveHint(0);
                } else if (doTheMath < 25 && doTheMath > 15) {
                    player1.giveHint(1);
                } else if (doTheMath < 15 && doTheMath >= 1) {
                    player1.giveHint(2);
                }
            });

        }
    }
    // Create player
var player1 = new Player;
// Starts game with attempts, random number, 
player1.game(player1.attempts, player1.randomNumber);

// Submit button behavior
$('#checkChallenge').click(function () {
    console.log('click');
    player1.submit(player1.attempts,player1.randomNumber);
});
// Starts using return key
$("#playerForm").submit(function () {
    console.log('return')
    player1.submit(player1.attempts,player1.randomNumber);
});
// Restart Game
$("#runChallenge").click(function () {
    location.reload();
});
// 
console.log(player1.randomNumber);
console.log(player1.getInput());