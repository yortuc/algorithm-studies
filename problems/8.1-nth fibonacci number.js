/*
	Write a method to generate the nth Fibonacci number.
*/

function fib(n){
	if(n===0 || n===1) return 1;
	return fib(n-1) + fib(n-2);
}

//            0  1  2  3  4  5  6   7
const fibs = [1, 1, 2, 3, 5, 8, 13, 21];

console.log(fib(0));	// 1
console.log(fib(5));	// 8
console.log(fib(7));	// 21