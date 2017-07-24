/*
	You are given two sorted arrays, A and B, and A has a large enough buffer at the end
	to hold B. Write a method to merge B into A in sorted order.
*/

// Naive version
// 	create a new array and push from a and b to that
function mergeSorted(a, b){
	let ret = [];						// create a new array
	let pA = 0;							// cursor of iteration on array A
	let pB = 0;							// cursor of iteration on array B

	while(pA<a.length || pB<b.length){	// if cursor A or B not exhausted yet
		if(pA === a.length) { 			// array a exhausted
			ret.push(b[pB++]);
		}
		else if(pB === b.length){		// array b exhausted
			ret.push(a[pA++]);
		}
		else if(a[pA]<b[pB]){			// if a < b then push a
			ret.push(a[pA++]);
		}
		else {
			ret.push(b[pB++]);			// if a > b then push b
		}
	}
	return ret;
}


// inplace merging


// helper func: move back the elemens of array from start index to end index
function moveBack(arr, start, end){
	let curr = end;
	while(curr > start) {
		arr[curr] = arr[curr-1];
		curr--;
	}
	return arr;
}

function mergeSortedInplace(a,b) {
	let pA = 0;
	let pB = 0;

	while(pB < b.length) {
		if(a[pA] < b[pB]){
			pA++;
		}
		else if(a[pA] > b[pB]){
			moveBack(a, pA, a.length);
			a[pA] = b[pB];
			pA++;
			pB++;
		}
		else if(pA === a.length){
			a[pA] = b[pB];
			pA++;
			pB++;
		}
	}
	return a;
}

const a = [1,3,5,7];
const b = [4,6,10];

console.log(mergeSorted(a,b));
console.log(mergeSortedInplace(a,b));


