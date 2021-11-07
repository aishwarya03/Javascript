let str = "hello" ; 
let atr = "hello1" ;
console.log(str.toLowerCase()==atr.toLowerCase());
var flag = true;
// var v = str.length >= atr.length ? str.length : atr.length;
if (str.length == atr.length){
for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() != atr[i].toLowerCase()){
        flag= false;
        break;
    }
}
console.log (flag ? true : false);
if (flag)
{
    console.log("true")
}
else{
    console.log("false");
}
}
else{
    console.log("false")
}