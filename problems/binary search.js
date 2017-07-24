/*
	
*/

function binarySearch(arr, x, i=0) {
	if(arr.length === 1 && arr[0] !== x) return null;	// no items found
	if(arr.length === 1 && arr[0] === x) return i;

	let midIndex = Math.floor(arr.length/2);
	let midItem = arr[midIndex];

	if(midItem === x) return midIndex+i;
	if(midItem < x) {
		return binarySearch(arr.slice(midIndex, arr.length), x, i+midIndex);
	}
	if(midItem > x){
		return binarySearch(arr.slice(0, midIndex), x, 0);
	}
}

const arr = [1,2,3,4,5,6,7,8,9];

console.log("arr: ", arr);
console.log("index of 5 is ", binarySearch(arr, 5));
console.log("index of 8 is ", binarySearch(arr, 8));
console.log("index of 3 is ", binarySearch(arr, 3));