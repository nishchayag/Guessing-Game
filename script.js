const form = document.getElementById("form");
const inputBar = document.getElementById("inputBar");
const submitBtn = document.getElementById("submitBtn");
const hintPara = document.getElementById("hintPara");
const guessCount = document.getElementById("guessCount");

let targetNum = Math.ceil(Math.random() * 100);
console.log(targetNum);
let count = 0;
form.addEventListener("submit", event => {
    event.preventDefault();
    checkNum();
});

function checkNum() {
    if (inputBar.value == targetNum) {
        count++;
        hintPara.innerText = "You Guessed the number correctly";
        guessCount.innerText = `No. of Guesses: ${count}`;
        submitBtn.disabled = true;
    }
    else if (inputBar.value != targetNum) {
        count++;
        if (inputBar.value > targetNum) {
            hintPara.innerText = "Enter a smaller number";
            guessCount.innerText = `No. of Guesses: ${count}`;
        }
        else if (inputBar.value < targetNum) {
            hintPara.innerText = "Enter a larger number";
            guessCount.innerText = `No. of Guesses: ${count}`;
        }
        inputBar.value = "";
    }
}

