let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".last-result");
const lowOrHi = document.querySelector(".low-or-hi");
const guessSubmit = document.querySelector(".guess-submit");
const guessField = document.querySelector(".guess-field");

let guessCount = 1;
let resetButton;

function checkGuess () {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.marginLeft = "10px";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px"
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lastResult.style.marginLeft = "10px";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px"
        lastResult.style.backgroundColor = "red"
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        lastResult.style.marginLeft = "10px";
        lastResult.style.padding = "10px 20px";
        lastResult.style.borderRadius = "50px"
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

function setGameOver () {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.classList.add("resetbtn");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame () {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".result-paras p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}