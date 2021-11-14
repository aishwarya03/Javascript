// let myobj = {
//     nname : "what",
//     roll_no :"311513205001",
//     education :"B.tech IT"
// };

// const keyss = Object.keys(myobj);
// console.log(keyss[1]);


let x,y;
// const person = {fname:"John", lname:"Doe", age:25}; 
// let txt = [];
// for (x in person) {
// txt.push(person[x]);


// }
// console.log(txt)

// let arr = [1,2,3,4,5];
// arr.push(6)
// console.log(arr);

// let arr1 = ["a", "fsdfd"];
// console.log(arr1.toString());

// console.log(arr1.join(""))

// let str = "kjslkfdj";
// console.log(str.split(""));

// let arr11 = [1,"2"];

// console.log(arr1.concat(arr11));

// const hege = ["Cecilie", "Lone"];
// const stale = ["Emil", "Tobias", "Linus"];

// const children = hege.concat(stale);
// console.log(hege,stale,children)

let arr = [32, 3,55,5,66,77,8,1];

const target = arr.filter(num => num >5);
console.log(target);

arr.forEach((element,index) => {
 if(element == 66){
     console.log(index)
 }
});

const err = arr.findIndex(numm => numm == 66);
console.log(err);

const err1 = arr.includes(77);
console.log(err1);

console.log(Array.isArray(arr));

console.log(typeof(arr));

let wrr = ["hello", "what", "hello"]
console.log(wrr.lastIndexOf("hello"));

console.log(wrr.indexOf("hello"));

let drr = [1,2,3,4,6,7,8,9,10];

const mapp = drr.map(result => Math.pow(result,2));
console.log(mapp);

let len = drr.length
console.log(drr[len-1]);

console.log(drr.pop());

let n = 4;
let trr = [];
for (let i = 0; i < drr.length; i++) {
    if(i == n){
        trr.push(5)
    }
    trr.push(drr[i]);

}
console.log(drr);

drr.splice(4,0,5);

drr.splice(9,0,10)

console.log(drr);

frr= [];
const ageSummm = frr.reduce((total,age) => total+age , 5);

console.log(ageSummm);

let str = " gchfhfhjgkjgku";

console.log(str.toUpperCase());

let wtr = "heloo world";

let arrr = wtr.split(" ");
console.log(arrr);

const ma = arrr.map(vtr =>{
  
    const first =   vtr[0].toUpperCase()
    const etr = vtr.substring(1)
   return first+etr
});


console.log(ma.join(" "));

