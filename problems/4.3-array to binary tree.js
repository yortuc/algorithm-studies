/*
	Given a sorted (increasing order) array, write an algorithm to create a binary tree with
	minimal height.
*/

function Node(val, left, right) {
	this.val = val;
	this.left = left;
	this.right = right;
}

function getNode(arr){
	console.log(arr.length);

	if(arr.length === 1){
		return new Node(arr[0]); // leaf node
	} 

	let midIndex = Math.floor(arr.length/2);

	console.log(midIndex);

	let node = new Node(arr[midIndex]);
	node.left = getNode(arr.slice(0, midIndex));
	node.right = getNode(arr.slice(midIndex+1, arr.length));

	return node;
}

const arr = [1,2,3,4,5,6,7];
let tree = getNode(arr);

console.log(tree);