function Users(name,email){
    this.name = name;
    this.email = email;
    this.online = false;
}

Users.prototype.login = function(){
    this.online = true;
    console.log(`${this.email} is logged in`)
}

Users.prototype.logout = function(){
    this.online = false;
    console.log(`${this.email} is logged out`)
}
// function Admin(...args)
function Admin (name,email){
//    Users.apply(this, args)
Users.call(this,name,email)
   this.role = "super admin";
}

Admin.prototype = Object.create(Users.prototype);

Admin.prototype.deleteUsers = function(u){
    remainUsers = usersArray.filter(user=>{
        return user.email != u.email
        
    })
   console.log(remainUsers);
}


let userOne = new Users("han solo", "han@email.com");

let userTwo = new Users("luke sky", "luke@email.com");

let admin = new Admin ("Floe ossif", "floe@email.com");
let usersArray = [userOne,userTwo,admin];

admin.deleteUsers("han@email.com")

// console.log(admin)

// console.log(remainUsers)