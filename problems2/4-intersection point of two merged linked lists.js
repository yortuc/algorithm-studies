/*
	Write a function to get the intersection point of two Linked Lists.
	There are two singly linked lists in a system. 
	By some programming error the end node of one of the linked list got linked into the second list, 
	forming a inverted Y shaped list. Write a program to get the point where two linked list merge.

	a->b->c->
			 d->e
	      x->
*/

function findMergePoint(list1, list2){
	let count1 = 0;
	let count2 = 0;
	let cur1 = list1;
	let cur2 = list2;

	while(cur1){
		count1 += 1;
		cur1 = cur1.next;
	}
	while(cur2){
		count2 += 1;
		cur2 = cur2.next;
	}
	let d = Math.abs(count1 - count2);
	let biggerList = count1 > count2 ? list1 : list2;
	let curB = biggerList; 

	// iterate bigger list d times
	for(let i=0; i<d; i++){
		curB = curB.next;
	}

	// iterate parallel, and check if the nodes are pointing to the same node
	curS = count1 > count2 ? list2 : list1;
	while(curS) {
		if(curS.next === curB.next) {
			return curS.next;
		}
		curS = curS.next;
		curB = curB.next;
	}

	return null;	// not found
}

function Node(val, next){
	this.val = val;
	this.next = next;
}

Node.prototype.toString = function() {
	let cur = this;
	let str = "";
	while(cur){
		str += cur.val + ",";
		cur = cur.next;
	}
	return str;
}

const node56 = new Node(5, new Node(6));	// 5,6
const list1 = new Node(1, new Node(2, new Node(3, new Node(4, node56)))); // 1,2,3,4,5,6
const list2 = new Node(7, new Node(8, node56));	// 7,8,5,6

console.log(list1.toString());
console.log(list2.toString());
console.log("merge point is ", findMergePoint(list1, list2));	// 5


const node123 = new Node(1, new Node(2, new Node(3)));
const l1 = new Node(9, node123);	// 9,1,2,3
const l2 = new Node(4, new Node(5, new Node(6, new Node(7, node123)))); // 4,5,6,7,1,2,3

console.log("---");
console.log(l1.toString());
console.log(l2.toString());
console.log("merge point is ", findMergePoint(l1, l2));	// 1
