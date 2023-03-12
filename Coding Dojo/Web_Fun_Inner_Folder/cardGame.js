var suits = ['S','D','C','H'];
var ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var newDeck = [];
var fullShoe = [];
var insert;

function deck() {
    for (var i = 0; i<4; i++){             //i assigning each suit
        for (var z = 0; z < 13; z++){       // z assigned to the ranks
        newDeck.push(ranks[z]+suits[i])
        }
    }
}

function Shoe() {                         //turning the deck into 6 decks. 312 Cards Total.
    for (var q = 0; q < 6; q++){
        for (w=0; w<52; w++){
            insert = newDeck[w];   
            fullShoe.push(insert);
        }
    }
}








deck();
Shoe();
console.log(newDeck);                     //fullShoe is 6 full decks