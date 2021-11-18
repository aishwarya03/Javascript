let studentJson = require("./students.json")
let count = 0;

// for (let i = 0; i < studentJson.student.length; i++) {
//     for (let j = 0; j < studentJson.student[i].attendance.length; j++) {
//        if(studentJson.student[i].attendance[j].isPresent == true)
//        {
//            console.log(studentJson.student[i].attendance[j].isPresent)
//            count +=1;
//        }
        
//     }
    
// }
// console.log(count);

function showAttendence(userName){
studentJson.student.forEach(element => { 
    if(element.name == userName){
    element.attendance.forEach(element1 => {
        if(element1.isPresent == true){
            console.log(element1.isPresent);
            count+=1;
        }
        else{
            console.log(element1.isPresent)
        }
        
    });
    
}});
console.log(count);
}

let userName = "two";
showAttendence(userName);