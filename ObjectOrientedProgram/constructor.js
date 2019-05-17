// Constructors
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Instantiate an Object from Constructor above
const book1 = new Book('Holes', 'Stanley Morgan', '1992');
const book2 = new Book('Harry Potter', 'JR Tolkien', '2000');

console.log(book1);
console.log(book2);
console.log(book1.getSummary());