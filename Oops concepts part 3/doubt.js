class Working{
    constructor(name,wID,email){
        this.name= name;
        this.wID = wID;
        this.email = email;
    }
}
Working.prototype.showWork = function(){
    let array = []
    array.push(this.name,this.wID,this.email)
    return array;
}

class Empyloyee extends Working{
 constructor(name,wID,email,position){
     super(name,wID,email)
     this.position = position
 }

  
}

// let oneW = new Working("joi",1,"email.com")

let oneWW = new Empyloyee("joi",1,"email.com","analyst")

console.log(oneWW.showWork())
