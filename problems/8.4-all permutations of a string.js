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

function insertChar(word, c, index){
	let left = word.slice(0, word.length);
	let right = word.slice(index+1, word.length);
	let ret = Array.prototype.concat(left, [c], right);
	return ret;
}

function getPerms(s){
	if(s.length === 0){ // base case
		return [[]];
	}
	let first = s[0];
	let rest = s.slice(1, s.lenght);
	let perms = [];
	let words = getPerms(rest);

	for(let i=0; i<words.length; i++){
		for(let j=0; j<=words[i].length; j++){
			perms.push(insertChar(words[i], first, j));
		}
	}
	return perms;
}


const str = ["a", "b", "c"];
// permutate(str, 0, 2);
console.log(getPerms(str));


