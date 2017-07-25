/*
	Print elements of a linked list in forward and reverse order using recursion
*/


function printReversed(root) {
	if(!root.next) return root.val;

	return printReversed(root.next) + "," + root.val;
}

function toString(root){
	let cur = root;
	let str = "";
	while(cur){
		str += cur.val + ",";
		cur = cur.next;
	}
	return str;
}

class Node {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

const ll = new Node(1, new Node(2, new Node(3, new Node(4))));

console.log(toString(ll));

console.log(printReversed(ll));