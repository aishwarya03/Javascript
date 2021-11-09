function fineLetter(str){
    let arr = str.split("");
    let result = "";
    let lag = 0;
    for (let i = 0; i < arr.length; i++) {
        lag = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                lag+=1;
            }    
        }
        if(lag < 2){
            result = arr[i];
            break;
        }
        
    }
    return result;

}

console.log(fineLetter("aarrrrifffffyyyyoppppppolnnnn"))