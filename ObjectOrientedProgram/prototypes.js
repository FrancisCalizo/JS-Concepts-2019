// Constructors
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// Get Summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// Get Age
// Cant use arrow function (Scope vs. Context)
Book.prototype.getAge = function(){
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} old`;
};

Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;
}

// Instantiate an Object from Constructor above
const book1 = new Book('Holes', 'Stanley Morgan', '1992');
const book2 = new Book('Harry Potter', 'JR Tolkien', '2000');

console.log(book1);
console.log(book2);
console.log(book1.getSummary());
console.log(book1.getAge());
book2.revise('2018');
console.log(book2);
