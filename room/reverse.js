function reverseArray(arr , k) {

     arr.splice(0,k-1)
    console.log(arr)
    arr.reverse()
  return arr
}

let arr = [1,2,3,4,5,6,7,8,9]
let k = 6;
console.log(reverseArray(arr,k))