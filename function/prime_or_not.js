function primeornot(num){
 var flag = true;
 var n = num;
 if(n>1){

     for (let i = 2; i < n ; i++) {
         console.log(i)
     if(n%i == 0){
         flag = false;
     } 
 }
}
 if(flag == true){
     return true;
 }
 else{
     return false;
 }
}


var num = 78;
console.log(primeornot(num));