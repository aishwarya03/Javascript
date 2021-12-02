class Student{
    constructor(id,firstname,lastname,grade){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = grade;
        console.log("line 7")
    }

}

class Fees extends Student{
    constructor(id,firstname,lastname,grade,feestatus){
        super(id, firstname,lastname,grade)
        var feestatus = feestatus
        console.log(feestatus)
       }

    getFeeStatus(){
       let status = { paid:1, notPaid :0}
    
        if(this.feestatus == 1){
        return status.paid;
        }
        else{
            return status.notPaid;
        }
    
}
}

const studentInfo = new Fees (6001,"sam","smith","fifth",1);
// console.log(studentInfo)

   console.log(studentInfo.getFeeStatus())