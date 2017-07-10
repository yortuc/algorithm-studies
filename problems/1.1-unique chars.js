
function hasUnique(str) {
	var chars = {a:0, b:0, c:0, d:0, e:0, f:0, g: 0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0 };

	for(var i=0; i<str.length; i++){
		let chr = str[i];
		delete chars[chr];
	}

	return Object.keys(chars).length === 0;
}

console.log("input strig has all the unique chars?");
console.log(hasUnique("abcdefghijklmnopqrstuwvxyz"));
console.log(hasUnique("asdwefwewewe"));

/*
	What is we cannot use additional data structures like hashtable
*/

function hasUniqueExt(str){
	var uniques = "abcdefghijklmnopqrstuwvxyz";

	for(let i=0; i<str.length; i++){ 
		let chr = str[i];

		for(let j=0; j<uniques.length; j++){
			let target = uniques[j];
			if(target===chr){
				uniques = uniques.replace(target, "");
			}
		}
	}
	return uniques.length === 0;
}

console.log("---");
console.log(hasUniqueExt("abcdefghijklmnopqrstuwvxyz"));
console.log(hasUniqueExt("asdwefwewewe"));