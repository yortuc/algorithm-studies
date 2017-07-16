/*
	Imagine you have a call center with three levels of employees: fresher, technical lead
	(TL), product manager (PM). There can be multiple employees, but only one TL or PM.
	An incoming telephone call must be allocated to a fresher who is free. If a fresher
	can’t handle the call, he or she must escalate the call to technical lead. If the TL is
	not free or not able to handle it, then the call should be escalated to PM. Design the
	classes and data structures for this problem. Implement a method getCallHandler().
*/


class CallHandler{
	constructor(props) {
		this.LEVELS = 3;
		this.NUM_FRESHERS = 5;

		this.employeeLevels = [];
		this.callQueues = [];
	}

	getCallHandler(call){
		for(let level=call.rank; level<this.LEVELS; level++){
			let employeeLevel = this.employeeLevels[level];

			for(emp in employeeLevels){
				if(emp.free){
					return emp;
				}
			}
		}
		return null;
	}

	dispatchCall(call){
		let emp = this.getCallHandler(call);

		if(emp!=null){
			emp.ReceiveCall(call);
		}
		else{
			this.callQueues[call.rank].add(call);
		}
	}
}

class Call{
	constructor(props) {
		this.rank = 0;
	}
}

class Employee{
	constructor(rank) {
		this.callHandler = callHandler;
		this.rank = rank;
		this.free = true;
	}

	CannotHandle(call){
		call.rank = this.rank + 1;
		this.callHandler.dispatchCall(call);
		this.free = true;
		this.callHandler.getNextCall();
	}
}

class Fresher extends Employee{
	constructor() {
		super(0);
	}
}

class TechLead extends Employee{
	constructor() {
		super(1);
	}
}

class ProjectManager extends Employee{
	constructor() {
		super(2);
	}
}


