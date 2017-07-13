/*
	Implement a MyQueue class which implements a queue using two stacks.
*/

class MyQueue {
	constructor(props) {
	  this.s1 = [];
	  this.s2 = [];
	}

	push(p) {
		this.s1.push(p);
	}

	pop(){
		if(this.s2.length === 0){
			while(this.s1.length > 0){
				this.s2.push(this.s1.pop());
			}
		}
		else{
			return this.s2.pop();
		}

		if(this.s1.length === 0){
			return this.s2.pop();
		}
	}

	print(){
		console.log("s1> " + this.s1.reduce((prev, cur)=> prev + "," + cur , "") + " s2> " + this.s2.reduce((prev, cur)=> prev + "," + cur , ""));
	}
}

var q = new MyQueue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);

q.print();	// 1,2,3,4

console.log("pop: ", q.pop()); // 1
console.log("pop: ", q.pop()); // 2
console.log("pop: ", q.pop()); // 3

q.push(5); 	// 4, 5

q.print(); // 4, 5

console.log(q.pop());	// 4