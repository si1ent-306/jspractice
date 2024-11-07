// Initialize a new deck by making a fetch request to the Deck of Cards API
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        const deckId = data.deck_id; // Extract the deck ID from the response data
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
        });
    })
    .catch(error => console.error("An error occurred:", error)); // Log any errors that occur during the fetch requests