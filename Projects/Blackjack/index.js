// Initialize a new deck by making a fetch request to the Deck of Cards API
let deckId;
let playerPoints = 0;
let dealerPoints = 0;
function startGame(){
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('hit-button').style.display = 'block';
    document.getElementById('stand-button').style.display = 'block';
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            deckId = data.deck_id; // Extract the deck ID from the response data
            console.log("New deck created with ID:", deckId); // Log the deck ID to the console

            // Draw two cards from the newly created deck using the deck ID
            return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
        })
        .then(response => response.json()) // Parse the response of the draw request as JSON
        .then(data => {
            // Iterate over the drawn cards and log their value and suit
            data.cards.forEach(card => {
                console.log(`You drew the ${card.value} of ${card.suit}`);
                const cardImage = document.createElement('img');
                cardImage.src = card.image;
                cardImage.style.width = '100px';
                document.getElementById('player-hand').appendChild(cardImage);
                // Update the player's points
                const cardValue = card.value;
                let points;
                if (cardValue === "ACE") {
                    points = 11; // or 1, based on game rules
                } else if (["KING", "QUEEN", "JACK"].includes(cardValue)) {
                    points = 10;
                } else {
                    points = parseInt(cardValue);
                }
                playerPoints += points;
                document.getElementById('player-points').textContent = playerPoints;
                console.log(`Player points: ${playerPoints}`);
            });
        })
        .catch(error => console.error("An error occurred:", error)); // Log any errors that occur during the fetch requests
}

function hit(){

    // Add a card to the player's hand
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const cardImage = document.createElement('img');
            cardImage.src = data.cards[0].image;
            cardImage.style.width = '100px';
            document.getElementById('player-hand').appendChild(cardImage);

            // Update the player's points
            const cardValue = data.cards[0].value;
            let points;
            if (cardValue === "ACE") {
                points = 11; // or 1, based on game rules
            } else if (["KING", "QUEEN", "JACK"].includes(cardValue)) {
                points = 10;
            } else {
                points = parseInt(cardValue);
            }
            playerPoints += points;
            document.getElementById('player-points').textContent = playerPoints;
            console.log(`Player points: ${playerPoints}`);
        })
        .catch(error => console.error("An error occurred:", error)); // Log any errors that occur during the fetch request

}
console.log(deckId);