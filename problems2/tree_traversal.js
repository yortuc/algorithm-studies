/*
	Tree traversal

	a) Depth first traversal O(n)
		1) Inorder (left, root, right)
		2) Preorder (root, left, right)
		3) Postorder (left, right, root)
	b) Breadth first traversal / Level traversal O(n)
*/

function Node(val, left, right) {
	this.val = val;
	this.left = left;	
	this.right = right;
}

const TreeIterator = {
	preOrder: (root, callback) => {
		if(!root) return;
		callback(root);
		TreeIterator.preOrder(root.left, callback);
		TreeIterator.preOrder(root.right, callback);
	},
	inOrder: (root, callback) => {
		if(!root) return;
		TreeIterator.inOrder(root.left, callback);
		callback(root);
		TreeIterator.inOrder(root.right, callback);
	},
	postOrder: (root, callback) => {
		if(!root) return;
		TreeIterator.postOrder(root.left, callback);
		TreeIterator.postOrder(root.right, callback);
		callback(root);
	},
	levelOrder: (root, callback) => {
		let q = [];	// queue
		let tempNode = root;
		while(tempNode){
			callback(tempNode);
			tempNode.left && q.push(tempNode.left);
			tempNode.right && q.push(tempNode.right);
			tempNode = q.shift();
		}
	}
}

function print(root, iterator, title){
	console.log("Printing tree ", title);
	let str = "";
	iterator(root, node=> str += node.val);
	console.log(str, "\n");
}

const tree = new Node(1, 
					new Node(2,
						new Node(4),
						new Node(5)), 
					new Node(3));

print(tree, TreeIterator.preOrder, "preOrder");

print(tree, TreeIterator.inOrder, "inOrder");

print(tree, TreeIterator.postOrder, "postOrder");

print(tree, TreeIterator.levelOrder, "levelOrder");


