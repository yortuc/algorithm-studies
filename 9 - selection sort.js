function selectionSort(arr){

	for(var i=0; i<arr.length; i++){
		var min_val = Number.MAX_VALUE;
		var min_ind = -1;

		for(var j=i; j<arr.length; j++){
			if(arr[j]<min_val){
				min_val = arr[j];
				min_ind = j;
			}
		}

		// place min item at the beginnig of array
		var tmp = arr[i];
		arr[i] = arr[min_ind];
		arr[min_ind] = tmp;
		// console.log(min_ind, min_val, arr);
	}
}

var arr = [2, 4, 6, 1, 12, 5, 8];
console.log("SELECTION SORT");
console.log(arr);
selectionSort(arr, 0, arr.length-1)
console.log(arr);