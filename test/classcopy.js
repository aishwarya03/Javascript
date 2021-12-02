class Student{
    constructor (firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

}

class Emplyoee {
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

}
class Print {

    show(){
        console.log(this);
        return `I am ${this.firstname}, ${this.lastname} `
    }
}

let emplyoeeOne = new Emplyoee ("anna", "cherry")

let newEmp = new Print()
console.log(newEmp.show.call(emplyoeeOne));
