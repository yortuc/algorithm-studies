// wrong approach
// setting zero manuplation on the original matrix interferes with process
// yielding wrong results
function setZero(m){

	for(var i=0; i<m.length; i++){
		for(var j=0; j<m[0].length; j++){
			if(m[i][j] === 0){
				console.log(i,j);
				// zero found, set row and col to zero
				// row : i, col: j
				for(var k=0; k<m[0].length; k++){
					m[i][k] = 0;
				}
				for(var t=0; t<m.length; t++){
					m[t][j] = 0;
				}
			}
		}
	}
}

function setZero2(m){
	var zeroCols = [];
	var zeroRows = [];

	for(var i=0; i<m.length; i++){
		for(var j=0; j<m[0].length; j++){
			if(m[i][j] === 0){
				zeroRows.push(i);
				zeroCols.push(j);
			}
		}
	}

	for(var i=0; i<zeroCols.length; i++){
		var rowZero = zeroRows[i];
		var colZero = zeroCols[i];

		for(var k=0; k<m[0].length; k++) m[rowZero][k] = 0;
		for(var k=0; k<m.length; k++) m[k][colZero] = 0;
	}
}

const m = [
	[1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6],
	[1, 0, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6],
	[1, 2, 3, 3, 5, 0],
	[1, 2, 3, 4, 5, 6],
	[1, 2, 3, 4, 5, 6]
];

console.log({input: m});
console.log("---");
setZero2(m);
console.log("---");
console.log({output: m});