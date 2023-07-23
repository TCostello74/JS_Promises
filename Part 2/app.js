const axios = require('axios');

axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => {
    let card1 = response.data.cards[0];
    console.log(`${card1.value} of ${card1.suit}`);
    
    let deck_id = response.data.deck_id;

    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
  })
  .then(response => {
    let card2 = response.data.cards[0];
    console.log(`${card2.value} of ${card2.suit}`);
  })
  .catch(error => {
    console.log(error);
  });
