let computerNumber;
let userGuesses = [];
let numAttempts = 0;
let maxAttempts = 5;

function newGame() {
    window.location.reload();
}

function init() {
    computerNumber = Math.floor(Math.random()*100 + 1);
    console.log(computerNumber);
}

function guessTheNumber() {
    const userGuess = Number(document.getElementById('inputBox').value);
    userGuesses.push(' ' + userGuess);
    userGuesses.forEach(function (guess) {
        document.getElementById('guesses').textContent = userGuesses
    });
    numAttempts += 1;
    document.getElementById('attempts').textContent = numAttempts;
    if (numAttempts <= maxAttempts){
    
        resultado = isTheCorrectNumber(computerNumber, userGuess);
        document.getElementById('textOutput').textContent = resultado;

        if (resultado == "Acertou!"){
            document.getElementById('textOutput').textContent = resultado;
        }
    }
    else 
        document.getElementById('textOutput').textContent = "Você perdeu!\n" + ` O numero certo era: ${computerNumber}`
}

function isTheCorrectNumber(computerNumber, userGuess) {
    if (userGuess == computerNumber){
        // document.getElementById('inputBox').value = '';
        return "Acertou!";
    }
    else if (userGuess > computerNumber){
        document.getElementById('inputBox').value = ''
        return "Você tentou um numero maior";
    }
    else if (userGuess < computerNumber){
        document.getElementById('inputBox').value = '';
        return "Você tentou um numero menor";
    }
}
