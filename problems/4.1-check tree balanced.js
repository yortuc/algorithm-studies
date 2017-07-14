/*
	Implement a function to check if a tree is balanced. 

	For the purposes of this question,
	a balanced tree is defined to be a tree such that no two leaf nodes differ in distance
	from the root by more than one
*/

function Node(left, right) {
	this.left = left;
	this.rigth = right;
}

// check if the diff btw maxDepth and minDepth is not more than 1

function minDepth(root){
	if(!root) {
		return 0;
	}
	else{
		return 1 + Math.min( minDepth(root.left), minDepth(root.right) );
	}
}

function maxDepth(root, depth){
	if(!root){
		return 0;
	}
	else{
		return 1 + Math.max(maxDepth(root.left) + maxDepth(root.right));
	}
}

function isBalanced(a){
	const max = maxDepth(a);
	const min = minDepth(a);

	console.log(max, min);

	return max - min <= 1;
}

let tree = new Node( 
				new Node(2, new Node()),
				new Node(3)
		   );


console.log("is tree balanced : " + isBalanced(tree));

let tree2 = new Node(1, 
				new Node(2),
				new Node(3, 
					new Node(4, 
						new Node(5, 
							new Node(6)))));


console.log("is tree balanced : " + isBalanced(tree2));

