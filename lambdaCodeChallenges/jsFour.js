/*
Wow, I really messed this up! My implementation of these constructors and prototypes isn't working the way I want it to. Can you help me to debug my code, please? Thanks!
 */
/*
FIXES
1. add "this."
  - lines 2, 3, 4, 5 Constructor
  - line:12 ${this.name}
  - line:25 add "this" as first parameter: Parent.crawl(this, childAttributes); // binding to Parent
  - line:26 this.isChild = ...
  - line:30 "if(this.isChild)"
  - line:31 ${this.name} AND ${this.constructor.name}
  - SCROLL TO BOTTOM AND NOTICE line:42
  - Change line:6 from "const" to "this.yabbaDabba = ..."

2. line 11 Parent.protype..., line 29 & 35 Child.protype

**** RUN TESTS, NONE PASS ****

3. line 35 protype = Object.create(Parent.protype);
   GOES ABOVE line:29
   protype.checkIfChild = function() {...

4. protype >>> prototype
 - lines 11, 29, 31

**** RUN TESTS, PARENT passes!!!!!!! ****
**** RUN THE PROGRAM - Note all the "undefined"s ****

5. line 15
const fred = new Parent({
  gender: 'Male',
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

NOTE: THE LINES NUMBERS CHANGE AS WE MAKE CORRECTIONS AND MOVE FROM THEIR ORIGINAL POSITIONS WITH THESE MODIFICATIONS TO THE SCRIPT. THE LINE NUMBERS LISTED REFLECT THE CHANGES AS THEY ARE MADE.

6. line 22
const wilma = new Parent({
  gender: 'Female',
  age: 37,
  name: 'Wilma',
  homeTown: 'Bedrock'
});

7. line 47
const pebbles = new Child({
  gender: 'Female',
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});

**** RUN PROGRAM, LESS UNDEFINED - MAKING PROGRESS ****
**** RUN TESTS - PASSING wilma_who!!!!!

8. line:35 crawl >>> call

9. line:12 return the speak() string, don't console.log it - note the undefined's when running the script
10. line:12 return a string, not an array of strings

**** RUN SCRIPT, Looks better, Run Tests PASS speak and pebbles_first_words! ****

11. line:43 don't console.log, make it a return

12. line:36
  isChild = true; // a special attribute to Child

13. lines:23-24 the if(condition) is not needed
  Child.prototype.checkIfChild = function() {
    return `My name is ${name} and I am a child object`;
  };

**** RUN SCRIPT - NOTE that pebbles IS A Parent Object ****

14. Between line:39 & 40 add
  Child.prototype.constructor = Child;

**** RUN TESTS, PASSING Child!!! ****

*/
// * Todo refer to solution code from repl.it (keep explanation simple)
/*

function Parent(attributes) {
	this.gender = attributes.gender;
	this.age = attributes.age;
	this.name = attributes.name;
	this.homeTown = attributes.homeTown;
	this.yabbaDabba = function() {
		return 'Yabba dabba doo!';
	};
}

Parent.prototype.speak = function() {
	return `Hello, my name is ${this.name}`;
};

const fred = new Parent({
	gender: 'Male',
	age: 35,
	name: 'Fred',
	homeTown: 'Bedrock'
});

const wilma = new Parent({
	gender: 'Female',
	age: 37,
	name: 'Wilma',
	homeTown: 'Bedrock'
});

console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.speak());

function Child(childAttributes) {
	Parent.call(this, childAttributes); // binding to Parent
	this.isChild = childAttributes.isChild; // a special attribute to Child
}

Object.setPrototypeOf(Child.prototype, Parent.prototype);

Parent.prototype.checkIfChild = function() {
	if (this.isChild) {
		return `My name is ${this.name} and I am a ${constructor.name} object`;
	}
};

const pebbles = new Child({
	gender: 'Female',
	age: 3,
	name: 'Pebbles',
	homeTown: 'Bedrock',
	isChild: true
});

console.log(pebbles);
console.log(pebbles.speak());
console.log(pebbles.checkIfChild());
console.log(pebbles.yabbaDabba());
*/
function Parent(attributes) {
	this.gender = attributes.gender;
	this.age = attributes.age;
	this.name = attributes.name;
	this.homeTown = attributes.homeTown;
	this.yabbaDabba = function() {
		return 'Yabba dabba doo!';
	};
}

Parent.prototype.speak = function() {
	return `Hello, my name is ${this.name}`;
};

const fred = new Parent({
	gender: 'Male',
	age: 35,
	name: 'Fred',
	homeTown: 'Bedrock'
});
const wilma = new Parent({
	gender: 'Female',
	age: 37,
	name: 'Wilma',
	homeTown: 'Bedrock'
});
console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.speak());

function Child(childAttributes) {
	Parent.call(this, childAttributes); // binding this to Parent
	this.isChild = true; // this will be a special attribute to Child
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.checkIfChild = function() {
	return `My name is ${this.name} and I am a ${this.constructor.name} object`;
};

const pebbles = new Child({
	gender: 'Female',
	age: 3,
	name: 'Pebbles',
	homeTown: 'Bedrock'
});
console.log(pebbles);
console.log(pebbles.speak());
console.log(pebbles.checkIfChild());
console.log(pebbles.yabbaDabba());
