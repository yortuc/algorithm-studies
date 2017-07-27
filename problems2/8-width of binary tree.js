/*
	Find the maximum width of a given binary tree
*/

function width(node, d, depths){
	d = d || 1;
	depths[d] = depths[d] || 0;

	if(node.left){
		depths[d] += 1;
		width(node.left, d+1, depths);
	}
	if(node.right){
		depths[d] += 1;
		width(node.right, d+1, depths);
	} 

	// {} -> []
	let keys = Object.keys(depths);
	let curMax = 0;
	for(let i=0; i<keys.length; i++){
		if(depths[keys[i]] > curMax) curMax = depths[keys[i]];
	}

	return curMax;
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

console.log(width(tree, 0, {}));