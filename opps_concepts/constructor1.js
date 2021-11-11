// constructor 
function Book (title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 =  new Book("tin and foil" , "napel" , 1995);
const book2 = new Book("mind of peace" , "jorpel" , 1800);

console.log(book1);