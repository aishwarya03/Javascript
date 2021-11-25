
function printRepeatedNumbers(a, k){
    let newRepeat = [];
   for (let i = 0; i < a.length; i++) {
       let count = 0
           if(a[i] == a[i+1]){
               count = count + 1;
           }
       
       if(count >= k){
            newRepeat.push(a[i]);
       }
   }
   console.log(newRepeat);

//    const newArray = newRepeat.filter((value,a) => {
//     newRepeat.indexOf(value) === newRepeat.lastIndexOf(value);
//    });
//    return newArray;

}




let a = [4, 5, 2, 5, 4, 3, 1, 3, 4];
let k =2;

console.log(printRepeatedNumbers(a,k));

