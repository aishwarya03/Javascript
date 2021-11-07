var str = " battonic "

// first method 
console.log(str.split("") . join(" "));

// second method 
let sp1 = "";
for (let i = 0; i < str.length; i++) {
    sp1 = sp1 + str[i] + " ";
    
}
console.log(sp1);