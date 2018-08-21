/*
INPUT three parameters
an array: arr,
  a string: kind,
    a number: multiply

Write a function that uses the JavaScript Array methods: .filter(), .map() and.reduce().

  OUTPUT:
console.log(sumPetYears(pets, 'dog', 7));
// The combined dogs' ages: 154
console.log(sumPetYears(pets, 'cat', 4));
// The combined cats' ages: 132
console.log(sumPetYears(pets, 'parakeet', 5));
// The combined parakeets' ages: 65

Do not modify the original "pets" array.Write your function so that the "pets" array is not mutated as a result of invoking your function.To verify the input array is not mutated, you can console.log it after your function:
*/
const pets = [
	{
		name: 'Tinkerbell',
		species: 'cat',
		age: 2
	},
	{
		name: 'Lucy',
		species: 'dog',
		age: 12
	},
	{
		name: 'Chloe',
		species: 'cat',
		age: 18
	},
	{
		name: 'Mojo',
		species: 'dog',
		age: 6
	},
	{
		name: 'Olivia',
		species: 'parakeet',
		age: 4
	},
	{
		name: 'Shadow',
		species: 'cat',
		age: 8
	},
	{
		name: 'Oreo',
		species: 'cat',
		age: 5
	},
	{
		name: 'Molly',
		species: 'dog',
		age: 4
	},
	{
		name: 'Freddie Prinze Jr.',
		species: 'parakeet',
		age: 9
	}
];

function sumPetYears(arr, kind, multiply) {
	// Your code goes here
	let sum = arr
		.filter(pet => pet.species === kind)
		.map(pet => pet.age * multiply)
		.reduce((acc, age) => {
			return (acc += age);
		}, 0);
	console.log(pets);
	return `The combined ${kind}s' ages: ${sum}`;
}

sumPetYears(pets, 'dog', 7);
