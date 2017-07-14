/*
	k largest(or smallest) elements in an array

	Question: Write an efficient program for printing k largest elements in an array. 
	Elements in array can be in any order.

	For example, if given array is [1, 23, 12, 9, 30, 2, 50] 
	and you are asked for the largest 3 elements i.e., 
	k = 3 then your program should print 50, 30 and 23.
*/

/*
	Solution: use a temp array. store first k element. 
		for all the other elements in array, check if its greater than the min
		element in temp array. if it is, replace them.
	
	Time complexity O((n-k) * k) , result unsorted
	If we want the result to be sorted then O((n-k)*k + klogk)
*/

function getMinIndex(buf){
	let min = buf[0];
	let min_index = 0;
	for(var i=1; i<buf.length; i++){
		if(buf[i]<min){
			min = buf[i];
			min_index = i;
		} 
	}
	return min_index;
}

function largestK(arr, k) {
	var buffer = [];

	for(var i=0; i<arr.length; i++){

		if(buffer.length < k) {
			buffer.push(arr[i]);
			continue;
		}

		let mi = getMinIndex(buffer);
		if(buffer[mi] < arr[i]){
			buffer[mi] = arr[i];
		}
	}

	return buffer;
}


const arr = [1, 23, 12, 9, 30, 2, 50];
console.log("largest 3:", largestK(arr, 3));