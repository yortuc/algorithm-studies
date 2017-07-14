/*
	Print a binary representation of the given number n
*/


function bin(n){
	let s = [];

	while(n>0){
		s.push(n%2);
		n = Math.floor(n/2);
	}

	let prn = "";
	while(s.length > 0){
		prn += s.pop();
	}
	return prn;
}

console.log(bin(2));
console.log(bin(31));