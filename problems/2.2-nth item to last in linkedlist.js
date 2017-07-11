/*
	Implement an algorithm to find the nth to last element of a singly linked list.
*/

function nthToLast(head, n) {
	let p1 = head;
	let p2 = head;

	// shift p2 n times
	for(var i=0; i<n; i++){
		p2 = p2.next;
	}

	// shift them both until p2 hits the end
	// when it hits, p1 is the item nth to last element
	while(p2){
		p1 = p1.next;
		p2 = p2.next;
	}

	return p1;
}


// linkedlist node
function Node(val, next) {
	this.val = val;
	this.next = next;
}

// 10,29,14,34,62
var n1 = new Node(10, new Node(29, new Node(14, new Node(34, new Node(62)))));

console.log("3. to last");
console.log(nthToLast(n1, 3).val);
