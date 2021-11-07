function modifyLast (str, n) {

   // return str + str.slice(-1).repeat(n - 1)
    
   let last = str.split("").pop();
    let sp = "" ;

for (let i = 0; i < n ; i++) {
     sp = sp + last;
    
}
    console.log (str.concat (sp));

}

modifyLast("hello" , 6);