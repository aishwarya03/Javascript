let purchaseJson = require('./flatmap.json')

function findTotalOfProtuctTwo(){
    // return purchaseJson.purchases;
    return purchaseJson.type.flatMap(element => 
        element.purchases.filter(ele => {
            if(ele.product == "Product 1"){
            return true
            }
        }).map(elem => elem.total)
        )
   
   
        console.log(purchaseJson.type.timestamp)

    // return purchaseJson.map(ele => ele.purchases)
    // let totalArray = 
    // return purchaseJson.flatMap(
    //     (element)=> { 
        
    // })
    
}

console.log(findTotalOfProtuctTwo())
// let arr = [
//     [
//       { product: 'Product 1', total: 20, time: '09:00' },
//       { product: 'Product 1', total: 60, time: '12:00' }
//     ],
//     [
//       { product: 'Product 1', total: 40, time: '10:00' },
//       { product: 'Product 2', total: 30, time: '11:00' }
//     ],
//     [
//       { product: 'Product 1', total: 10, time: '14:00' },
//       { product: 'Product 2', total: 20, time: '17:00' }
//     ]
// ]
// arr.forEach(element => {
//     element.forEach(element2 => console.log(element2.total))
    
// });


// let arr1 = [
//     { product: 'Product 1', total: 20, time: '09:00' },
//     { product: 'Product 1', total: 60, time: '12:00' },
//     { product: 'Product 1', total: 40, time: '10:00' },
//     { product: 'Product 2', total: 30, time: '11:00' },
//     { product: 'Product 1', total: 10, time: '14:00' },
//     { product: 'Product 2', total: 20, time: '17:00' }
//   ]

//   arr1.forEach(element => { 
//       console.log(element.total)
      
//   });