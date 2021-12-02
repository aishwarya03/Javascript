
function FindAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter(function(property){

        return typeof obj[property] == "function";
    })
}

function FindAllProperty (obj){
    return Object.getOwnPropertyNames(obj);
}

console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array))
console.log(FindAllProperty(Array))