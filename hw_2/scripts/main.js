var fruits = ['Apple', 'Watermelon'];

fruits.push('Strawberry');

fruits[fruits.length - 2] = 'Melon';

fruits.splice(0, 1);

fruits.splice(0, 0, 'Banana', 'Cherry');

for (var i = 0; i < fruits.length; i += 2)
	fruits[i] = fruits[i].toUpperCase();

alert('All even numbers are in UpperCase\n'+ fruits);

fruits = fruits.map(function(currentElement) {
	return currentElement.toLowerCase();
});

alert('All even numbers are in LowerCase\n'+ fruits);

var berries = [];

var index = fruits.length - 1;
while (index >= 0) {	
	switch (fruits[index]) {
		case 'strawberry':
		case 'cherry':
		case 'banana':
			berries.push(fruits.splice(index, 1)[0]);
	}
	index--;
}

alert('They are berries - ' + berries + '\n' +
	  'Some others fruits - ' + fruits);