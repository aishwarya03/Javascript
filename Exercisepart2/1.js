
//Print the properties of an obect
let student = {
    name : "danwai",
    lastname : "banyan",
    studentId : "2021004",
    printStudentInfo : function(){
        return `${name},${lastname},${studentId}`
    }
}
console.log(Object.keys(student))
console.log(Object.values(student))
Object.keys(student).forEach(prop =>(console.log(prop)))
// Print the values of an object 
Object.values(student).forEach(val =>(console.log(val)))