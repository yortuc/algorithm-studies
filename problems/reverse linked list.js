/*
	Reverse a single linked list
*/

function reverse(root) {
	if(!root) return null;	// error case

	let cur = root;
	let prev = null;
	let next = null;

	while(cur){								
		next = cur.next;						
		cur.next =prev;					
		prev = cur;							
		cur = next;		
	}

	return prev;
}

function log(root){
	let cur = root;
	let str = "";
	while(cur){
		str += cur.val + ",";
		cur = cur.next;
	}
	console.log(str);
}

class Node {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

const ll = new Node(1, new Node(2, new Node(3, new Node(4))));

log(ll);

const reversed = reverse(ll);

log(reversed);