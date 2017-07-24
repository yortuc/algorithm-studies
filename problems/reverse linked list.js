/*
	Reverse a single linked list
*/

function reverse(root) {
	let cur = root;
	let next = null;

	while(cur.next) {
		console.log(cur.next);
		next = Object.assign({}, cur.next);
		next.next = Object.assign({}, cur);
		cur.next = null;
		cur = Object.assign({}, next);
	}
}


function log(root){
	let cur = root;
	let str = "";
	while(cur){
		str += "," + cur.val;
		cur = cur.next;
	}
	console.log(str);
}

const Node = (val, next)=> ({ val, next });

const ll = Node(1, Node(2, Node(3, Node(4))));

log(ll);

reverse(ll);

log(ll);