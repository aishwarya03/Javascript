class Student {
    basicInfo(name, rollNo) {
        this.name = name
        this.rollNo = rollNo
        return this.rollNo
    }
    static rewardStatic = "50"
    static staticFn() {
        return this.rollNo
    }
}
Student.prototype.reward = "60"
Student.prototype.prototypeFn = function () {
   return this.name
}
 
let student1 = new Student()
let student2 = new Student()
 
student1.name = "abc"
student2.name = "xyz"
 
console.log(student1.reward, "149")
console.log(Student.rewardStatic, "150")
 
student1.reward = "90"
student2.reward = "20"
 
console.log(student1.reward, "student1.reward")
console.log(Student.prototype.reward, "student2.reward")
 
Student.rewardStatic = "90"
 
console.log(Student.rewardStatic,"dasde")
console.log(Student.staticFn())