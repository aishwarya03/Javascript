let userJson = require("./users.json");

let emailId = "air@gmail.com";
let userPassword = "wordpass1";
let  v = userJson.authentication.length+1;
let flag = false;
for (let i = 0; i < userJson.authentication.length; i++) 
{
if (userJson.authentication[i].email == emailId) 
{  v = i;
    
     flag = true;
    }
    

}
if (flag == false){
    console.log("enter correct email")
}
// console.log(v);
if(v<=userJson.authentication.length){
if (userJson.authentication[v].password == userPassword){
    flag = true
}
else {
  console.log("enter correct password")
}
}
// if (flag == false){
//     console.log("enter correct email")
// }
// console.log(v)



// if (userJson.authentication[i].password == userPassword) 
// {
//     flag= false;
// }



// if (flag == false) 
// {
// console.log("password is wrong")
// }
// else
// {
// console.log("email is wrong")
// }