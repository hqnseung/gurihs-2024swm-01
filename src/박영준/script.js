let deckId = null;
const drawButton = document.getElementById('drawButton');
const cardsContainer = document.getElementById('cardsContainer');
async function getNewDeck() {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5`);
        const data = await response.json();
        if (data.success) {
            deckId = data.deck_id;
            drawCards();
        } else {
            alert('Failed to get a new deck.');
        }
    } catch (error) {
        console.error('Error getting a new deck:', error);
        alert('Error getting a new deck. Please try again.');
    }
}
async function drawCards() {
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`);
        const data = await response.json();
        
        if (data.success) {
            cardsContainer.innerHTML = ''; 
            data.cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
                cardsContainer.appendChild(cardElement);
            });
        } else {
            alert('Failed to draw cards.');
        }
    } catch (error) {
        console.error('Error drawing cards:', error);
        alert('Error drawing cards. Please try again.');
    }
}
drawButton.addEventListener('click', drawCards);
getNewDeck();