/*
	Write a function that takes the derivative of the given polynominal

	source: https://www.youtube.com/watch?v=2cf9xo1S134
*/	

/*
	How to represent a polynominal?

	1. approach : use an array
	[2, 3, 5] -> 5x^2 + 3x + 2
	(index is power of x)
*/

/*	
	input poly: [array] -> [1, 3, 5] -> 5x^2 + 3x + 1
	output: [array] -> 10x + 3 -> [3 10]
*/
function drive(poly) {

	var ret = [];

	for(var i=poly.length-1; i>0; i--){
		console.log(i, i*poly[i]);
		ret[i] = i * poly[i];
	}
	ret.shift();

	return ret;
}

var poly = [1,3,5];
console.log("input : 5x^2 + 3*x + 1 -> [1,3,5]");
console.log("deriv : ", drive(poly));
console.log("---");
var poly2 = [-5, 2, 5, 7, 0, 4];
console.log("input : 4x^5 + 7*x^3 + 5*x^2 + 2x - 5 -> [-5, 2, 5, 7, 0, 4]");
console.log("deriv : ", drive(poly2));
