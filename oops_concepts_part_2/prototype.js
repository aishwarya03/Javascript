// constructor is basically a function

function Book (title, author, year){
    this .title = title;
    this.author = author;
    this.year = year;
    
};

//get summary prototype method
Book.prototype.getSummary = function(){
    return `${this.title} is written by ${this.author} in the year ${this.year}`;
};

// get number of years a book is written 
Book.prototype.getYears = function (){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// revise the year

Book.prototype.revise = function(newyear){
    this.year = newyear;
    this.revised = true;
    
}

const book1 = new Book("By the way", "Gofu tei", 2080);

const book2 = new Book("koala,cool", "eucalyptus", 2190);

//console.log(book1.getYears());
console.log(book2)
book2.revise(2300);
console.log(book2);

//console.log(book1.getSummary());
//console.log(book2.getSummary());