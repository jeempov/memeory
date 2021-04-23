const CARDS = [
  {
      value: 'mrpbaby',
      img: 'mrpbaby.jpeg'
  },
  {
      value: 'butterfly',
      img: 'butterflymem.jpg'
  },

  {
      value: 'penguin',
      img: 'penguin.jpeg'
  },
  {
      value: 'picklerick',
      img: 'picklerickle.jpeg'
  },
  {
      value: 'agnes',
      img: 'agnes.jpeg'
  },
  {
      value: 'bernard',
      img: 'bernie_mitters.jpeg'
  },
  {
      value: 'babyodes',
      img: 'babyodes.jpeg'
  },
  {
      value: 'doge',
      img: 'doge.jpeg'
  },
  {
      value: 'pattystew',
      img: 'pattystew.jpeg'
  },
  {
      value: 'thinker',
      img: 'thinker.jpeg'
  },
  {
      value: 'mrpbshot',
      img: 'mrpbshot.jpeg'
  },

]; 

function Card (value, isFlipped, img) {
    this.value = value;
    this.isFlipped = isFlipped;
    this.img = img;
    this.id = -1;
}Card.prototype.html = function() {
	return `<div class="card"><img src="${ this.img }" data-id="${ this.id }"></div>`;
}

Card.prototype.backHtml = function() {
	return `<div class="card"><img src="https://images-na.ssl-images-amazon.com/images/I/61AGZ37D7eL._AC_SL1039_.jpg" data-id="${ this.id }"></div>`;
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

Deck.prototype.draw = function () {
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
  let mycard2 = new Card(CARDS[i].value, true, CARDS[i].img);
  myDeck.add(mycard2)
}

//deck.add(something);
myDeck.draw();

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//switch () {
//    case card1
//}

//if bomb then boom