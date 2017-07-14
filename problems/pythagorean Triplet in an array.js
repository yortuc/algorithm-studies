/*
	Pythagorean Triplet in an array
	Given an array of integers, write a function that 
	returns true if there is a triplet (a, b, c) that 
	satisfies a2 + b2 = c2.

	Example:

		Input: arr[] = {3, 1, 4, 6, 5}
		Output: True
		There is a Pythagorean triplet (3, 4, 5).

		Input: arr[] = {10, 4, 6, 12, 5}
		Output: False
		There is no Pythagorean triplet.
*/

function hasPyTriplet(arr){
	let buf = [];

	// O(n^2)
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr.length; j++){
			if(i==j) continue;
			buf.push(arr[i]*arr[i] + arr[j]*arr[j]);
		}
	}

	// O(n^2)
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<buf.length; j++){
			if(arr[i]*arr[i] === buf[j]) {
				return true;
			}
		}
	}

	return false;
}


const arr = [3, 1, 4, 6, 5];
console.log(hasPyTriplet(arr));

const arr2 = [10, 4, 6, 12, 5];
console.log(hasPyTriplet(arr2));
