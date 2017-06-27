function LinkedList() {
	// starting node of the linked list
	this.head = null;	

	this.length = 0;
}

// insert node at the end of the linked list
LinkedList.prototype.add = function(val) {
	var node = {
		value: val,
		next: null
	}

	if(!this.head) {
		this.head = node;
	}
	else{
		var current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}

	this.length++;
}

// get the item at the given index
LinkedList.prototype.item = function(index) {
	if(index > this.length) return {value: -1, next: null};

	var current = this.head;

	for(var i=0; i<index; i++){
		current = current.next;
	}

	return current;
}

// remove item at given index
LinkedList.prototype.remove = function(index) {
	// find item at index
	var prev = this.item(index-1);
	var next = this.item(index+1);

	prev.next = next;
}

LinkedList.prototype.print = function() {
	var current = this.head;
	while(current){
		console.log("|| " + current.value);
		current = current.next;
	}
}

var myList = new LinkedList();

myList.add(1);
myList.add("a");
myList.add("42");

console.log(myList.head.value);
console.log(myList.head.next.value);
console.log(myList.head.next.next.value);

console.log("** myList has "+ myList.length + " items");

console.log(">> value of item at index 0 is " + myList.item(0).value);
console.log(">> value of item at index 1 is " + myList.item(1).value);
console.log(">> value of item at index 2 is " + myList.item(2).value);
console.log(">> value of item at index 5 is " + myList.item(5).value);

console.log("item removal");

myList.remove(1); // remove item at index 1 (a)
console.log("item removed");
myList.print();


////////// Reverse Single Linked List

console.log("////////// Reverse Single Linked List");

function reverseSLL(list){

	var nodes = [];

	var current = list.head;

	while(current){
		nodes.push(current);
		current = current.next;
	}

	list.head = nodes[nodes.length-1];

	for(var i=nodes.length-2; i>-1; i--){
		list.add(nodes[i].value);
	}
}

var list = new LinkedList();
list.add("a");
list.add("b");
list.add("c");
list.add("d");

list.print();
reverseSLL(list);
console.log("** list reversed");
list.print();



