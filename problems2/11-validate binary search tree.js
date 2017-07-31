/*
	Write a program to check if a binary tree is BST or not
	http://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
*/

function Node(val, left, right){
	this.val = val;
	this.left = left;
	this.right = right;
}

function check(root) {
	//	????
}

function isBST(root){
	return check(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

const root = new Node(3, new Node(2, new Node(1), new Node(4)), new Node(5));

console.log(isBST(root)); // false