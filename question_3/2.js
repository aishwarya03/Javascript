//passing the numbers
// each iteration of the firat loop
// check by adding with the restof the numbersof the array and
// compare each sum with the k and truen true if found


function addUptoK(arrayNumbers, k) {
    let sum;
    for (let i = 0; i < arrayNumbers.length; i++) {
        for (let j = 0; j < arrayNumbers.length; j++) {
            if (i != j) {
                sum = arrayNumbers[i] + arrayNumbers[j];
            }
            if (sum == k) {
                return true;
            }

        }
    }
    return false;
}


let arrayNumbers = [11, 10, 15, 3];
let k = 17;
// addUptoK(arrayNumbers, k)
console.log(addUptoK(arrayNumbers, k))