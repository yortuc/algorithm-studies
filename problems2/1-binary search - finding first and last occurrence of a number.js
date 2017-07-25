/*
	Write a binary search to find out the first or last occurrence of a number in a sorted array with duplicates. 
	solution: https://www.youtube.com/watch?v=OE7wUUpJw6I
*/

function getFirstIndex(arr, num, start, end){
	let midIndex = start + Math.floor(end - start)/2;
	let mid = arr[midIndex];

	if(arr.length === 1 && arr[0] !== num) {	// not found
		return -1; 
	}
	
	if(arr.length === 1 && arr[0] === num) {
		return start;
	}

	if(arr[midIndex] < num) {	// take right
		return getFirstIndex(arr, num, midIndex, arr.length);
	}
	else if(arr[midIndex] > num) { // take left
		return getFirstIndex(arr, num, 0, midIndex);
	}
	else if(arr[midIndex] === num) {
		// go left till num changes
		for(let i=1; i<midIndex; i++){
			if(arr[midIndex-i] !== num){
				return midIndex-i+1;
			}
		}
	}
}

const arr = [1,2,2,3,4,5,5,5,6,6,6,9];
console.log("arr: ",arr);
console.log("index of first occurrence of 6 is ", getFirstIndex(arr, 6, 0, arr.length));


const arr2 = [5,5,7,7,7,7,7,7,8,8,9,9,9,10];
console.log("arr: ",arr2);
console.log("index of first occurrence of 6 is ", getFirstIndex(arr2, 7, 0, arr2.length));

//
// version 2
// no additional inner loop, pure recursion, parametric first or last occurence finding
//

function getIndex(arr, num, start, end, findFirst){
	let midIndex = start + Math.floor(end - start)/2;
	let mid = arr[midIndex];

	if(arr.length === 1 && arr[0] !== num) {	// not found
		return -1; 
	}
	
	if(arr.length === 1 && arr[0] === num) {
		return start;
	}

	if(arr[midIndex] < num) {	// take right
		return getIndex(arr, num, midIndex, arr.length, findFirst);
	}
	else if(arr[midIndex] > num) { // take left
		return getIndex(arr, num, 0, midIndex, findFirst);
	}
	else if(arr[midIndex] === num) {
		// go left till num changes
		let mul = (findFirst === 1) ? -1 : 1;
		if(arr[midIndex + mul] === num) {
			return getIndex(arr, num, start+mul, end+mul, findFirst);
		}else{
			return midIndex;
		}
	}
}

const arr3 = [1,2,2,3,4,5,5,5,6,6,6,9];
console.log("arr: ", arr3);
console.log("index of first occurrence of 6 is ", getIndex(arr3, 6, 0, arr3.length, 1));
console.log("index of last occurrence of 6 is ",  getIndex(arr3, 6, 0, arr3.length, 2));
