let billJSON = require("./cart.json")


function addCart (){
    let newCart = billJSON.cart.flatMap(
        (item1) => {
            if (item1.item.toUpperCase() === 'TV') {
                return [item1, {
                    name: 'Warranty',
                    qty: item1.qunatity,
                    price: 0,
                }]
            } else {
                return [item1];
            }
        }
    );
    return newCart;
}
function findTotalBillAmount(){
return billJSON.cart.reduce(((total,element)=> total+((element.value) * (element.qunatity))),0);
}

console.log(addCart());
console.log(findTotalBillAmount())