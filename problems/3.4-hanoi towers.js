/*
	In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different
	sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending
	order of size from top to bottom (e.g., each disk sits on top of an even larger one). You
	have the following constraints:

	(A) Only one disk can be moved at a time.
	(B) A disk is slid off the top of one rod onto the next rod.
	(C) A disk can only be placed on top of a larger disk.
	
	Write a program to move the disks from the first rod to the last using Stacks
*/
class Tower {
	constructor(towerIndex) {
		this.index = towerIndex;
		this.disks = [];
	}

	add(p) {
		if(p.length !== 0 && this.disks[this.disks.length-1] < p) {
			console.log("Error placing disk : " + p);
		}
		else{
			this.disks.push(p);
		}
	}

	moveToTop(tower) {
		let top = this.disks.pop();
		tower.add(top);
		console.log("Move diskt from tower " + this.index + " to tower " + tower.index);
	}

	moveDisks(n, destination, buffer){
		if(n>0){
			this.moveDisks(n-1, buffer, destination);
			this.moveToTop(destination);
			buffer.moveDisks(n-1, destination, this);
		}
	}

	print(){
		console.log("Contents of tower " + this.index);
		this.disks.forEach(d=> console.log(d));
		if(this.disks.length === 0) console.log(" No disks")
	}
}

const n = 5;
const towers = [
	new Tower(1), new Tower(2), new Tower(3)
];

for(var i=n-1; i>-1; i--) {
	towers[0].add(i);
}

towers[0].print();

towers[0].moveDisks(n, towers[2], towers[1]);

towers[0].print();
towers[1].print();
towers[2].print();

