let billJSON = require("./cart.json")

let item = "tv";
let value = 23000;
let qunatity =  1;
let warrenty = "2 years"

addCart(item,value,qunatity,warrenty);
function addCart (item,value,qunatity,warrenty){
    if(item == "tv" || item == "mixer" || item == "grinder" || item == "fridge"){
    billJSON.cart.push({"item" : item, "value": value, "qunatity": qunatity, "warrenty": warrenty});
    }
    console.log(billJSON.cart)
}
function findTotalBillAmount(){
// const finalTotal = billJSON.cart.reduce(((total,element)=> total+element.value),0);
// return finalTotal;
return billJSON.cart.reduce(((total,element)=> total+((element.value) * (element.qunatity))),0);
}

console.log(findTotalBillAmount())