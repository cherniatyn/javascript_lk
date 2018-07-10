var expression, resultField;
var result = "Result = "
var expressionPattern = /^\s*(\-?\d+[.,]?\d*)\s*([+\/*%:^-]{1})\s*(\-?\d+[.,]?\d*)\s*$/;
window.onload = function(){
    var bodyNode = document.getElementsByTagName("body")[0];
	expression = document.createElement("input");
	expression.id = "expression";
	expression.type = "text";
	// expression.pattern = "(?'operand1'\-?\d+[.,]?\d*)\s*(?'operation'[+\/*%:^-]{1})\s*(?'operand2'\-?\d+[.,]?\d*)";
	expression.pattern = expressionPattern;
	//expression.onchange = function() {
	expression.oninput = function() {
		//document.getElementById("expression")
		var matches = expression.value.match(expressionPattern);
		if (!matches) {
			resultField.innerText = "Invalid expression";
			return;
		}
		var firstOperand = +(matches[1].replace(',', '.'));
		var secondOperand = +(matches[3].replace(',', '.'));
		resultField.innerText = result + getResult(firstOperand, secondOperand, matches[2]);
	};

	resultField = document.createElement("label");
	resultField.id = "resultField";
	resultField.style.margin = "0 10px";

	bodyNode.appendChild(expression);
	bodyNode.appendChild(resultField);
	loadStyle();
}

function getResult(first, second, operation) {
	var result;
	switch(operation) {
		case '+':
			result = first + second;
			break;
		case '-':
			result = first - second;
			break;
		case '*':
			result = first * second;
			break;
		case ':':
		case '/':
			result = first / second;
			break;
		case '%':
			result = first % second;
			break;
		case '^':
			result = Math.pow(first, second);
			break;
	}
	return result;
}