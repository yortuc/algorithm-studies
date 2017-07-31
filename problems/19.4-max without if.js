/*
	Write a method which finds the maximum of two numbers. You should not use ifelse
	or any other comparison operator.

	EXAMPLE
	Input: 5, 10
	Output: 10
*/

function max(a, b) {
	let c = a - b;
	let k = (c >> 31) & 0x1;
	let max = a - k * c;
	return max;
}

console.log(max(4,6));
console.log(max(44, 10));