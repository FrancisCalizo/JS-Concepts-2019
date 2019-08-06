const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// Normally
// const a = alphabet[0];
// const b = alphabet[1];

// Destructuring
const [first, second, third] = alphabet;
console.log(first, second, third);

// Skipping an Element, just leave an open comma
const [one, , three] = alphabet;
console.log(one, three);

// Spread Operator (Get the rest of the elements )
const [uno, , tres, ...rest] = alphabet;
console.log(uno, tres, rest);

// Combine Two Arrays together -- Same as alphabet.concat(numbers)
const newArr = [...alphabet, ...numbers];
console.log(newArr);

// Functions that return more than one parameter
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiply] = sumAndMultiply(2, 3);
console.log(sum, multiply);

// Destructuring with Objects
const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'Somewhere',
    state: 'One of them'
  }
};

const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Somewhere else',
    state: 'Another one of them'
  },
  job: 'none'
};

// Get name and put it into variable firstName
const { name: firstName, age } = personTwo;
console.log(firstName, age);

// Spread Operator
const { name: governmentName, ...objRest } = personTwo;
console.log(governmentName, objRest);

// Destructuring Nested Objects
const {
  name: fName,
  address: { city }
} = personTwo;
console.log(fName);
console.log(city);

// Combining Two Objects (PersonTwo will overwrite the data from personOne!)
const personThree = { ...personOne, ...personTwo };
console.log(personThree);

// Using Object Destructuring inside of Functions and inside of Arguments
const personFour = {
  name: 'Francis',
  age: '27',
  address: {
    city: 'Fort Lauderdale',
    state: 'FL'
  }
};

// Normal way to just get two properties of objects
function printUser(user) {
  console.log(`Name is: ${user.name}. Age is ${user.age}`);
}
console.log(personFour);

// Using destructuring within the objects
function printUserD({ name, age, favoriteFood = 'Watermelon' }) {
  console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}
printUserD(personFour);
