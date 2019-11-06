
var hangManState = {
    wordsToGuess: ["apple", "banana", "cherry", "donut", "eggplant", "frenchfries", "gouda", "hotdogs"],
    guessedLetter: "",
    correct: false,
    guessesRemaining: 10,
    guessedLetters: [],
    letterArray: [],
    blankSpaceArray: [],
    readyToPlay: false
}


var wordToGuess = giveWordToComp()

function giveWordToComp() {
    return hangManState.wordsToGuess[Math.floor(Math.random() * hangManState.wordsToGuess.length)]
}

console.log(wordToGuess);
displayWord(wordToGuess, hangManState.letterArray, hangManState.blankSpaceArray)

function displayWord(word, letterArr, blankArr) {
    for (i = 0; i < word.length; i++) {
        letterArr.push(word[i])
        blankArr.push(" _ ")
    }
    setTimeout(function () {
        console.log(letterArr)
        console.log(blankArr)
        console.log(hangManState.letterArray)
        console.log(hangManState.blankSpaceArray)
        renderGame(blankArr)
    }, 1000)
}


function renderGame(blanks) {
    document.getElementById("word-blanks").innerHTML = blanks
    document.getElementById("guessed-letters").innerHTML = hangManState.guessedLetters
    document.getElementById("guesses-remaining").innerHTML = hangManState.guessesRemaining
    hangManState.readyToPlay = true
    if ( blanks.indexOf(" _ ") === - 1) {
        alert("Game over you've won!")
    }
}

document.onkeyup = function (event) {
    if (hangManState.readyToPlay = false) {
        return;
    } else if (hangManState.guessesRemaining === 0) {
        alert("Game is over!")
    }

    var userGuess = event.key.toLowerCase();
    hangManState.guessedLetters.push(userGuess)


    if (hangManState.letterArray.indexOf(userGuess) === -1) {
        console.log("Incorrect Guess!")
        hangManState.guessesRemaining--;
        renderGame(hangManState.blankSpaceArray)
    } else if (hangManState.letterArray.indexOf(userGuess) >= 0) {

        for (i = 0; i < hangManState.letterArray.length; i++) {
            if (userGuess === hangManState.letterArray[i]) {
                console.log("Correct Guess! " + userGuess + " is the " + i + "letter")
                hangManState.blankSpaceArray[i] = userGuess
                renderGame(hangManState.blankSpaceArray)
            }
        }
    }


}









