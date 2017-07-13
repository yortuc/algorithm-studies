/*
	Write a program to sort a stack in ascending order. You should not make any assumptions
	about how the stack is implemented. The following are the only functions that
	should be used to write this program: push | pop | peek | isEmpty.
*/

Array.prototype.peek = function(){
	return this.length ? this[this.length-1] : null;
}

function sortStack(s1) {
	let s2 = [];	// buffer stack

	for(var i=0; i<s1.length; i++){
		let el1 = s1.pop();
		let el2 = s1.peek();

		if(el2 === null){	// el1 is the last elm in s1
			s2.push(el1);

			let s2_elm = s2.pop();
			while(s2_elm){
				s1.push(s2_elm);
				s2_elm = s2.pop();
			}
		}
		else{
			if(el2>el1) {
				s2.push(el1);
			}
			else {
				s2.push(s1.pop());
				s1.push(el1);	// push back the larger element
			}
		}
	}
}

const s1 = [3, 6, 4, 5];
console.log(s1);
sortStack(s1);
console.log(s1);