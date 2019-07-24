// Used to practice error checking.
const hasName = true;
const isNice = true;

// Getting the Persons Name will take 2 seconds.
function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hasName ? resolve(name) : reject('He has no name!');
    }, 2000);
  });
}

// Greeting the Person will take 1 second.
function greetPerson(person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isNice ? resolve(`Hello ${person}`) : reject("Don't say hi, he's mean!");
    }, 1000);
  });
}

// Using Async|Await to greet the person after getting the name.
async function meetAndGreet(somebody) {
  const name = await getName(somebody);
  const nowGreet = await greetPerson(name);

  return nowGreet;
}

// Async Function returns a promise, so must use 'then'
meetAndGreet('Francis')
  .then(response => console.log(response))
  .catch(err => console.log(err));

// Using Promise Syntax
// getName('Francis')
//   .then(response => greetPerson(response))
//   .then(response => console.log(response))
//   .catch(err => console.log(err));
