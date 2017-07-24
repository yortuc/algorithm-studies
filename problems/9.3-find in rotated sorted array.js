/*
	Given a sorted array of n integers that has been rotated an unknown number of
	times, give an O(log n) algorithm that finds an element in the array. You may assume
	that the array was originally sorted in increasing order.

	EXAMPLE:
	Input: find 5 in array (15 16 19 20 25 1 3 4 5 7 10 14)
	Output: 8 (the index of 5 in the array)

	ROTATION:
	rotating a sorted array clockwise or anti-clockwise
	1,2,3,4,5 -> 5,1,2,3,4 (1 times clockwise) -> 4,5,1,2,3 (twice clockwise)

	* if we know the index of the min element of the array,  we know how many times the array is rotated.

	* use binary search which has a time complexity of O(logn)

	4,5,1,2,3 -> 1 is the pivot element. both the items on the left and rights sides of pivot element are greated
				 than the pivot element. no other item in the array that property.
*/

function rotationCount(a) {
	const N = a.length;
	let low = a[0];
	let high = a[N-1];
	let midIndex = Math.floor(N/2);
	let mid = a[midIndex];
	let prevIndex = (midIndex-1 + N) % N;
	let prev = a[prevIndex];
	let nextIndex = (midIndex+1) % N;
	let next = a[nextIndex];

	if(low < high) {	// array is already sorted
		return 0;
	}

	if(mid < prev && mid < next) { // mid is the min element
		return midIndex;
	}

	if(mid < high) {	// right part is sorted, doesn't contain the min elm, take left part
		return rotationCount(a.slice(0, midIndex));
	}

	if(mid > high) { 	// min element is in the right part, take right
		return rotationCount(a.slice(mid, N));
	}
}

const arr = [4,5,1,2,3];
console.log("arr :", arr);
console.log("arr is rotated ", rotationCount(arr), " times");

const arr2 = [1,2,3,4,5];
console.log("arr :", arr2);
console.log("arr is rotated ", rotationCount(arr2), " times");