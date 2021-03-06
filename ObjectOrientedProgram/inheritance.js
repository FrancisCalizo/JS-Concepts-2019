function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// Get Summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Contstructor
function Magazine(title, author, year, month){
  Book.call(this, title, author, year);

  this.month = month;
};

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
mag1 = new Magazine('Mag1', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);