/*
	Reverse a Linked List in groups of given size | Set 1
	Given a linked list, write a function to reverse every k nodes (where k is an input to the function).

	Example:
	Inputs:  1->2->3->4->5->6->7->8->NULL and k = 3 
	Output:  3->2->1->6->5->4->8->7->NULL. 

	Inputs:   1->2->3->4->5->6->7->8->NULL and k = 5
	Output:  5->4->3->2->1->8->7->6->NULL. 
*/

Array.prototype.peek = function() {
	return this[this.length-1];
}

Array.prototype.isEmpty = function() {
	return this.length === 0;
}

function Node(val, next) {
	this.val = val;
	this.next = next;
}

Node.prototype.toString = function() {
	let str = "";
	let cur = this;
	while(cur){
		str += cur.val + ",";
		cur = cur.next;
	}
	return str;
}

function reverseLL(head, k) {
	let current = head;
	let prev;
	let next;

	let count = 0;
	while(count < k && !current){
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
		count++;
	}

	if(!head.next){
		head.next = reverseLL(next, k);
	}

	return prev;
}

const ll1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8))))))));
console.log(ll1.toString());
const reversed = reverseLL(ll1, 3);
console.log(reversed.toString());





