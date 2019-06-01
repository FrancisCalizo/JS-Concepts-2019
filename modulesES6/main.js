// In HTML, You Need to Add Type="Module" in Script Tag
import User, { printName as printUsername, printAge } from './user.js';

const user = new User('Bob', 11);

console.log(user);
printUsername(user);
printAge(user);
