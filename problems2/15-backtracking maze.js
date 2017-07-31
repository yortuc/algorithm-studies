/*
	A Maze is given as N*N binary matrix of blocks where source block is 
	the upper left most block i.e., maze[0][0] and destination block is 
	lower rightmost block i.e., maze[N-1][N-1]. A rat starts from source 
	and has to reach destination. The rat can move only in two directions: forward and down.

	In the maze matrix, 0 means the block is dead end and 1 means the block can be used 
	in the path from source to destination. Note that this is a simple version of the 
	typical Maze problem. For example, a more complex version can be that the rat can 
	move in 4 directions and a more complex version can be with limited number of moves.


	Input:
		{1, 0, 0, 0}
	    {1, 1, 0, 1}
	    {0, 1, 0, 0}
	    {1, 1, 1, 1}

	Output:
		{1, 0, 0, 0}
		{1, 1, 0, 0}
		{0, 1, 0, 0}
		{0, 1, 1, 1}
*/ 

// is it safe to move location x,y
function isSafe(arr, x, y) {
	if(x<arr.length && x>=0 && y<arr.length && y>= 0 && arr[x][y] === 1) return true;
	else return false;
}

function march(arr, x, y, sol) {
	if(x === arr.length-1 && y === arr.length-1) {
		sol[x][y] = 1;
		return true; 	// reached end
	}

	if(isSafe(arr, x, y)){
 		sol[x][y] = 1;

 		if(march(arr, x+1, y, sol)) return true; // move right
 		if(march(arr, x, y+1, sol)) return true; // move down

 		sol[x][y] = 0;
 		return false;
	}
	return false;
}

function solve(arr){
	let sol = arr.map(row => row.map(col=> 0));	// nxn all-zero solution matrix

	let hasSolution = march(arr, 0, 0, sol);

	return sol;
}

const maze = [[1, 0, 0, 0],
			  [1, 1, 0, 1],
			  [0, 1, 0, 0],
			  [1, 1, 1, 1]];


const maze2 = [[1, 0, 0, 0],	// has a dead end, but backtracking solves
			   [1, 1, 1, 1],
			   [0, 1, 0, 0],
			   [1, 1, 1, 1]];

console.log(solve(maze));
console.log("\n\n");
console.log(solve(maze2));








