/*
	Quick Sort - recursive
*/

function partition(arr, low, high){
	// there are many approaches partioning the array
	// take the last elemenet as pivot,
	// put all smaller elements to the left,
	// and all greater elements to the right

	pivot = arr[high];

	var i = (low-1);

	for(var j=low; j<high; j++){
		if(arr[j]<pivot){
			// swap here
			i++;
			var tmp = arr[j];
			arr[j] = arr[i];
			arr[i] = tmp;
		}
	}
	// put pivot in place
	tmp = arr[i+1];
	arr[i+1] = arr[high];
	arr[high] = tmp;

	return i+1;
}

function quick_sort(arr, low, high) {
	// low -> starting index
	// high -> end index

	if(low < high){
		// partition index
		var pi = partition(arr, low, high);
		quick_sort(arr, low, pi-1);	   // before pi
		quick_sort(arr, pi+1, high);   // after pi
	}
}

function pp(arr, low, high){
	var np = arr.filter((elm, index) => index<=high && index>=low);
	console.log(np);
}

var arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log("QUICK SORT");
console.log(arr);
quick_sort(arr, 0, arr.length-1);
console.log(arr);