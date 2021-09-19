/*
GAME RULES
- Player must guess a number between 1 and 10
- Each player gets 3 guesses
- Notify the player if the guess remaining
- Let user know if the guess was wrong or right
- Add play again feature

*/

// Game Values
let min = 1,
    max = 10,
    winningNum = randomNum(min, max),
    guessesLeft = 3;
    

// UI ELEMENTS

const game = document.querySelector("#game"),
      minNum = document.querySelector(".minNum"),
      maxNum = document.querySelector(".maxNum"),
      number = document.querySelector("#guessinput"),
      submitNumber = document.querySelector("#guessBtn"),
      message = document.querySelector("#message");


// ASSIGN MIN NUM AND MAX NUM TO UI
minNum.textContent = min;
maxNum.textContent = max;

// CLICK EVENT
submitNumber.addEventListener('click', function(e){
    if (submitNumber.classList.contains('playAgain')) {
        window.location.reload();
    }
    let guess = parseInt(number.value);
    // VALIDATING
if (isNaN(guess)) {
    getMessage(`Please enter a number`, 'red');
    return;
}else if(guess < min){
    getMessage(`Please enter a number greater than ${min}`,'red');
    return;
}else if(guess > max){
    getMessage(`Please enter a number smaller than ${max}` , 'red');
    return;
}


// check if won
if(guess === winningNum) {
    gameOver(`Congrats you won`, 'green');

}else{
    guessesLeft = guessesLeft-1;
    if (guessesLeft === 0) {
        gameOver(`Game over, you lost, ${winningNum} was the correct number`, 'red');

    }else{
        number.style.disply = 'red';
        number.value = '';
        getMessage(`Wrong, you have ${guessesLeft} guesses left`, 'red');
    }
}

});


function gameOver(msg,color){
    number.style.borderColor = color;
    number.disabled = true;
    getMessage(msg, color);
    playAgain();
}
function getMessage(message, color){
    document.querySelector("#message").style.color = color;
    document.querySelector("#message").textContent = message;
    
}
function playAgain(){
    submitNumber.value = 'Play Again';
    submitNumber.className = 'playAgain';

}
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
    
}