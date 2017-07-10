/*
	Remove duplicate items in an unsorted linkedlist
*/

// linkedlist node
function Node(val, next) {
	this.val = val;
	this.next = next;
}

function removeDups(head) {
	var prev = null;
	var cur = head;
	var elms = {};

	while(cur){
		if(elms[cur.val]){
			prev.next = cur.next;
		}
		else{
			elms[cur.val] = 1;
		}
		prev = cur;
		cur = cur.next;
	}
}

// without using a dicrionary
function removeDups2(head){
	var iterator = head;
	var runner = head;

	while(iterator) {		// take element
		while(runner) {		// compare previous items

			if(runner === iterator) break;

			if(iterator.val === runner.val) {

			}

			runner = runner.next;
		}        

		iterator = iterator.next;
	}
}

const log = (head) => {
	var txt = "", cur = head;
	while(cur){
		txt += cur.val + ", ";
		cur = cur.next;
	}
	console.log(txt);
}

var n1 = new Node(1, new Node(2, new Node(1, new Node(3, new Node(2)))));
console.log("input:");
log(n1);
console.log("---");
removeDups(n1);
log(n1);