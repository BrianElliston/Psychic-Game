    var whatNum = ""
    var gameOver = false;
    var numWins = 0;
    var numLosses = 0;
    var numGuessesLeft = 9;
    var guessesSoFar = [];
    var computerChoices = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
    // This makes a key released fire an event

    document.onkeyup = function(event)  {

        var userLetter = event.key;
        

        

    
        if (userLetter = computerGuess){
            numWins++
            document.querySelector("#numWins").innerHTML = numWins;


        }

        else if (userLetter != computerGuess){

            numGuessesLeft--

        }

        if (userLetter != computerChoices){

            guessesSoFar.push(userLetter)


        }

        else if (userLetter = computerChoices){

            

        }

        if (gameOver){


            guessesSoFar = 0;
            gameOver = false;

        }

       
    
    // Pseudo Code:    Moving forward I will need to continue building out the javascript.  I will need to get the wins, losses, guesses, etc to display on the screen on "key up".  I will also need to keep adding logic and functions to get the game to behave appropriatly. I will need to get the game to reset after gameover.  Furthermore after all the javascript is rocking I will need to build out the css with bootstrap by linking to it in the head and adding using bootstrap components to make it gorgeous which will further enhance the users experiene!!!!
        