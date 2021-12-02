// Delete a property of an Object
let student = {
    "name" : "danwai",
    "lastname" : "banyan",
    "studentId" : "2021004",
    printStudentInfo : function(){
        return `${this.name},${this.lastname},${this.studentId}`
    }
}
delete student.studentId;
console.log(student)
console.log(student.printStudentInfo());