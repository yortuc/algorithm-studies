/*
	Find a pair of numbers that add up to a given number in sorted list

	[1, 2, 6, 9] sum: 8 -> no pairs, return false
	[1, 2, 4, 4] sum: 8 -> return true
*/

/*
	FOR SORTED ARRAYS
	Time Complexity : Linear O(n)
*/
function findPair(arr, sum){
	let low = 0;
	let hi = arr.length - 1;

	while(low<hi){
		let s = arr[low] + arr[hi];
		if(s===sum) return true;
		if(s<sum) low++;
		if(s>sum) hi--;
	}
	return false; 	// not found
}

const arr = [1,2,3,9]; 
console.log(findPair(arr, 8));	// false

const arr2 = [1,2,4,4]; 
console.log(findPair(arr2, 8));	// true

/*
	FOR NON SORTED ARRAYS
*/
function findPair2(arr, sum){
	let comps = {};

	for(let i=0; i<arr.length; i++){
		if(comps[arr[i]]){
			return true;
		}
		comps[(sum-arr[i])] = true;
	}

	return false;
}

const arr3 = [1,5,3,6,7,2,4]; 
console.log(findPair2(arr3, 12));	// true