/*
	You have two numbers represented by a linked list, where each node contains a single
	digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
	the list. Write a function that adds the two numbers and returns the sum as a linked
	list.

	EXAMPLE
	Input: (3 -> 1 -> 5), (5 -> 9 -> 2)
	Output: 8 -> 0 -> 8
*/

function Node(val, next){
	this.val = val;
	this.next = next;
}

function sum(h1, h2){
	let val1 = 0;
	let m1 = 1;
	while(h1){
		val1 += m1 * h1.val;
		m1 *= 10;
		h1 = h1.next;
	}

	let val2 = 0;
	let m2 = 1;
	while(h2){
		val2 += m2 * h2.val;
		m2 *= 10;
		h2 = h2.next;
	}

	let ret = val1 + val2;
	let txt = ret.toString();

	let head = new Node(parseInt(txt[txt.length-1]));
	let cur = head;

	for(let i=txt.length-2; i>-1; i--){
		let node = new Node(parseInt(txt[i]));
		cur.next = node;
		cur = node;
	}

	return head;
}

const log = (head) => {
	var txt = "", cur = head;
	while(cur){
		txt += cur.val + ", ";
		cur = cur.next;
	}
	console.log(txt);
}

var n1 = new Node(3, new Node(1, new Node(5)));
var n2 = new Node(5, new Node(9, new Node(3)));
var n3 = sum(n1, n2);
console.log("input:");
log(n1);
log(n2);
console.log("output:");
log(n3);


