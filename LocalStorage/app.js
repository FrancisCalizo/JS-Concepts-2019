// Local Storage API is part of the Window Object
// JSON.stringify() turns a JS object into JSON Text and stores that JSON Text into a String
// JSON.parse() turns a string of JSON into a JavaScript Object
// Local Storage will stay until you manually clear it out in your settings
// Session Storage will go away once the browser is closed or session is finished
// Storage items must be a STRING

// Set Local Storage Item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set Session Storage Item
// sessionStorage.setItem('name', 'Beth');

// Remove From Storage
// localStorage.removeItem('name');

// Clear local storage
// localStorage.clear();

// Get From Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

document.querySelector('form').addEventListener('submit', e => {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});
