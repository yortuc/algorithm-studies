/*
	Binary Search Tree
*/

function Tree() {
	this.root = null;
}

Tree.prototype.add = function(data) {
	if(!this.root){
		this.root = new Node(data);
		return;
	}

	var curr = this.root;
	var node = new Node(data);

	while(true){
		if(data > curr.value){
			if(!curr.right) {
				curr.right = node;
				break;
			}else{
				curr = curr.right;
			}
		}
		else if(data < curr.value){
			if(!curr.left){
				curr.left = node;
				break;
			}else{
				curr = curr.left;
			}
		}else{
			// if the value of the node to be added is equal to the 
			// current node, ignore. 
			// there can be no duplicate values in a binary search tree
			break;
		}
	}
}

Tree.prototype.height = function() {
	// Compute the height of a tree--the number of nodes
    // along the longest path from the root node down to
    // the farthest leaf node

    function height(root){
    	if(!root) return 0;

    	l_height = height(root.left);
    	r_height = height(root.right);

    	if(l_height>r_height){
    		return l_height+1;
    	}else{
    		return r_height+1;
    	}
    }

    return height(this.root);
}

Tree.prototype.traverse = function(process, method) {

	// in-order traversal: left -> root -> right
	function inOrder(node){
		if(node.left) inOrder(node.left);
		process.call(this, node);	
		if(node.right) inOrder(node.right);		
	}

	// root -> left -> right
	function preOrder(node){
		process.call(this, node);
		if(node.left) preOrder(node.left);
		if(node.right) preOrder(node.right);
	}

	// left -> right -> root
	function postOrder(node){
		if(node.left) postOrder(node.left);
		if(node.right) postOrder(node.right);
		process.call(this, node);
	}

	var methods = {"inorder": inOrder, "preorder": preOrder, "postorder": postOrder};

	// start with the root
	methods[method](this.root);
}

Tree.prototype.traverseBreadth = function(process) {

	function processLevel(root, level){
		if(!root){
			return;
		}
		else if(level===1) {
			process.call(this, root);
		}
		else if (level>1){
			processLevel(root.left, level-1);
			processLevel(root.right, level-1);
		}
	}

	var height = this.height();
	for(var i=1; i<height+2; i++){
		processLevel(this.root, i);
	}
}

function Node(data, left, right) {
	this.value = data;
	this.left = left;
	this.right = right;
}

var myTree = new Tree();

myTree.add(12);
myTree.add(8);
myTree.add(16);
myTree.add(9);
myTree.add(7);

//////////////////// In-order tree traversal
// In-order traversals are performed on each node 
// by processing the left subtree, 
// then the node itself, then the right subtree. 

console.log("//////////////////// In-order tree traversal");

console.log(">> depth first methods")

console.log("inorder");
myTree.traverse(node=> console.log(node.value), "inorder");

console.log("preorder");
myTree.traverse(node=> console.log(node.value), "preorder");

console.log("postorder");
myTree.traverse(node=> console.log(node.value), "postorder");

console.log("height of the tree is ", myTree.height());

console.log(">> breadt first");

myTree.traverseBreadth(node=> console.log(node.value));