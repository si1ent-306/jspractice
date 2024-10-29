// Get references to DOM elements
const clock = document.getElementById("clock");
const quarterBtn = document.getElementById("quarterDisplay");
const setQuarterBtn = document.getElementById("setQuarter");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const homeTDBtn = document.getElementById("homeTD");
const awayTDBtn = document.getElementById("awayTD");
const homeFGBtn = document.getElementById("homeFG");
const awayFGBtn = document.getElementById("awayFG");
const homeSingleBtn = document.getElementById("homesingle");
const awaySingleBtn = document.getElementById("awaysingle");
const homesafteyBtn = document.getElementById("homesaftey");
const awaysafteyBtn = document.getElementById("awaysaftey");
const homeScore = document.getElementById("homeScore");
const awayScore = document.getElementById("awayScore");

// Initialize state variables
let homeScoreCount = 0;
let awayScoreCount = 0;
let quarter = 1;
let clockRunning = false;
let minutes;
let seconds;
let intervalId;
let gameRestarted = false;

// Attach event listeners to buttons
startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", pauseGame);
setQuarterBtn.addEventListener("click", setQuarter);
resetBtn.addEventListener("click", resetGame);
homeTDBtn.addEventListener("click", homeTD);
awayTDBtn.addEventListener("click", awayTD);
homeFGBtn.addEventListener("click", homeFG);
awayFGBtn.addEventListener("click", awayFG);
homeSingleBtn.addEventListener("click", homeSingle);
awaySingleBtn.addEventListener("click", awaySingle);
homesafteyBtn.addEventListener("click", homesaftey);
awaysafteyBtn.addEventListener("click", awaysaftey);

// Function to start the game
function startGame() {
    if (!clockRunning) {
        if (!gameRestarted) {
            minutes = 15; // Set initial time only if game is not being restarted
            seconds = 0;
        }
        clockRunning = true;
        startClock();
        gameRestarted = true; // Set gameRestarted to true
        if(minutes === 0 && seconds === 0) {
            alert("quarter over");
            setQuarter(quarter + 1);
        }
    }
}
// Function to pause the game
function pauseGame() {
    if (clockRunning) {
        clockRunning = false;
        clearInterval(intervalId)
    }
}

function resetGame() {
    clockRunning = false;
    clearInterval(intervalId);
    minutes = 15;
    seconds = 0;
    clock.innerText = "15:00";
    gameRestarted = false; // Reset gameRestarted to false
}
function startClock() {
    intervalId = setInterval(updateClock, 1000);

    function updateClock() {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes < 0) {
            minutes = 0;
            seconds = 0;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        } else {
            seconds = seconds.toString(); // added this line to convert seconds to a string
        }
        clock.innerText = minutes + ":" + seconds;
    }
}
function setQuarter() {
    quarter = prompt("Enter quarter (1-4)");
    if(quarter < 1 || quarter > 4) {
        alert("Please enter a number between 1 and 4");
        setQuarter();
    }
    else {
        alert("Quarter set to " + quarter);
        quarterBtn.innerText = "Q: " + quarter
    }
}
function setQuarter(newQuarter) {
    quarter = newQuarter;

}
function homeTD() {
    homeScoreCount = homeScoreCount + 6;
    homeScore.innerText = homeScoreCount;
}
// Function to add 6 points to home score
function awayTD() {
    awayScoreCount = awayScoreCount + 6;
    awayScore.innerText = awayScoreCount;
}
// Function to add 3 points to home score
function homeFG() {
    homeScoreCount = homeScoreCount + 3;
    homeScore.innerText = homeScoreCount;
}
// Function to add 3 points to away score
function awayFG() {
    awayScoreCount = awayScoreCount + 3;
    awayScore.innerText = awayScoreCount;
}
// Function to add 1 point to home score
function homeSingle() {
    homeScoreCount = homeScoreCount + 1;
    homeScore.innerText = homeScoreCount;
}
// Function to add 1 point to away score
function awaySingle() {
    awayScoreCount = awayScoreCount + 1;
    awayScore.innerText = awayScoreCount;
}
// Function to add 2 points to home score
function homesaftey() {
    homeScoreCount = homeScoreCount + 2;
    homeScore.innerText = homeScoreCount;
}
// Function to add 2 points to away score
function awaysaftey() {
    awayScoreCount = awayScoreCount + 2;
    awayScore.innerText = awayScoreCount;
}