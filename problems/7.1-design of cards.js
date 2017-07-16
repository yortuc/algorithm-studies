/*
	Design the data structures for a generic deck of cards. 
	Explain how you would subclass it to implement particular card games.
*/

const CardType = {
	Clubs: { sign: "♣" },
	Diamonds: { sign: "" },
	Hearts: { sign: "♥" },
	Spades: { sign:"♠" }
}

// CardNum = 1,2,3 ... 10, J, S, K

class Deck{
	constructor() {
	  this.cards = [];
	}

	add(card) {
		this.cards.push(card);
	}
}

class Card{
	constructor({ type, num }) {
		this.type = type;
		this.num = num;
	}

	print() {
		console.log(this.type + this.num);
	}
}