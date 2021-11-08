function palindrome(s){
    //let arr = [];
    let arr = s.split("");
    var l = arr.length
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[l-1]);
        l--;
    }
    console.log(arr);
    console.log(arr2);
    var x = arr.length + arr2.length;
    var flag = true
    for (let i = 0; i < x; i++) {
        if( arr[i] != arr2[i])
        {
            flag = false;
        }
        
    }
    if (flag == true){
        console.log("yes palin");
    }
    else{
        console.log("not palin");
    }

}

s = "tabat"
//console.log(s.length);
palindrome(s)