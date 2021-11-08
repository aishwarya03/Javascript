function combination(str){
let str1 = str.split("");
let arr = [];
console.log(str1);
for (let i = 0; i < str1.length; i++) {
    console.log(str[i]);
    for (let j = 1; j < str1.length; j++) {
        console.log(str1[i],str1[j]);
        
    }
    
}
}

x = "dogies";
combination(x);