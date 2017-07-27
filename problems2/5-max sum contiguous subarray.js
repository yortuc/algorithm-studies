/*
	You are given a one dimensional array that may contain both positive and negative integers, 
	find the sum of contiguous subarray of numbers which has the largest sum.

	For example, if the given array is {-2, -5, 6, -2, -3, 1, 5, -6}, 
	then the maximum subarray sum is 7 (see highlighted elements).

*/

function mss(arr, start, end){
	if(end-start === 1) { // base case
		return arr[0];	
	}

	let midIndex = start + Math.floor((end-start)/2);

	let leftMss = mss(arr, start, midIndex);
	let rightMss = mss(arr, midIndex, end);
	let leftSum = Number.MIN_VALUE;
	let rightSum = Number.MIN_VALUE;

	let sum = 0;

	for(let i=start; i<midIndex; i++) {
		sum += arr[i];
		leftSum = Math.max(leftSum, sum);
	}

	sum = 0;
	for(let j=midIndex; j<end; j++) {
		sum += arr[j];
		rightSum = Math.max(rightSum, sum);
	}

	let ans = Math.max(leftMss, rightMss);
	return Math.max(rightSum + leftSum, ans);
}

const arr = [5, -2, 3, -1]; 	// mss = 6 [5,-2,3]
console.log("arr : ", arr);
console.log("mss : ", mss(arr, 0, arr.length));