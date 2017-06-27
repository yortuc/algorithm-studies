/*
	Merge Sort
*/

function mergeSort(arr) {
	// split into smaller arrays

	// return the array if item count is 0 or 1
	if(arr.length < 2) return arr;

	var mid = Math.floor(arr.length/2.0);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

// merge two sorted arrays to 
// produce a single sorted array
function merge(arr1, arr2){
	var ret = [];

	do{
		if(arr1.length === 0){
			ret.push(arr2.shift())
		}
		else if(arr2.length === 0) {
			ret.push(arr1.shift());
		}
		else if(arr1.length > 0 && arr2.length > 0){
			ret.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
		}
	}while(arr1.length + arr2.length > 0);

	return ret;
}

var arr = [14, 7, 3, 12, 3, 9, 11, 6, 2];
console.log("MERGE SORT");
console.log(arr);
console.log(mergeSort(arr));