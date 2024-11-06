// Initialize the deck and players
let deck = [];
let players = [];
let currentPlayer = 0;

// Function to create a new deck of cards
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }

    // Shuffle the deck
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to create a new player
function createPlayer(name) {
    return { name, hand: [], score: 0 };
}

// Function to deal a card to a player
function dealCard(player) {
    const card = deck.pop();
    player.hand.push(card);
    return card;
}

// Function to calculate the score of a player's hand
function calculateScore(hand) {
    let score = 0;
    let aces = 0;

    for (let card of hand) {
        switch (card.value) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
                score += parseInt(card.value);
                break;
            case 'J':
            case 'Q':
            case 'K':
                score += 10;
                break;
            case 'A':
                aces++;
                score += 11;
                break;
        }
    }

    // Adjust the score if the player has aces
    while (score > 21 && aces) {
        score -= 10;
        aces--;
    }

    return score;
}

// Function to render a card to the page
function renderCard(card, playerIndex) {
    const handElement = document.getElementById(`hand-${playerIndex}`);
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `${card.value} of ${card.suit}`;
    handElement.appendChild(cardElement);
}

// Function to update the points of a player
function updatePoints(playerIndex) {
    const score = calculateScore(players[playerIndex].hand);
    document.getElementById(`points-${playerIndex}`).innerHTML = `Points: ${score}`;
}

// Function to deal two cards to each player
function dealInitialCards() {
    for (let i = 0; i < players.length; i++) {
        dealCard(players[i]);
        dealCard(players[i]);
        renderCard(players[i].hand[0], i);
        renderCard(players[i].hand[1], i);
        updatePoints(i);
    }
}

// Function to handle the hit button click
function hit() {
    const card = dealCard(players[currentPlayer]);
    renderCard(card, currentPlayer);
    updatePoints(currentPlayer);
}

// Function to handle the stand button click
function stand() {
    // Implement the logic for the stand button click
}

// Initialize the game
function initGame() {
    createDeck();
    players.push(createPlayer('Player 1'));
    players.push(createPlayer('Player 2'));
    dealInitialCards();
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);

// Add event listeners to the hit and stand buttons
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);