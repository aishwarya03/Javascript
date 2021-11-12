function Book (title, author, year){
    this .title = title;
    this.author = author;
    this.year = year;
    
};

//get summary 
Book.prototype.getSummary = function(){
    return `${this.title} is written by ${this.author} in the year ${this.year}`;
};

// Magazine constrcutor 
function Magazine (title, author, year, month){
    Book.call(this, title , author, year);
    this.month = month;

}

//inherit prototype
Magazine.prototype = Object.create (Book.prototype);


// inheritance 
// instantiate magazine object
const Mag1 = new Magazine ("Currie" , "lapton", 2082, "jan");

//use magazine constructor 
Magazine.prototype.constructor = Magazine;

console.log(Mag1)