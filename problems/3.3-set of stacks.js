/*
	Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore,
	in real life, we would likely start a new stack when the previous stack exceeds
	some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks
	should be composed of several stacks, and should create a new stack once
	the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
	behave identically to a single stack (that is, pop() should return the same values as it
	would if there were just a single stack).

	FOLLOW UP
	Implement a function popAt(int index) which performs a pop operation on a specific
	sub-stack.
*/

class SetOfStacks {
	constructor(size) {
		this.size = size || 3;
		this.stacks = [[]];
	}

	lastStack() { return this.stacks[this.stacks.length-1]; }

	push(p) {
		if(this.lastStack().length === this.size) {
			this.stacks.push([]);
		}
		this.lastStack().push(p);

		console.log("stacks:" + this.stacks.length);
	}

	pop() {
		var ret = this.lastStack().pop();
		if(this.lastStack().length === 0) {
			this.stacks.pop();
		}
		console.log("stacks:" + this.stacks.length);
		return ret;
	}

	popAt(index){
		var stackIndex = Math.ceil(index/this.size) - 1;
		var offset = index - (stackIndex * this.size);
		var stack = this.stacks[stackIndex];

		console.log(index, stackIndex, offset);

		stack.splice(offset, 1);

		// shift left all other elements
		for(var i=stackIndex + 1; i<this.stacks.length; i++){
			if(this.stacks[i].length >0){
				let last = this.stacks[i].shift();	// popBottom
				this.stacks[i-1].push(last);
			}
		}

		if(this.lastStack().length === 0){
			this.stacks.pop();
		}

		console.log(this.stacks);
	}
}

var sos = new SetOfStacks();
console.log("pushing:")
sos.push(1);
sos.push(2);
sos.push(3);
sos.push(4);
sos.push(5);
sos.push(6);
sos.push(7);
sos.push(8);
sos.push(9);
console.log("poping:");
sos.pop();
sos.pop();
sos.pop();
sos.pop();
sos.pop();
sos.pop();
// 1, 2, 3

sos.push(4);
sos.push(5);
sos.push(6);
sos.push(7);
sos.push(8);

// 1, 2,3,4,5,6,7,8

// follow up: removeAt

console.log("popAt:");
sos.popAt(4);