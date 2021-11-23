class Person {
    constructor(id, firstname, lastname, level) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.level = level;
    }
    static masterData() {
        let gradeArray = [
            {
                grade: "O",
                start: 90,
                end: 100
            },
            {
                grade: "E",
                start: 80,
                end: 90
            },
            {
                grade: "A",
                start: 70,
                end: 80
            },
            {
                grade: "P",
                start: 55,
                end: 69
            },
            {
                grade: "D",
                start: 40,
                end: 55
            },
            {
                grade: "T",
                start: 0,
                end: 40
            },
        ]
        return gradeArray;
    }
}
class MasterClass extends Person{
    constructor(id,firstname,lastname,level,rank){
        super(id, firstname, lastname, level)
        this.rank = rank;
    }
}

class Student extends MasterClass {
    constructor(id, firstname, lastname, level, rank) {
        super(id, firstname, lastname, level, rank)
        // this.scores = scores;
    }
    calculate(scores) {
        console.log(this.rank)
        const totalScore = scores.reduce((total, s) => (total + s), 0);
        let avg = totalScore / scores.length;
        console.log(avg)
        let gradeArray = Person.masterData()
        const gradeObject = gradeArray.find(item => (avg >= item.start && avg <= item.end))
        return gradeObject.grade;
        //console.log(gradeObject);

        // const gradeObject = gradeArray.find(item => {
        //     if (avg >= item.start && avg <= item.end) {
        //         return true;
        //     }
        // })
        //console.log("line : 62", gradeObject["grade"])
        //console.log("line: 63", gradeObject.grade)



    }
}

// const person = new Person(1, "yowoer", "fanderlos", "seventh");
const student = new Student(1, "anna", "fanderlos", "seventh", "w1")

// console.log(person)
console.log(student)
let scores = [60, 80, 90, 50, 70]
console.log(student.calculate(scores))



        // switch (true) {
        //     case (avg >= 90 && avg <= 100):

        //         console.log("grade o")

        //         break;
        //     case (avg >= 80 && avg < 90):

        //         console.log("grade e")

        //         break;
        //     case (avg >= 70 && avg < 80):

        //         console.log("grade a")

        //         break;
        //     case (avg >= 55 && avg < 70):

        //         console.log("grade p")

        //         break;
        //     case (avg >= 40 && avg < 55):

        //         console.log("grade d")

        //         break;
        //     case (avg < 40):

        //         console.log("grade t")

        //         break;

        //     default:
        //         console.log("there is no average for you!1 go study!!")
        //         break;
        // }