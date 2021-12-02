// filter
//find
//includes


function find_the_element(arrr){

    for (let i = 0; i < arrr.length; i++) {
        if(arrr[i] > 20){
        console.log(arrr[i])
        } 
    }
}


let arrr = [1,2,24,4,45];
const arr2 = arrr.filter(elem => elem>20)
console.log(arr2,"this is simple")

find_the_element(arrr);

arr = ["we","oppo","loop","toor"]
const err = arr.find(elemm => elemm == "loop")
console.log(err,"this is also simple")
function fin (arr){

for (let i = 0; i < arr.length; i++) {
    console.log(i)
    if(arr[i] = "loop")
    console.log(arr[i]);
    break;
}
}

fin(arr);

console.log(arr.includes("loop"));
