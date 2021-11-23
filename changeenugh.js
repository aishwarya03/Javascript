

function changeEnough(change, totalDue) {
    let conversion = [0.25, 0.1, 0.05, 0.01]
    let sum = 0;
    console.log(sum)
    for (let i = 0; i < change.length; i++) {

        sum += change[i] * conversion[i];
    }
    console.log(sum);
    if (sum >= totalDue) {
        return true
    }
    else {
        return false
    }

}





let totalDue = 4.25;
let change = [25, 20, 5, 0];
console.log(changeEnough(change, totalDue))





// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01