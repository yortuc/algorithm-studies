/*
	Stack
	first in last out
*/
function Stack(){
	this.arr = [];
}

Stack.prototype.push = function(data) {
	this.arr.push(data);
	return data;
}

Stack.prototype.pop = function(){
	return this.arr.pop();
}

var myStack = new Stack();
console.log("STACK");

console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log("---");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

/*
	QUEUE
	first in first out
*/
function Queue() {
	this.arr = [];
}

Queue.prototype.push = function(data){
	this.arr.push(data);
	return data;
}

Queue.prototype.pop = function() {
	return this.arr.shift();
}

var myQueue = new Queue();
console.log("QUEUE");

console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.push(3));
console.log("---");
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());


