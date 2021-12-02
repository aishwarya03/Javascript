let students = [
    { "name": "Aneesa", "mark": 50 },
    { "name": "Rey", "mark": 15 }
]
class Admin {
    constructor(cash) {
        this.reward_cash = cash;
    }

    static reward_cash = 50;
    
}

class Teacher extends Admin {
    rewardByMark() {

        students.forEach(item => {
            item["rewardedCash"] = item.mark * Admin.reward_cash;
        });
        return students
    }
}



let teacherObj = new Teacher()

console.log(teacherObj.rewardByMark())