let age = [23,12,45,61,11,2]

const getNum = age.find(function(element){
    if(element >19) {
        return element;
    }
})

console.log(getNum)

let sum = [0, 1, 2, 3]

let summ = sum.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
  // sum is 6
  console.log(summ)


  let summm = [13,14,45,67]

function getTotal(total,element){

return total+element;
}

console.log(summm .reduce(getTotal));


const getTotall = summm.reduce(((total,item) => total+item ), 0)
console.log(getTotall)

const getTotal1 = summm.reduce(function(total,item) {
    return total+item 
    }, 0);
    console.log(getTotal1)

    
const array1 = ['a' , 'b', 'c' ];
const array2 = [1,2,3,4,5,6,7,8,9];
const array3 = array1.concat(array2)

console.log(array3)

const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true

const arr = [1,2,3,4,5,6,7,8]

arr.forEach(element => { 
    if(element > 2){
        console.log(element)
    }
    
});

const isBelowThreshold = (currentValue) => currentValue < 40;

const array111 = [1, 30, 39, 29, 10, 13];

console.log(array111.every(isBelowThreshold));
// expected output: true