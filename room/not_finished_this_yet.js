const roomsJson = require("./array.json")

// findRoom()

function findRoom(sArray,eArray){
    
    let count = 0;
    let arr = [];
    sArray.forEach(element => {
        element.forEach(elem => {
            if(element < elem){
                arr.push[elem]
            }
        })
        
    });
    console.log(arr)


}



    // for (let i = 0; i < roomsJson.array1.length; i++) {
    //     console.log(roomsJson.array1[i])
    //     for (let index = 1; index < roomsJson.array1.length; index++) {
    //         if(roomsJson.array1[i].start < roomsJson.array1[index].start){
    //             arr.push(roomsJson.array1[i])
    //         }
    //         else{
    //             arr.push(roomsJson.array1[i+1])
    //         }
            
    //     }
       
    // }

// function findRoom (startInterval,endInterval){

                

// }


let startInterval = [30, 0, 60];

let endInterval = [75, 50, 150];
findRoom(startInterval, endInterval)


