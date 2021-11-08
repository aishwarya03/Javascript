function mat(n){
var i,j;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i == j){
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    }
    console.log("------------")
}
}
mat(5);