/*
	Design a chess game using object oriented principles.
*/

/*
	In a standard game of chess, each of the two players begins a game 
	with the following 16 pieces:
		1 king.
		1 queen.
		2 rooks.
		2 bishops.
		2 knights.
		8 pawns.

	poistiion:
		> a,b,c,d,e,f,g,h
		^ 1,2,3,4,5,6,7,8
*/

class Board{
	constructor() {
		this.TURN = 0; // turn 0: player 1, 1: player2

		this.players = [
			new Player("player 1"),
			new Player("player 2")
		];
	}
}

class Player {
	constructor(name) {
		this.pieces = [
			new King(),
			new Queen(),
			new Rook(), new Rook(),
			new Bishop(), new Bishop(),
			new Knight(), new Knight(),
			new Pawn(),new Pawn(),new Pawn(),new Pawn(),new Pawn(),new Pawn(),new Pawn(),new Pawn()
		];
	}
}

class Piece{
	constructor(x,y) {
		this.position = {x, y};
	}
}

class King extends Piece{
	moveTo(position) {
		// return true or false
	}	
}