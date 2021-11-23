let obj1 = {
    a : 1,
    b : 2,
    c : 3
};

let obj2 = {
    x : 9,
    y : 8,
    z : 7
};

const obj3 = Object.assign({c: 4, d: 5}, obj1);
const obj4 = Object.assign({f : 2, k : 90, h : 12}, obj2);
const obj5 = Object.assign(obj1,obj2);
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj3.d, obj5.b,obj4.h)