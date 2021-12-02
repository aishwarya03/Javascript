
function printRepeatedNumbers(a, k){
    let newRepeat = [];
   for (let i = 0; i < a.length; i++) {
       let count = 0
       for (let j = 1; j < a.length; j++) {
           console.log(a[j])
           if(a[i] == a[j]){
               count = count+1;
           }
       }
       if(count >= k){
            newRepeat.push(a[i]);
       }
   }
//    return newRepeat;

//    const newArray = newRepeat.filter((value) => {
//     newRepeat.indexOf(value) === newRepeat.lastIndexOf(value);
//     return newArray;
//    });

const newArray = newRepeat.filter(printRepeat)
   return newArray;

   
function printRepeat(value,index) {
    console.log("line:27", value, index)
    if(newRepeat.indexOf(value) == index){
        console.log("line:28", value, index)
    return value
}
}
}



let a = [4, 5, 2, 5, 4, 3, 1, 3, 4];
let k =2;

console.log(printRepeatedNumbers(a,k));