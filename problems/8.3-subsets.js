/*
	8.3 Write a method that returns all subsets of a set.
*/

function getSubsets(set, index) {
	if(set.length === index) {
		return [[]];
	}

	let sbt = set[index];
	let subs = getSubsets(set, index+1);
	let all = [];

	for(let i=0; i<subs.length; i++){
		all.push(subs[i]);
		all.push(Array.prototype.concat(sbt, subs[i]));
	}
	return all;
}


const set = [1,2,3];

console.log(getSubsets(set, 0));
