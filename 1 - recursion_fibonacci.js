/*----------------------------*
 *   Algorithm Works #1       *
 *   Recursion                *
 *                            *
 *   > node recursion.js      *
 *----------------------------*/


// simple sum of integers to the n-th number
function sum(n){
	
	if(n === 1){
		/* finish section */

		return 1;
	}
	else{
		/* body section */

		return sum(n-1) + n;
	}
}

// compute factorial n
function factorial(n){
	if(n === 1){
		return 1;
	}
	else{
		return factorial(n-1) * n;
	}
}

/*
 * recursion is so inefficent if branching occurs.
 * in this example, with first iteration, 
 * iteration goes two ways. fib(n-2) and fib(n-1)
 * and each branch is to be computed againg unnecessarily.
 *
 *                          f5
 *                    _____/  \____
 *                   /             \
 *                  f4             f3 
 *                /    \          /   \
 *               f3    f2        f2   f1
 *              /  \   /  \     /  \
 *             f2  f1  f1 f0   f1  f0
 *            / \
 *           f1  f0
 * 
 *
 * f3 computed 2 times
 * f2 computed 3 times
 * so many re-computations. 
 * this can be improved via caching. 
 * (memoization, https://en.wikipedia.org/wiki/Memoization) 
 */

function fibonacci(n){
	if(n <= 1){
		return n;
	}
	else{
		return fibonacci(n-2) + fibonacci(n-1);
	}
}

function fibonacciCached(n){
	// cache
	if(fibDict[n]) {
		return fibDict[n];
	}

	if(n <= 1){
		fibDict[n] = n;
		return n;
	}
	else{
		var returnVal = fibonacciCached(n-2) + fibonacciCached(n-1);
		fibDict[n] = returnVal;
		return returnVal;
	}
}

var fibDict = {};

// simple recursion
console.log( "sum(3) \t" + sum(3) );
console.log( "fct(4)\t" + factorial(4) );

// compute 46-th fibonacci number
console.log("computing 46. fibonacci number");
console.time('fibonacci_46');
var fib_46 = fibonacci(46);
console.timeEnd('fibonacci_46');
console.log( "fib(46)\t" + fib_46 );

// cached version
console.log("computing 46. fibonacci number with cache");
console.time('fibonacciCached_46');
var fib_c_46 = fibonacciCached(46);
console.timeEnd('fibonacciCached_46');
console.log( "fibc(46)\t" + fib_c_46 );
console.log( "fibonacci cache:" + JSON.stringify(fibDict));