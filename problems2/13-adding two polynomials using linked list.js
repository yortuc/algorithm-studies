/*
	Adding two polynomials using Linked List
	Given two polynomial numbers represented by a linked list. 
	Write a function that add these lists means add the coefficients who have same variable powers.

	Example:

	Input:
	     1st number = 5x^2 + 4x^1 + 2x^0
	     2nd number = 5x^1 + 5x^0
	Output:
	        5x^2 + 9x^1 + 7x^0
	Input:
	     1st number = 5x^3 + 4x^2 + 2x^0
	     2nd number = 5x^1 + 5x^0
	Output:
	        5x^3 + 4x^2 + 5x^1 + 7x^0
*/

function Node(coefficient, power, next){
	this.coefficient = coefficient;
	this.power = power;
	this.next = next;
}

/*
	APPROACH #1 : using a dictionary 
*/

function addPoly(p1, p2){
	let dict = {};

	let cur = p1;
	while(cur){
		dict[cur.power] = cur.coefficient;
		cur = cur.next;
	}

	cur = p2;
	while(cur){
		dict[cur.power] += cur.coefficient;
		cur = cur.next;
	}

	console.log(dict);

	// convert dict to LL
	let vals = Object.keys(dict);
	let prev;
	for(let i=0; i<vals.length; i++){
		let node = new Node(dict[vals[i]], vals[i]);

		if(prev) {
			node.next = prev;
		}
		prev = node;
	}

	return prev;
}

function print(poly){
	let cur = poly;
	let arr = [];
	while(cur){
		arr.push(cur.coefficient + "x^" + cur.power);
		cur = cur.next;
	}
	console.log(arr.join(" + "));
}

const p1 = new Node(5, 2, new Node(4, 1, new Node(2, 0)));
const p2 = new Node(5, 1, new Node(5, 0));

print(addPoly(p1, p2));


/*
	APPORACH #2 : compare lengths of linked lists and iterate parallel
	uses less memory
*/

function addPoly2(p1, p2){
	let lengthP1 = 0;
	let lengthP2 = 0;

	let cur = p1;
	while(cur){
		lengthP1++;
		cur = cur.next;
	}

	cur = p2;
	while(cur){
		lengthP2++;
		cur = cur.next;
	}

	// iterate larger until they get equal in size
	let larger = lengthP1 > lengthP2 ? p1 : p2;
	let diff = Math.abs(lengthP1 - lengthP2);

	let ret = larger; 	// keep the head of larger LL

	for(let i=0; i<diff; i++){
		larger = larger.next;
	}

	// they are even now, iterate parallel
	while(larger){
		p1.coefficient += p2.coefficient;
		p1 = p1.next;
		p2 = p2.next;
	}

	return ret;
}

console.log("version 2 \n\n");

// print(addPoly2(p1, p2));

/*
	APPROACH #3 Iterate parallel anyways
*/

function addPoly3(p1, p2) {
	let p = new Node();

	while(p1 && p2){

		if(p1.power > p2.power) {
			p.coefficient = p1.coefficient;
			p.power = p1.power;
			p1 = p1.next;
		}
		else if(p1.power < p2.power) {
			p.coefficient = p2.coefficient;
			p.power = p2.power;
			p2 = p2.next;
		}
		else if(p1.power === p2.power) {
			p.coefficient = p1.coefficient + p2.coefficient;
			p.power = p1.power;
			p1 = p1.next;
			p2 = p2.next;
		}

		p.next = new Node();
		p = p.next;
	}

	// iterate rest
	while(p1 || p2){
		if(p1.next) {
			p.coefficient = p1.coefficient;
			p.power = p1.power;
			p1 = p1.next;
		}

		if(p2.next){
			p.coefficient = p2.coefficient;
			p.power = p2.power;
			p2 = p2.next;
		}

		p.next = new Node();
		p = p.next;
	}

	return p;
}


console.log("version 2 \n\n");

print(addPoly3(p1, p2));


