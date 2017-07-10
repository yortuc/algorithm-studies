/*
	Reverse a C-Style string. "abcd" is a 5 char str with a null at the end
*/

function reverse(str){
	let ret = "";
	for(let i=0; i<str.length-1; i++){
		ret += str[str.length-i-2];
	}
	return ret;
}

console.log("reverse str: abcd_");
console.log(reverse("abcd_"));