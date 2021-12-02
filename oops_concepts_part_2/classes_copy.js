
class libraryy {
     constructo (title,author,year,idlib){
        this.title = title;
        this.author = author;
        this.year = year;
        this.idlib = idlib;
    }

    getSummary(){
    
        return `${this.title} is written by ${this.author} in the year ${this.year} refer by ${this.idlib}`
    }

    getYearsold()
    {
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;

    }
    revise(newyear){
        this.year = newyear;
        this.revised = true;
        
        
    }
    static Topbookstore(){
        
        return ("barns and nobel");
    }
}

//instantiate class object
const lib = new libraryy("the great war" , "Taria bennet", 2300 , "lib7821");



//console.log(lib);

lib.revise("3100");

console.log (lib)

console.log(lib.getSummary())

console.log(lib.getYearsold())


// for static function inside the class 
//no need for class instantiate 
console.log(libraryy.Topbookstore());
