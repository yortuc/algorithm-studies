/*
	Design an algorithm to figure out if someone has won in a game of tic-tac-toe.
*/

// method #1
//  one can save all winning possible boards in a hash map
//	and can decide if has a winner or not so fast.


// method #2
// check the board

function checkTriple(t1, t2, t3){
	return t1 === t2 && t2 === t3;
}

function hasWon(arr){
	// check rows 
	for(let i=0; i<arr.length; i++){
		if(checkTriple(...arr[i])) return true;
	}

	// check cols
	for(let j=0; j<arr[0].length; j++){
		if(checkTriple(arr[0][j], arr[1][j], arr[2][j])) return true;
	}

	// check diagonals
	if(checkTriple(arr[0][0], arr[1][1], arr[2][2]) ||
	   checkTriple(arr[0][2], arr[1][1], arr[2][0])) return true;

	return false;
}

const boardWon = [["x","x","_"],
			      ["o", "o", "o"],
			      ["x", "_", "_"]];

const boardNon = [["x","x","_"],
			      ["o", "_", "o"],
			      ["x", "_", "_"]];

console.log(hasWon(boardWon));  // true
console.log(hasWon(boardNon));	// false