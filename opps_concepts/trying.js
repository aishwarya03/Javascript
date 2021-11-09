// num++ is out of scope in primitive type 
function increase (num){
    num++;
}
let num= 10;
increase(num);
console.log(num);