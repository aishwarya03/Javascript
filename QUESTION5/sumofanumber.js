function sumOfNumber (num){
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = i+sum;
        
    }
    return sum;
}

let num = 4;
console.log(sumOfNumber(num));