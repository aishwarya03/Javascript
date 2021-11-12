// constructor is basically a function

function Book (title, author, year){
    this .title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function (){
        return `${this.title} is written by ${this.author} in the year ${this.year}`
    };
}

// instatiate object
const book1 = new Book("By the way", "Gofu tei", 2080);

const book2 = new Book("koala,cool", "eucalyptus", 2190);

console.log(book1.title);
console.log(book2)
console.log(book1.getSummary());