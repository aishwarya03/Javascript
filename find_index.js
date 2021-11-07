

function findIndex( a , valuee){

    // return a.indexOf (valuee)

    // return a.includes (valuee)


    for (let i = 0; i < a.length; i++) {
        console.log(a[i], valuee);
        if (a[i] === valuee)
        return i;   
    }
    
    return "no value found ";

}

var arr = [ "war" , "fight" , "key" , "dance" , "boombox" , 2110 , "2110"];

console.log ( findIndex(arr, '2110'));