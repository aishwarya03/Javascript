const book1 = {
    title : "The pillow war" ,
    author : "taralif bary",
    year : 2101,
    getSummary : function(){
        return `${this.title} is written by ${this.author} in the year ${this.year}`
    }
};

const book2 = {
    title : "The robot's fun time in the roller coaster",
    author : "Poe bot 100923",
    year : 2115,
    getSummary : function(){
        return `${this.title} is written by ${this.author} in the year ${this.year}`
    }
};

console.log(book1.getSummary());
console.log(book2.getSummary());

// get object values 

console.log(Object.values(book1));

// get object keys

console.log(Object.keys(book2));
