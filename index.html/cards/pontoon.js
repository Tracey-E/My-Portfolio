//please note the functions(*) for the deck creation and shuffle are not my own 
//credit for these parts goes to Dev Dojo all other parts are my own creation


const butt = document.getElementById('ace', 'stick', 'twist', 'game', )
const button = document.getElementById('play')
butt.addEventListener("click", function(e) { return false; }, false);
button.addEventListener("click", function(e) { return false; }, false);
const cards = [];
//(*)
function card(name, value, suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
}
//(*)
function deck() {
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var cards = [];

    for (var s = 0; s < this.suits.length; s++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push(new card(n + 1, this.names[n], this.suits[s]));
        }
    }
    return cards;

}

//pontoon
//random cards drawn
//cards adds up
//try to get 21 without going over 21
//comp opponent


//outer scope vars to use throughout program

var myPack = new deck();

var total1 = 0; //used to sum  values of all cards in hand
var user1StartHand = []; //to be used for 1st 2 cards drawn
var user1Hand = []; //to be used through rest of game
var z = []; //used to get single card value
var dealtCard = []; //to be used to identify drawn card 

//design of the deck
//(*)changed slightly as only need few cards to show not full deck

function design(x) {

    for (var i = 0; i < x.length; i++) {
        div = document.createElement('div');
        div.className = 'card';
        div.Id = 'card'
        if (x[i].suit == 'Diamonds') {
            var ascii_char = '&diams;';
        } else {
            var ascii_char = '&' + x[i].suit.toLowerCase() + ';';
        }

        div.innerHTML = '<span class="number">' + x[i].value + '</span><span class="suit">' + ascii_char + '</span> ';

        document.body.appendChild(div);
    }

}

//get random total for computer score/opponent
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandom = getRandomInt(15, 21);
const comp = getRandom;

//need new deck and 2 cards in hand
//shuffle deck-new deck

//(*)
//shuffle so all cards not in suit order
function shuff(o) {

    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
myPack = shuff(myPack);

//to create user1Hand with 2 start cards
function start(e) {

    user1StartHand = myPack.slice(0, 2)
    if (button.innerText === 'Play') {
        button.innerText = 'scroll down to view your cards'
    }
    return design(user1StartHand);

}

//add cards total method
//swap j,q,k, for 10 ech
// then add cards in hand to get total
let sum = 0; //used for total of stat 2 cards


//to total up start to cards
function handTotal(y) {

    let z = y.slice(1);
    let w = y.slice(0, 1);
    let a = z[0].value;
    let b = w[0].value;
    let c = 0;
    let d = 0;
    let num = 0;

    if ((a === 'J') || (a === 'Q') || (a === 'K')) {
        c = c + 10;

    } else if (a === 'A') {
        c = c + 0;
    } else c = a; {

    }

    if ((b === 'J') || (b === 'Q') || (b === 'K')) {
        d = d + 10;

    } else if (b === 'A') {
        d = d + 0;

    } else {
        d = b;
    }
    sum = +c + +d;

    return sum;

}

//to be able twist need to draw/deal 1 card from pack and add to user hand
var sum1 = 0; //used to total dealtcards value

function twist(e) {
    let d = [] //as you cant use dealtcard array have to use ne array
    if (totalHandValue() === 21) {
        alert('you have 21 click STICK to see who wins');
    } else if (totalHandValue() < 21) {
        dealtCard = myPack.pop();
        d.push(dealtCard)
        user1Hand.push(dealtCard);

        design(d);
        sum1 = sum1 + cardValue(d);

        return dealtCard;

    } else {
        alert('bust');
    }
}

//used to find value of each dealtCard
function cardValue(z) {
    let total = 0;
    let a = z[0].value;
    let c = 0;

    if ((a === 'J') || (a === 'Q') || (a === 'K')) {
        c = c + 10;
    } else if (a === 'A') {
        c = 0; // using 0 for aces till player decides value

    } else {

        c = a;
    }

    total = +c;

    return total;
}
//adding start hand dealt cards values and ace values
function totalHandValue() {
    let total2 = handTotal(user1StartHand)
        //if there aces in hand then add value of aces
    total1 = sum1 + total2 + aceValues;

    return total1
}

//total up hands and see who wins and letting player know

function stick(e) {

    if (totalHandValue() > 21) {
        alert("BUST");
    } else if (totalHandValue() > comp) {
        alert("You Win your score is  " + total1 + " computer score is " + comp);
    } else if (comp > total1) {
        alert("computer wins there score is  " + comp + " your score is" + total1);
    } else {
        alert("its a draw your score is " + total1 + " there score is " + comp);
    }
}
// to change value of ace and its button to show value
function aceValue(e) {
    if (butt.innerText === 'click here to choose value of Ace') {
        butt.innerText = 'Ace = 1'
        aceValues = 1;
    } else if (butt.innerText === 'Ace = 1') {
        butt.innerText = 'Ace = 11';
        aceValues = 11;

    } else {
        butt.innerText = 'Ace = 1';
        aceValues = 1;

    }
    return aceValue
}
var aceValues = 0; //use to determine ace values
// to clear board of cards and start new game
function newGame(e) {
    location.reload();
}