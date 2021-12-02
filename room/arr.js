let arr = [1,2]
let str = "abs"
 
Array.prototype.multipleByTwo = function() {
   return this.map(val => val * 2)
}
 
String.prototype.concatData = function() {
   return this.concat("hhh")
}
 
console.log(str.concatData())
console.log(arr.multipleByTwo())
 