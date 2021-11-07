let arr = [ "hello" , "world" , 1, 4 , "tree"];
let sp = [];
//arr.forEach(element => {
    //console.log(element);
    //if(typeof(element) == "number"){
     //  sp.push(element);
        
   // }
//});

//sp = arr.filter(e => Number.isInteger(e))
sp = arr.filter(e => typeof(e) == "number")

console.log(sp);