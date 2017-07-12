/*
	How would you design a stack which, in addition to push and pop, also has a function
	min which returns the minimum element? Push, pop and min should all operate in
	O(1) time.
*/

class Stack {

	constructor(props) {
		this.min_history = [];
		this.arr = [];
	}

	push(p) {
		if(this.min_history.length === 0 || p < this.min()) {
			this.min_history.push(p);
		}
		this.arr.push(p);
	}

	pop() {
		var val = this.arr.pop();
		if (val === this.min()) {
			this.min_history.pop();
		}
		return val
	}

	min(){
		return this.min_history[this.min_history.length-1];
	}
}

var st = new Stack();

st.push(5);
st.push(3);
st.push(0);
st.push(4);
console.log(st.min());	// 0
st.pop();
st.pop();
console.log(st.min());	// 3