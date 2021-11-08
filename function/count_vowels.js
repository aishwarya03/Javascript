function countvowels(str){
    var str1 = str.toLowerCase();
    var arr = str1.split ("");
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=="a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u" ){
            count=count+1;
        }
    }
    return count;
}
var str = "how are you";
console.log(countvowels(str));
