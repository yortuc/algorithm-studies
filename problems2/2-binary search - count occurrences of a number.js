/*
	Count occurrences of a number in a sorted array with duplicates using Binary Search
	solution: https://www.youtube.com/watch?v=pLT_9jwaPLs
*/

function count(arr, num, start, end, findFirst) {

	// find count
	if(findFirst === 3){
		let firstIndex = count(arr, num, 0, arr.length, 1);
		let lastIndex = count(arr, num, 0, arr.length, 2);
		return lastIndex - firstIndex + 1;
	}
	else{
		let midIndex = start + Math.floor((end-start)/2);
		let mid = arr[midIndex];

		if(mid>num){ // take left
			return count(arr, num, 0, midIndex, findFirst);
		}
		else if(mid<num) { // take right
			return count(arr, num, midIndex, arr.length, findFirst);
		}
		else if(mid === num) {

			// find first index
			if(findFirst === 1) {
				if(arr[midIndex-1] !== num){
					return midIndex;
				}
				else{
					return count(arr, num, start-1, end-1, findFirst);
				}	
			}

			// find last index
			if(findFirst === 2){
				if(arr[midIndex+1] !== num){
					return midIndex; 
				}
				else{
					return count(arr, num, start+1, end+1, findFirst);
				}
			}
		}
	}
}

const arr = [1,1,2,2,2,3,4,4,4,4,5];

console.log("array : ", arr);
console.log("count of 1 is ", count(arr, 1, 0, arr.length, 3));
console.log("count of 2 is ", count(arr, 2, 0, arr.length, 3));
console.log("count of 3 is ", count(arr, 3, 0, arr.length, 3));
console.log("count of 4 is ", count(arr, 4, 0, arr.length, 3));
console.log("count of 5 is ", count(arr, 5, 0, arr.length, 3));