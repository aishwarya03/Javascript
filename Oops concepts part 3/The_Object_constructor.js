
//use the Object() constructor to create a new object. 
let person1 = new Object();

person1.name = "Darpe";
person1['age'] = 25;
person1.greeting = function(){
    return `${this.name} is the name of this person`
}

console.log(person1.greeting());