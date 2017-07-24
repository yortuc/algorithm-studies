/*
	Write a function to swap a number in place without temporary variables
*/

function swapArrInPlace(arr, i, j) {
	arr[i] = arr[i] * arr[j];
	arr[j] = arr[i] / arr[j];
	arr[i] = arr[i] / arr[j];
}

const arr = [1,2,3,4];

// swap 2 - 3
console.log("arr: ", arr);
swapArrInPlace(arr, 1, 2);
console.log("swapped: ", arr);