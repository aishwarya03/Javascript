let userJson = require("./users.json");
//console.log(userJson);
let isUserExists = false;

function loginAuthentication(emailId, userPassword) {

    for (let i = 0; i < userJson.authentication.length; i++) {
        if (emailId == userJson.authentication[i].email && userPassword == userJson.authentication[i].password) {
            for (let j = 0; j < userJson.display.profile.length; j++) {
                if (userJson.authentication[i].userID == userJson.display.profile[j].userID)
                    console.log(userJson.display.profile[j])
            }
            isUserExists = true;
        }

    }
    let v = userJson.authentication.length + 1;
    let flag = false;
    for (let i = 0; i < userJson.authentication.length; i++) {
        if (userJson.authentication[i].email == emailId) {
            v = i;

            flag = true;
        }


    }
    if (flag == false) {
        console.log("enter correct email")
    }
    
    if (flag) {

        if (userJson.authentication[v].password == userPassword) {
            flag = true
        }
        else {
            console.log("enter correct password")
        }
    }
}


let emailId = "earth@gmail.com";
let userPassword = "wordpass2";

loginAuthentication(emailId, userPassword);




