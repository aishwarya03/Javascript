let userJson = require("./users.json");
//console.log(userJson);
let isUserExists = false;

function loginAuthentication(emailId, userPassword) {

    for (let i = 0; i < userJson.authentication.length; i++) {
        if (emailId == userJson.authentication[i].email && userPassword == userJson.authentication[i].password)
         {
            for (let j = 0; j < userJson.display.profile.length; j++) {
                if (userJson.authentication[i].userID == userJson.display.profile[j].userID)
                    console.log(userJson.display.profile[j])
            }   
            isUserExists = true; 
        }
      
    }
    // if(isUserExists == false){
    
    //  console.log("please enter correct email and pasword")
    
    // }
}


let emailId = "earth@gmail.com";
let userPassword = "wordpass2";

loginAuthentication(emailId, userPassword);




