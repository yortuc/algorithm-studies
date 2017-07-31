/*

*/

function Node(val, left, right) {
	this.val = val; 
	this.left = left;
	this.right = right;
}

// Naive approach

function getNodes(root, dict){
	dict[root.val] = true;
	if(root.left) getNodes(root.left, dict);
	if(root.right) getNodes(root.right, dict);
}

function setNodes(root, vals){
	let sum = 0;
	for(let i=0; i<vals.length; i++){
		if(root.val < vals[i]) sum += vals[i]; 
	}
	root.val += sum;
	if(root.left) setNodes(root.left, vals);
	if(root.right) setNodes(root.right, vals);
}

function addTree(root){
	let dict = {};
	getNodes(root, dict);
	setNodes(root, Object.keys(dict).map(t=> parseInt(t)));
	return root;
}

const tree = new Node(50, 
					new Node(30, 
						new Node(20),
						new Node(40)), 
					new Node(70, 
						new Node(60), 
						new Node(80)));

console.log(addTree(tree));

//
// with tree traversal
// use rever ionreder tree traversal to visit all nodes in decreasing order
//

console.log("version2 \n\n");

function addTree2(root, sum) {

	if(!root) return;

	addTree2(root.right, sum);

	sum = sum + root.val;
	root.val = sum;

	addTree2(root.left, sum);

	return root;
}

console.log(addTree2(tree, 0));




