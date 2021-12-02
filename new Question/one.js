function details() {
    let name = "hkjs"
    let age = 8797;
  let  myobj = {};
  myobj.name1 = name;
  myobj["age2"] = age;
  let obj2 = {
      name2 : name,
      age2  : age
  }
  console.log(myobj.age2)
  let str = "mtr";
//   return "mtr"
  return  {name2 : name, age2 : age}
 return obj2
}
console.log(details())