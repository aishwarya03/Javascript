// let studentJSON = require("./students.json");

// function studentName(requirednames){

//     //     foundName = [];
//     // studentJSON.students.forEach(element => {
//     //     if((element.firstname).toLowerCase() == requirednames){
//     //         foundName.push(element)
//     //     }
        
//     // });
       
//         return studentJSON.students.filter(x=>x.firstname.toLowerCase()===requirednames);
//         return foundName;
//         }

// let requirednames = "john";
// console.log(studentName(requirednames))





     // console.log(element.firstname, element.lastname);
        //    studentJSON.details.forEach(element1 => {
        //        if(element1.lastname == element.lastname){
        //            foundName.push(element1);
        //        }
               
        //    });
        // }
        
        // let multiply = 3;
        // console.log(multiplier(multiply))

        // function multiplier(multiply){
        //    let arrayMulplier = [1,2,3,4,5,6,7,8,9,10];
        //     return arrayMulplier.map(element => element*multiply)
        //     // return tables;
        // }


        let numberArray = [1,2,3,4,5,6,7,8,9,10];
        for (let i = 0; i < numberArray.length; i++) {
            if(numberArray[i] != 5 && numberArray[i] != 8){
           
            continue;
        }
        console.log(numberArray[i])
    }

        // numberArray.forEach(element => { 
        //     if(element != 5 && element != 8){
        //         console.log(element)
        //     }
            
        // });