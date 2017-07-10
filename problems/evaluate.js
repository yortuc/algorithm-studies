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