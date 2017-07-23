/* 
	A program to evaluate a given expression where tokens are separated by space.
   	Test Cases:
      "10 + 2 * 6"            ---> 22
      "100 * 2 + 12"          ---> 212
      "100 * ( 2 + 12 )"      ---> 1400
      "100 * ( 2 + 12 ) / 14" ---> 100    

    https://github.com/sandino63/Interview/blob/master/Amazon/evaluateExpression
*/

/*
	Solution:
	Convert Infix -> Postfix
	Evaluate Postfix expression with stack
*/

function hasHigherPrec(op1, op2){
	/* 
		op1 has higher precedence on op2?
		1. Multiplication and Division (from left to right)
		2. Addition and Subtraction (from left to right) */
	return (op1 === "*" || op1 === "/") &&
		   (op2 === "+" || op2 === "-") || 
		   (op1 === "/" && op2 === "*") || 
		   (op1 === "*" && op2 === "/");
}

function infixToPostfix(exp) {
	var tokens = exp.split(" ");
	var ret = [];
	var ops = [];

	tokens.forEach(token=> {
		if(!isNaN(token)){
			// number
			ret.push(token);
		}
		else{
			// operator
			while(ops.length>0 && hasHigherPrec(ops[ops.length-1], token)) {
				ret.push(ops.pop());
			}
			ops.push(token);
		}
	});

	while(ops.length >0){
		ret.push(ops.pop());
	}

	return ret;
}

function evaluateOperator(op, t1, t2) {
	switch(op){
		case "+": return t1 + t2;
		case "*": return t1 * t2;
		case "-": return t1 - t2;
		case "/": return t1 / t2;
	}
}

/*
Postfix evaluation
	1. While there are input tokens left
	    o Read the next token from input.
	    o If the token is a value
	       + Push it onto the stack.
	    o Otherwise, the token is an operator 
	      (operator here includes both operators, and functions).
	       * It is known a priori that the operator takes n arguments.
	       * If there are fewer than n values on the stack
	        (Error) The user has not input sufficient values in the expression.
	       * Else, Pop the top n values from the stack.
	       * Evaluate the operator, with the values as arguments.
	       * Push the returned results, if any, back onto the stack.
	2. If there is only one value in the stack
	    o That value is the result of the calculation.
	3. If there are more values in the stack
	    o (Error)  The user input has too many values.
*/
function evaluatePostfix(pst) {
	var stack = [];

	pst.forEach(p=> {
		if(!isNaN(p)){
			// number
			stack.push(parseFloat(p));
		}
		else{
			// operator
			let t2 = stack.pop();
			let t1 = stack.pop();
			let result = evaluateOperator(p, t1, t2);
			stack.push(result);
		}
	});

	return stack.pop();
}

function evaluate(exp){
	let postFix = infixToPostfix(exp);
	console.log("infixToPostfix", exp, postFix);
	return evaluatePostfix(postFix);
}

console.log(evaluate("10 / 2 * 6"));
console.log(evaluate("100 * 2 / 50"));
//console.log(evaluate("100 * ( 2 + 12 )"));
//console.log(evaluate("100 * ( 2 + 12 ) / 14"));