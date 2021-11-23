
function printRepeatedNumbers(a, k){
    let newRepeat = [];
   for (let i = 0; i < a.length; i++) {
       let count = 0
       for (let j = 1; j < a.length; j++) {
           if(a[i] == a[j]){
               count = count+1;
           }
        //    continue;
           
       }
       if(count >= k){
            newRepeat.push(a[i]);
       }
   }

   const newArray = newRepeat.filter((value) => {
       return newRepeat.indexOf(value) === newRepeat.lastIndexOf(value);
   });

}




let a = [4, 5, 2, 5, 4, 3, 1, 3, 4];
let k =2;

console.log(printRepeatedNumbers(a,k));

