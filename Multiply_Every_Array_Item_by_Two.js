function mul(arr) {

        // map()
        //let map1 = arr.map(x => x*2);
        //return map1;
   
        for (let i = 0; i <= arr.length-1; i++) {
         arr[i] = arr[i] * 2;
        
    }
    return arr;
}

var z = [1 , 2, 3, 4 ,5]
console.log (mul(z))

//using for each 

function cube(arr){
    arr.forEach(element => {
        console.log(element *3);
    });
}

cube(z);