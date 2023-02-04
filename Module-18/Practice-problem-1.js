var fruits = ['Apple', 'Banana', 'Orange'];
var x = fruits.indexOf('Banana');
console.log(x);
fruits[x] = "Mango";
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);