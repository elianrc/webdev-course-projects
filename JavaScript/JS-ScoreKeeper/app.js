const scoreSelect = document.querySelector("#playto");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");


let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;

let scoreLimit = 3;
let isGameOver = false;

scoreSelect.addEventListener("change", () => {
    scoreLimit = parseInt(scoreSelect.value);
    reset();
});

resetButton.addEventListener("click", reset);

p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        if (p1Score != scoreLimit) {
            p1Score++;
            p1Display.textContent = p1Score;  
        }
        if (p1Score == scoreLimit) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
    }
});

p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        if (p2Score != scoreLimit) {
            p2Score++;
            p2Display.textContent = p2Score;  
        }
        if (p2Score == scoreLimit) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
    }   
});

function reset (){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score; 
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner","loser");
    p2Display.classList.remove("winner","loser");
}