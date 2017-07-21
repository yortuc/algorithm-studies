/*
	Implement an algorithm to print all valid (e.g., properly opened and closed) combinations
	of n-pairs of parentheses.

	EXAMPLE:
	input: 3 (e.g., 3 pairs of parentheses)
	output: ()()(), ()(()), (())(), ((()))
*/

Array.prototype.toString = function() {
	return this.reduce((prev,cur)=> cur + "" + prev ,"");
}

function printPar(l, r, str, count){
	if(l<0 || r<00)	return; // invalid case

	if(l===0 && r===0) {
		console.log(str.toString());
	}
	else{
		if(l>0){
			str[count] = "(";
			printPar(l-1, r, str, count+1);
		}
		if(r>0){
			str[count] = ")";
			printPar(l, r-1, str, count+1);
		}
	}
}

printPar(3, 3, [], 0);