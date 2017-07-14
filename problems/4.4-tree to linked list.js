/*
	Given a binary search tree, design an algorithm which creates a linked list of all the
	nodes at each depth (eg, if you have a tree with depth D, you’ll have D linked lists).
*/

function LLNode(val, next){
	this.val = val;
	this.next = next;
}

function LinkedList(root) {
	this.root = root;
}
LinkedList.prototype.add = function(p){
	let cur = this.root;
	while(cur.next){
		cur = cur.next;
	}
	cur.next = p;
}
LinkedList.prototype.print = function(){
	let cur = this.root;
	let prn = "";
	while(cur){
		prn += cur.val + ",";
		cur = cur.next;
	}
	console.log(prn);
}

function TNode(val, left, right){
	this.val = val;
	this.left = left;
	this.right = right;
}

let lists = [];	// arr of linked list root nodes for each depth

function traverse(tnode, depth){
	if(!tnode) return;

	if(!lists[depth]) {
		// create linked list root node if the depth never seen before
		lists[depth] = new LinkedList(new LLNode(tnode.val));
	}
	else{
		// add to linked list at that depth
		lists[depth].add(new LLNode(tnode.val));
	}

	traverse(tnode.left, depth+1);
	traverse(tnode.right, depth+1);
}

const tree = new TNode(1);
tree.left = new TNode(2);
tree.right = new TNode(3);

tree.left.left = new TNode(4);

tree.right.left = new TNode(5);
tree.right.right = new TNode(6);

tree.right.left.left = new TNode(7);
tree.right.right.left = new TNode(8);
tree.right.right.right = new TNode(9);

tree.right.right.right.left = new TNode(10);
tree.right.right.right.right = new TNode(11);

traverse(tree, 0);

lists.map(l=> l.print());
