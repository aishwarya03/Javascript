let studentJson = require("./students.json")
// console.log(JSON.stringify(studentJson));

let isDateExists = false;

function markAttendance(userName, isPresent, userDate) {
    studentJson.students.forEach(student => {
        if (userName == student.name) {
            student.attendance.forEach(record => {
                if (record.date == userDate) {
                    isDateExists = true;
                    //no break in foreach
                }

            });
            if (isDateExists == false) {
                student.attendance.push({ "date": userDate, "isPresent": isPresent })
                console.log(JSON.stringify(studentJson));

            }
            else {
                console.log("you have already given attendance");
            }
        }
    });


    // console.log(JSON.stringify(studentJson));
}




// function showAttendance(userName) {
//     for (let i = 0; i < studentJson.student.length; i++) {
//         //console.log(studentJson.student[i].attendance)
//         if (userName == studentJson.student[i].name) {
//             console.log(studentJson.student[i].attendance);
//         }

//     }
// }


let userName = "one";
let userDate = "03/01/2090";
let isPresent = true;
//let unmark = false;
markAttendance(userName, isPresent, userDate);
// showAttendance(userName)