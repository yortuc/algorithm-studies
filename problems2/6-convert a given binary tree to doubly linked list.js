/*
	Convert a given Binary Tree to Doubly Linked List | Set 4
	Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. 
	The left and right pointers in nodes are to be used as previous and next pointers 
	respectively in converted DLL. 

	The order of nodes in DLL must be same as Inorder of the given Binary Tree. 
	The first node of Inorder traversal (left most node in BT) must be head node of the DLL.
*/

function LLNode(val, prev, next) {
	this.val = val;
	this.prev = prev;
	this.next = next;
}

function TNode(val, left, right){
	this.val = val;
	this.left = left;
	this.right = right;
}

function treeToList(root){
	let	node = new LLNode(root.val);	
	
	if(root.left){
		let prev = treeToList(root.left);

		let prevPredecessor = new LLNode(inorderPredecessor(root.left).val);
		prevPredecessor.prev = prev;
		prevPredecessor.next = node;
		node.prev = prevPredecessor;
	}

	if(root.right) {
		let next = treeToList(root.right);

		let nextSuccessor = new LLNode(inorderSuccessor(root.right).val);
		nextSuccessor.prev = node;
		nextSuccessor.next = next;
		node.next = nextSuccessor;
	}

	return node;
}

function inorderPredecessor(root) {
	let cur = root;
	while(cur.left || cur.right){
		if(cur.right) cur = cur.right;
		else cur = cur.left;
	}
	return cur;
}

function inorderSuccessor(root){
	let cur = root;
	while(cur.left || cur.right){
		if(cur.left) cur = cur.left;
		else cur = cur.right;
	}
	return cur;
}

const tree = new TNode(10, 
						new TNode(12, new TNode(25), new TNode(30)), 
						new TNode(15, new TNode(36))
				 		);

// console.log(inorderSuccessor(tree));

// console.log("tree", tree);

let list = treeToList(tree);
console.log("list", list);







