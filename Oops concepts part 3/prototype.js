function User (name,email){
    this.name = name;
    this.email = email;
    this.online = false;
}
// prototype is the property of function user
// every object type has a prototype 
// objects coming from the same constructor points to one comon prototype object.
// user one and user two will have access to the methods 
// apart from low memeory usage the prototype is faster in execution when
//  creating new objectss instances snce no time is spent on redeclaring any method

User.prototype. userLogin = function(){
  this.online = true;
  return `${this.email} is logged in`
}
User.prototype.userLogout = function(){
    this.online= false;
    return `${this.name} is logged out`
}

let userOne = new User("mai","mai@email.com")
let userTwo = new User ("tei","tei@email.com")

console.log(userOne.userLogin())

console.log(userTwo.userLogout())