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

	♜	♞	♝	♛	♚	♝	♞	♜
	♟	♟	♟	♟	♟	♟	♟	♟

	♙	♙	♙	♙	♙	♙	♙	♙
	♖	♘	♗	♕	♔	♗	♘	♖

*/

const pieces = {
	king: ["♔", "♚"], 
	queen: ["♕", "♛"],
    bishop: ["♗", "♝"], 
    rook: ["♖","♜"], 
    knight:["♘","♞"], 
    pawn:["♙","♟"]
};