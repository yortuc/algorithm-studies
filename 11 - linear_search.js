/*
	Linear Search

	O(n) complexity
*/
function linearSearch(arr, target){
	for(var i=0; i<arr.length; i++){
		if(arr[i] === target){
			return i;
		}
	}
	return -1;
}

var arr = [21,14,0,7,5,16, 6,7,12];
console.log(linearSearch(arr, 5));