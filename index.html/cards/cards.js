
//please note the functions(*) for the deck creation and shuffle are not my own 
//credit for these parts goes to Dev Dojo all other parts are my own creation

//snap code starts at line 262

//pontoon game code
//pontoon buttons
const butt = document.getElementById('ace', 'stick', 'twist', 'game', );
const button = document.getElementById('play');
butt.addEventListener("click", function(e) { return false; }, false);
button.addEventListener("click", function(e) { return false; }, false);



const cards = [];

//pontoon
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
 var col =[];
    let gridIte = document.getElementsByClassName("gridItem")

    for (var i = 0; i < x.length; i++) {
        gridIte = document.createElement('div');

        if (x[i].suit == 'Diamonds') {
            var ascii_char = '&diams;';
        } else {
            var ascii_char = '&' + x[i].suit.toLowerCase() + ';';
        }
        if ((x[i].suit === 'Diamonds') || (x[i].suit === 'Hearts')) {

         col.push( 'red');

        } else {
         col.push('black');
        }


        gridIte.innerHTML =
            '<span class="number">' + x[i].value + '</span><span  class="suit" >' + ascii_char + '</span>';


        gridIte.setAttribute("id", "card",);
        gridItem.parentNode.insertAdjacentElement('afterend', gridIte);
        //document.append(div);

    }
}



//get random total for computer score/opponent
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandom = getRandomInt(15, 23);
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
        button.innerText = 'Click Twist or Stick'
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
    let d = [] //as you cant use dealtcard array have to use new array
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
  if (totalHandValue() > 21 & comp > 21 ){
        alert("Both you and computer bust , its a draw")
    } else if (totalHandValue() > 21) {
        alert("BUST");
    } else if (comp > 21) {
         alert(" The computer bust You win")
    }else if (totalHandValue() > comp) {
        alert("You Win your score is  " + total1 + " computer score is " + comp);
    } else if (comp > total1 ) {
        alert("the computer wins there score is  " + comp + " your score is" + total1);
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









//SNAP code start
//snap buttons
const snapButto = document.getElementById( 'playGame' );
snapButto.addEventListener("click", function(e) { return false; }, false);

const snapButton = document.getElementById( 'nextCard','playGame','Snaps' );
snapButton.addEventListener("click", function(e) { return false; }, false);
const snapButt = document.getElementById('difficulty')
snapButt.addEventListener("click", function(e) { return false; }, false);

const CARDSUITS = ["♥", "♦", "♠", "♣"];
const CARDVALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


class Carddeck {
    constructor(cardsDeck = fullDeck()) {

        this.cardsDeck = cardsDeck;
    }

    get cardNumbers() {
        return this.cardsDeck.length;
    }

    shuffle() {
        for (let i = this.cardNumbers - 1; i > 0; i--) {
            const newPlace = Math.floor(Math.random() * (i + 1));
            const oldPlace = this.cardsDeck[newPlace];
            this.cardsDeck[newPlace] = this.cardsDeck[i];
            this.cardsDeck[i] = oldPlace;
        }
    }    
}

class SoloCard {
    constructor(suit, value) {
        this.value = value;
        this.suit = suit;
    }

    cardsColor() {
        return this.suit === "♠" || this.suit === "♣" ? 'black' : 'red'
    }

    GetHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("newCard")
        cardDiv.classList.add(this.cardsColor())
        cardDiv.dataset.value = `${this.value} ${this.suit} `
        return cardDiv
       }
}


 function fullDeck() {
    return CARDSUITS.flatMap(suit => {
        return CARDVALUES.map(value => {
            return new SoloCard(suit, value);
        })
    })
}
   
    



  const myCardDeck = new Carddeck();
 
  myCardDeck.shuffle()
  
const playCards = myCardDeck.cardsDeck;

    //need to split pack into 2 hands
    //difficulty easy/med/hard set computer time for using snap? 
    //player who has all cards wins


//get the html aspects required
const userPlayerCards = document.querySelector(".userPlayerCards")
const compPlayerCards = document.querySelector(".compPlayerCards")
const userCards = document.querySelector(".usercards")
const cCard = document.querySelector(".cCard")

//global variables
const player1Cards = [];
const computerCards = [];
const usedCards = [];
let delay = 5000

