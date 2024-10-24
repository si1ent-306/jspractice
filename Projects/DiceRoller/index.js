// Roll the dice, update the page, and store the result in history
const rollDice = () => {
    const roll = getRandomNumber();
    const image = getDiceImage(roll);
    updateDiceImage(image);
    updateHistory(roll);
};
// Generate a random number between 1 and 6
const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;

// Update the image of the dice
const updateDiceImage = (image) => {
    const dice = document.getElementById("dice");
    dice.innerHTML = image;
};

// Update the history of previous rolls
const updateHistory = (random) => {
    const historyList = getHistoryList();
    historyList.push(random);
    historyList.length > 10 && historyList.shift();
    const history = document.getElementById("history");
    history.innerHTML = "";
    historyList.forEach((roll, i) => {
        const list = document.createElement("li");
        list.textContent = roll;
        if (i === historyList.length - 1) {
            list.classList.add("newest-item");
        }
        history.appendChild(list);
    });
    setHistoryList(historyList); // Store the updated history list
};

// Get the history list from local storage
const getHistoryList = () => {
    const historyList = localStorage.getItem("historyList");
    return historyList ? JSON.parse(historyList) : [];
};

// Set the history list in local storage
const setHistoryList = (historyList) => {
    localStorage.setItem("historyList", JSON.stringify(historyList));
};

// Get the image of the dice based on the roll
const getDiceImage = (roll) => {
    switch (roll) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
    }
};

// Set up the event listener for the button
const button = document.getElementById("roll-button");
button.addEventListener("click", rollDice);

// Initialize history display on page load
window.onload = () => {
    const historyList = getHistoryList();
    const history = document.getElementById("history");
    historyList.forEach((roll, i) => {
        const list = document.createElement("li");
        list.textContent = roll;
        if (i === historyList.length - 1) {
            list.classList.add("newest-item");
        }
        history.appendChild(list);
    });
};