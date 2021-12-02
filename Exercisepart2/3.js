
//Print the length of the property
let student = {
    name: "danwai",
    lastname: "banyan",
    studentId: "2021004",
    printStudentInfo: function () {
        return `${name},${lastname},${studentId}`
    }
}
console.log(Object.keys(student).length)

// using for in loop s
console.log(findLenghtofObject(student))

function findLenghtofObject(student) {
    let size = 0
    for (const key in student) {
        if (student.hasOwnProperty(key)) {
            size += 1;

        }
    }
    return size;
}