//setting difficulty
function level(e) {
    if (snapButt.innerText === 'Click here to choose your difficulty level') {
        snapButt.innerText = 'EASY'
       delay= 5000;
    } else if 
        (snapButt.innerText === 'EASY') {
           snapButt.innerText = 'MEDIUM'
             delay  = 4000;
    } else if (snapButt.innerText === 'MEDIUM') {
       snapButt.innerText = 'HARD'
       delay = 1000
    } else if (snapButt.innerText === 'HARD') {
       snapButt.innerText = 'Click here to choose your difficulty level'
         delay = 5000
    }return level

    
   }

//splitting deck into 2 hands
 function playGame(e) {
    console.log(delay)
   //initial split
  const split1 = playCards.slice(0, 26);
  const split2 = playCards.slice(26, 52);
// separating 2 initial face up cards
  const playerStartCard = split1.shift()
  const computerStartCard = split2.shift()

    userPlayerCards.appendChild(playerStartCard.GetHTML());
    compPlayerCards.appendChild(computerStartCard.GetHTML());  
//change start button message
    if(snapButto.innerText ===  "Click to start your game"){
        snapButto.innerText = " Now click next card , snap or new game"
    }
    userCards.innerText= "  your  card  count is   \n "  + ( split1.length  )   
    cCard.innerText= " computer card count is    \n" + ( split2.length )

    player1Cards.push(split1);
    computerCards.push(split2);
   
     usedCards.push(playerStartCard);
     usedCards.push(computerStartCard)

     card1s.push(playerStartCard);
        card2s.push(computerStartCard);
 
}  

//turn 1 card over at a time for player hand and comp hand show card on playing board
const card1s = []
const card2s = []
let timeoutId;

/*function timerId() {
 timeoutId =   setTimeout(function() {checkForSnap()}, delay);
}*/

function nextCard(e) {

  if(player1Cards[0].length === 0 || computerCards[0].length === 0 ) {
      winner()
    }else {
      const card1 = player1Cards[0].shift();
      const  card2 = computerCards[0].shift();
    
       userPlayerCards.replaceChildren(card1.GetHTML());
       compPlayerCards.replaceChildren(card2.GetHTML()); 

        userCards.innerText= "  your  card  count is  \n  " + (player1Cards[0].length )   
        cCard.innerText= " computers card count is   \n " + (computerCards[0].length )

         usedCards.push(card1);
        usedCards.push(card2);

         card1s.splice(0);
        card2s.splice(0);

        card1s.push(card1);
        card2s.push(card2);

    if( card1s[0].value === card2s[0].value) { 
  
    
     timeoutId = setTimeout(function() {checkForSnap()}, delay);
      
      
     }else{
   
    }
  }
}


function checkForSnap() {
    console.log(timeoutId)
    clearTimeout(timeoutId)
    if( card1s[0].value === card2s[0].value) {  
        const hold1 =  usedCards.slice()
           for( let i = 0; i< hold1.length; i++) {
                computerCards[0].push(hold1 [i])
     }
     usedCards.splice(0)
     hold1.splice(0)
        
        //cCard.innerText= " you missed a snap computer card count is \n  " + (computerCards[0].length )
      
        userPlayerCards.replaceChildren();
        compPlayerCards.replaceChildren()
      
  // alert( 'You missed a snap computer got the cards')
   console.log(computerCards)
    clearTimeout(timeoutId)
}else{
    clearTimeout(timeoutId)
}
}

//button click to call snap if true snap cards go to player/comps hand

function snaps(e) {
    console.log(card1s)
    if( card1s[0].value === card2s[0].value) {
     const hold =  usedCards.slice()
     for( let i = 0; i< hold.length; i++) {
     player1Cards[0].push( hold[i])
     }
    
     usedCards.splice(0)
     hold.splice(0)
   
        userCards.innerText= "  your  card  count is  \n  " + (player1Cards[0].length )
    
   userPlayerCards.replaceChildren();
   compPlayerCards.replaceChildren()
}  else{
    alert (' sorry  those  numbers dont match click Next Card to continue your game' )
}
}



//check if each player still has cards in hand if 1 has no cards declare other winner

function winner() {

    if(player1Cards[0].length ===0 & computerCards[0].length > 0 ){
        alert('The computer has won \n click New game to play again')
} else if (computerCards[0].length === 0 & player1Cards[0].length > 0) {
    alert('You win \n click New game to play again')
} else {
    if(player1Cards[0].length ===0 & computerCards[0].length === 0  ){
        alert('It is a draw \n click New game to play again')
    }
}
}
function newGame(e) {
    location.reload();
}


