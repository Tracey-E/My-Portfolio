//1 deck of cards
//1 player 1 computer apponent
//click when suit/num match 
//one who has all cards wins

//basic deck creation
class card {
    constructor(name, value, suit) {
        this.name = name;
        this.value = value;
        this.suit = suit;
    }
}
class deck {
    constructor(names, suits) {
        this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var cards = [];
        for (let n = 0; n < this.names.length; n++) {
            for (let s = 0; s < this.suits.length; s++) {
                cards.push(new card(n + 1, this.names[n], this.suits[s]))
            }
        }
        return cards
    }
}
myDeck = new deck;
console.log(myDeck);

//to shuffle the deck so not all in order
function shuffle(o) {

    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
myDeck = shuffle(myDeck);