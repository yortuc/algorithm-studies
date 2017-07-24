/*
	Write a method to sort an array of strings so that all the anagrams are next to each
	other.
*/

function stringSignature(str) {		// the signature of anagrams should be the same
	const strArr = str.split(""); 	// convert string to array
	return strArr.sort();			// return the araray sorted
}

function anagramComparer(s1, s2){
	let c1 = stringSignature(s1);
	let c2 = stringSignature(s2);
	
	if(c1 > c2) return 1;
	if(c1 < c2) return -1;
	if(c1 === c2) return 0;
}

const arr = ["asd", "xyz", "dsa", "zyx", "sda"];

console.log(arr.sort(anagramComparer));