/*
	Design and Implement Special Stack Data Structure | Added Space Optimized Version
	Question: Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1). To implement SpecialStack, you should only use standard Stack data structure and no other data structure like arrays, list, .. etc.

	Example:

	Consider the following SpecialStack
	16  --> TOP
	15
	29
	19
	18

	When getMin() is called it should return 15, which is the minimum 
	element in the current stack. 

	If we do pop two times on stack, the stack becomes
	29  --> TOP
	19
	18

	When getMin() is called, it should return 18 which is the minimum 
	in the current stack.
*/

class SpecialStack {
	constructor() {
		this.arr = [];
		this.minHist = [];
		this.min = 1000;
	}

	push(elm){
		if(elm < this.min){
			this.minHist.push(elm);
			this.min = elm;
		}
		this.arr.push(elm);
	}

	pop() {
		const elm = this.arr.pop();

		if(elm === this.minHist[this.minHist.length-1]) {
			this.minHist.pop();
		} 

		return elm;
	}

	getMin() {
		return this.minHist[this.minHist.length-1];
	}
}

const ss = new SpecialStack();

ss.push(5);
console.log(ss.getMin());
ss.push(4);
ss.push(12);
ss.push(2);
console.log(ss.getMin());



