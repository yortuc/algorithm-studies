/*
	Binary Search

	find index of an item in a sorted array by dividing
	the array half recursively. take left side if the item in the middle
	is greater than the target, take the right side otherwise.
*/

// arr: sorted array
// target: item to be found
function binarySearch(arr, target, ind){

	console.log(ind, arr);

	if(arr.length === 1) {
		return ind;
	}

	var mid = Math.floor(arr.length/2);
	var side;
	var start;

	if(target >= arr[mid]){
		// right
		side = arr.slice(mid, arr.length);
		start = ind + mid;
	}
	else{
		// left
		side = arr.slice(0, mid); 
		start = ind;
	}

	return binarySearch(side, target, start);
}

var arr=[2,5,8,12,16,23,38,56,72,91];
var target = 56;

console.log(binarySearch(arr, target, 0));