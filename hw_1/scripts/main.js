var firstNumber = Math.random() * 100;
var secondNumber = Math.random() * 100;
var thirdNumber, fourthNumber;

function ctg(x) { return 1 / Math.tan(x); }

thirdNumber = (Math.cos(firstNumber) *  (Math.sin(secondNumber) + 1)) / (Math.random() * 10);
fourthNumber = (Math.tan(thirdNumber) * ctg(thirdNumber)) / 100;

alert(
	'firstNumber = ' + firstNumber + '\n' +
	'secondNumber = ' + secondNumber + '\n' +
	'thirdNumber = ' + thirdNumber + '\n' +
	'fourthNumber = ' + fourthNumber
	);

var a = 1, b = 2, c = 4, d = 4;

d *= ++c + b / 6 * 2 + +'1'; // 26 i 4/6
c /= b++ + d++ + ++a - 30 % 10; // 5 / 30 i 4/6 = 0.16...
// a = 2
// b = 3

alert(
	'a = ' + a + '\n' +
	'b = ' + b + '\n' +
	'c = ' + c + '\n' +
	'd = ' + d
	);