class libraryy {
    constructor(title,author,year,idlib){
        this.title = title;
        this.author = author;
        this.year = year;
        this.idlib = idlib;
    }

    getSummary(){
    
        return `${this.title} is written by ${this.author} in the year ${this.year} refer by ${this.idlib}`
    }
}

class Magazine extends libraryy{
    constructor(title,author,year,idlib,month){
        super(title,author,year, idlib);
        this.month = month;
    }
}

// instantiate magazine

const mag1 = new Magazine ("Paints", "Val tropes","1993","lib0198", "feb");

console.log(mag1.getSummary());