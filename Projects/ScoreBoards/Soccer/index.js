const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
const clock = document.getElementById("clock");
const homeGoalBtn = document.getElementById("homeGoal");
const awayGoalBtn = document.getElementById("awayGoal");
const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore");
let clockRunning = false;
let minutes;
let seconds;
let intervalId;

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", resetGame);
pauseBtn.addEventListener("click", pauseGame);
homeGoalBtn.addEventListener("click", homeGoal);
awayGoalBtn.addEventListener("click", awayGoal);

function startGame() {
    if (!clockRunning) {
        clockRunning = true;
        minutes = 0;
        seconds = 0;
        intervalId = setInterval(updateClock, 1000);
    }
}

function resetGame() {
    clockRunning = false;
    clearInterval(intervalId);
    minutes = 0;
    seconds = 0;
    clock.innerText = "00:00";
}

function pauseGame() {
    clockRunning = false;
    clearInterval(intervalId);
}

function homeGoal() {
    homeScore.innerText = parseInt(homeScore.innerText) + 1;
}

function awayGoal() {
    awayScore.innerText = parseInt(awayScore.innerText) + 1;
}

function updateClock() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    clock.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

