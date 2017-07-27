/*
	Vertical sum of a binary tree
	solution: Q1 https://www.youtube.com/watch?v=il_t1WVLNxk 
*/

function getNode(node, x, lines){
	lines[x] = lines[x] || 0;
	lines[x] += node.val;

	if(node.left) getNode(node.left, x-1, lines);
	if(node.right) getNode(node.right, x+1, lines);

	return lines;
}

function Node(val, left, right){
	this.val = val;
	this.left = left;
	this.right = right;
}

const tree = new Node(1, 
					  	new Node(2, 
					  		new Node(4),
					  		new Node(5)),
				      	new Node(3,
				      		new Node(7),
				      		new Node(6))
					 );

console.log(getNode(tree, 0, {}));