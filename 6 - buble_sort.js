/*
	Buble sort: 
		scan array until there is no swap is required. 
		my poor implementation.

		worst case is reverse ordered array:
		O(n^2) time complexity
*/
function buble_sort(arr) {
  
  var sorted;
  var passes = 0;
  
  while(!sorted) {
    
    sorted = true;
    
    for(var i=0; i<arr.length-1; i++){
      var item1 = arr[i];
      var item2 = arr[i+1];
      
      if(item1 > item2) {
        // swap here
        arr[i] = item2;
        arr[i+1] = item1;
        sorted = false;
      } // if

      passes++;
    } // for
   }// while
  
  return {arr, passes};
}

console.log("BUBLE SORT")
var sort_reversed = [9,8,7,6,5,4,3];
console.log(sort_reversed);
console.log(buble_sort(sort_reversed));

/*
	Optimized Buble Sort: 
		scan array in a way that each scan finds the next maximum
		so that every scan deals with one less item in array.

	1. scan -> n elements
	2. scan -> n-1 elements
	3. scan -> n-2 elements
	n. scan -> n-(n-1)=1 elements

	n + (n-1) + (n-2) ... + 1  = n * (n-1) / 2

	but still has O(n^2) time complexity
*/

function buble_sort_optimized(arr) {
	var passes = 0;
	var swapped;
	for(var i=0; i<arr.length; i++){
		swapped = false;
		
		// last i elements are sorted already
		for(var j=0; j<arr.length-i-1; j++){
			if(arr[j]>arr[j+1]){
				var tmp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = tmp;
				swapped = true;
			}
			passes++;
		}
		
		if(!swapped) {
			break;
		}
	}

	return {arr, passes};
}

console.log("---")
console.log(buble_sort_optimized(sort_reversed));