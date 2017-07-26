/*
	How many times is a sorted array rotated?
*/

function rotationCount(arr, start, end){
	let midIndex = start + Math.floor(end - start)/2;
	let mid = arr[midIndex];
	let high = arr[end-1];
	let low = arr[start];

	//
	// check the previous and next elements to the mid element
	// can't use midIndex - 1 and midIndex + 1, element can be at the end of the array
	// since array is circularly sorted, we can say:
	let N = arr.length;
	let prevIndex = (midIndex - 1 + N) % N;
	let nextIndex = (midIndex + 1) % N;

	if(arr[prevIndex]>mid && arr[nextIndex]>mid) { // found the pivot elm
		return midIndex;
	}
	else{
		if(low<high){
			// array not rotated
			return 0;
		}
		if(mid<high) { // right part is already sorted, take left part 
			return rotationCount(arr, 0, midIndex);
		}
		else { // take right
			return rotationCount(arr, midIndex, end);
		}
	}
}

const arr = [6,5,1,2,3,4];
console.log("arr : ", arr);
console.log("is rotated ", rotationCount(arr, 0, arr.length), " times");

const arr2 = [8,7,6,5,1,2,3,4];
console.log("arr : ", arr2);
console.log("is rotated ", rotationCount(arr2, 0, arr2.length), " times");


const arr3 = [4,3,2,1];
console.log("arr : ", arr3);
console.log("is rotated ", rotationCount(arr3, 0, arr3.length), " times");