/*
	Write a method to compute all permutations of a string.
*/

function swap(str, i, j){
	let tmp = str[i];
	str[i] = str[j];
	str[j] = tmp;
	return str;
}

Array.prototype.toString = function() {
	return this.reduce((prev, cur)=> prev + cur, "");
}

function permutate(str, left, right) {
	if(left === right){
		console.log(str.toString());
	}
	else{
		// swap
		for(var i=left; i<=right; i++) {
			str = swap(str, left, i);
			permutate(str, left+1, right);
			str = swap(str, left, i);
		}
	}
}

const str = ["a", "b", "c"];
permutate(str, 0, 2);