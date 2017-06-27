/*
	Perceptron is a single neuron

	x1 ->
	x2 -> 
	x3 -> SUM (y=WX+b) -> ACTIVATION (z=sigma(y)) -> OUTPUT
	x4 ->
	xn ->

	Example Usage:

	Implement a perceptron classifier that can classify a person 
	that age and income are given.
	
	Data (normalized):

	Age 	Income 	Political Inclination (liberal:-1, conservative:1)
	1.5 	2.0 		-1
	2.0 	3.5 		-1
	3.0 	5.0 		-1
	3.5 	2.5 		-1
	4.5 	5.0 		 1
	5.0 	7.0 	 	 1
	5.5 	8.0 	 	 1
	6.0 	6.0 	 	 1

	Learning rate : 0.001
	macEpochs 	  : 100
	numInputs	  : 2 (age and income)
	weights 	  : w0, w1 (for age and income)
	bias		  : b 
	activation fn : step function a = { 1: z≥0, 0: z<0 }

*/

class Perceptron {
	constructor(data) {
		// data
		this.numInputs = data.numInputs;
		this.inputs = data.inputs;
		
		// internal state
		this.weights = [];
		this.bias = 0;
		this.output = 0;

		this.initializeWeights();
	}

	initializeWeights() {
		// random
		const lo = -0.01;
		const hi = 0.01;

		for(let i=0; i<this.numInputs; i++){
			this.weights[i] = (hi-lo) * Math.random() + lo;
		}
		this.bias = (hi-lo) * Math.random() + lo;
	}

	computeOutput() {
		var z = 0;
		for(var i=0; i<this.inputs.length; i++){
			z += this.inputs[i] * this.weights[i];
		}
		z += this.bias;
		this.output = this.activation(z);
		return z;
	}

	activation() {

	}

	train() {

	}

	shuffle() {

	}

	update() {

	}
}