const CARDS = [
  {
      value: 'mrpbaby',
      img: 'mrpbaby.jpg'
  },
  {
      value: 'butterfly',
      img: 'butterflymem.jpg'
  },

  {
      value: 'penguin',
      img: 'penguin.jpg'
  },
  {
      value: 'picklerick',
      img: 'picklerickle.jpg'
  },
  {
      value: 'agnes',
      img: 'agnes.jpg'
  },
  {
      value: 'bernard',
      img: 'bernie_mitters.jpg'
  },
  {
      value: 'babyodes',
      img: 'babyodes.jpg'
  },
  {
      value: 'doge',
      img: 'doge.jpg'
  },
  {
      value: 'pattystew',
      img: 'pattystew.jpg'
  },
  {
      value: 'thinker',
      img: 'thinker.jpg'
  },
  {
      value: 'mrpbshot',
      img: 'mrpbshot.jpg'
  },

]; 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function Card (value, isFlipped, img) {
    this.value = value;
    this.isFlipped = isFlipped;
    this.img = img;
    this.id = -1;
}Card.prototype.html = function() {
	return `<div class="card"><img src="${ this.img }" data-id="${ this.id }"></div>`;
}

Card.prototype.backHtml = function() {
	return `<div class="card"><img src="magic.jpg" data-id="${ this.id }"></div>`;
}

function Deck (cards) {
		this.cards = cards || [];
    for (let i = 0; i < this.cards.length; i++) {
    	this.cards[i].id = i;
    }
}

Deck.prototype.add = function (aCard) {
    this.cards.push(aCard);
    this.cards[this.cards.length - 1].id = this.cards.length - 1;
}

Deck.prototype.shuff = function (aDeck) {
    let shuffDeck = [];
    let deckLength = this.cards.length;
    //console.log(this.cards.length);
    for (let i = 0; i < 22; i++) {
        let random = getRandomInt(0,this.cards.length);
    /*    console.log(random);
        console.log(this.cards.length);*/
        let card = this.cards.splice(random, 1);
        let card2 = card[0];
        shuffDeck.push(card2);
    }
    //console.log(shuffDeck);
    this.cards = shuffDeck;
}


Deck.prototype.draw = function () { //draws stuff onto screen
  document.querySelector('#board').innerHTML = '';
	for (let i = 0; i < this.cards.length; i++) {
  	let card = this.cards[i];
    let html;
    if (card.isFlipped) {
  		html = card.html();
    } else {
    	html = card.backHtml();
    }
    let element = 
    document.querySelector('#board').innerHTML += html;
  }
};
document.querySelector('#board').addEventListener('click', function (event) {
	let cardId = event.target.dataset.id;
  myDeck.cards[cardId].isFlipped = !myDeck.cards[cardId].isFlipped;
  myDeck.draw();
});

const myDeck = new Deck();
for (let i = 0; i < CARDS.length; i++) {
  let mycard = new Card(CARDS[i].value, true, CARDS[i].img);
  myDeck.add(mycard)
  console.log(myDeck)
  let mycard2 = new Card(CARDS[i].value, true, CARDS[i].img);
  myDeck.add(mycard2)
}

//deck.add(something);

myDeck.shuff();
myDeck.draw();

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//switch () {
//    case card1
//}

//if bomb then boom