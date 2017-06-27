// recursive single-value search on an array 
var arr = [0, 1,2,3,4,5,6,7,8,9];
function self_search (i,j,x) {
	if( arr[i] === x){
		return i;
	}
	else{
		if(i === j) {
			return -1;
		}
		else{
			return self_search (i+1, j, x);
		}
	}
}

var index_4 = self_search(0, arr.length, 4);

console.log(index_4);


// recursive text reduce

function self_reduce(i, text){
	if(i<text.length){
		return text.substring(i) + "\n" + (self_reduce(i+1, text) || "");
	}
	else if(i===text.length){
		return;
	}
	else{
		throw("index error");
	}
}

console.log( self_reduce(0, "hello world") );

// recursive polindrome numbers generation

function self_pol(n){
	if(n===1){
		return "1";
	}
	else{
		return self_pol(n-1) + n.toString() + self_pol(n-1);
	}
}

console.log(self_pol(5));


// recursive exponential number computation
function self_exp(a, n){
	if(n===0) return 1;
	if(n===1) return a;

	return a * self_exp(a, n-1);
}

console.log( self_exp(2, 4) );

/****************************
 * recursive tree traversal *
 ****************************/

var tree = {
	val: "6",
	leftNode: {
		val: "4",
		leftNode: {val:"1"},
		rightNode: {val:"2"}
	},
	rightNode: {
		val: "5",
		leftNode: {val: "3"}
	}
}

// node [value, [left, right]]
function traverse(node) {
	console.log("root: " + node.val);
	if(node.leftNode) console.log("left: " + traverse(node.leftNode));
	if(node.rightNode) console.log("right: " + traverse(node.rightNode));
}

console.log( traverse(tree) );
