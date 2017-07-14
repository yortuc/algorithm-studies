/*
	Check for balanced parentheses in an expression
*/


function checkParan(exp) {
	let s = [];

 	for(var i=0; i<exp.length; i++) {
 		let chr = exp[i];

 		if(chr === "("){
 			s.push(chr);
 		}
 		else if (chr === ")" && s.length > 0) {
 			s.pop();
 		}
 		else if (chr === ")" && s.length === 0){
 			return false;
 		}
	}

	if(s.length > 0) return false;

	return true;
} 

console.log(checkParan("()"));		// true
console.log(checkParan("((())"))	// false
console.log(checkParan("((()))()"));	// true
console.log(checkParan("())(()"))	// false
