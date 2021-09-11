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
const myDeck = new deck;


//to shuffle the deck so not all in order
function shuffle(o) {

    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
const myPlayingDeck = shuffle(myDeck);

//need to split pack into 2 hands
//difficulty easy/med/hardset computer time for using snap?
//player who has all cards wins

// difficulty level

function difficulty() {

}
//spliting deck into 2 hands


function split(e) {

    const user1Hand = []
    const compHand = []

    const split1 = myPlayingDeck.slice(0, 27);
    const split2 = myPlayingDeck.slice(27, 53);

    user1Hand.push(split1);
    compHand.push(split2);


    return split
}

//turn 1 card over at a time for player hand and comp hand show card on playing board

function deal() {

}


//button click to call snap if true snap cards go to player/comps hand

function snapCall() {

}

//check if each player still has cards in hand if 1 has no cards declare winner

function cardCount() {

}

split()