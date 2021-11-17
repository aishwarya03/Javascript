let userJSON = [
    { "id": 1, "email": "abc@gmail.com", "password": "abc" },
    { "id": 2, "email": "def@gmail.com", "password": "def" },
    { "id": 3, "email": "ghi@gmail.com", "password": "ghi" },
    { "id": 4, "email": "jkl@gmail.com", "password": "jkl" }]

let userProfileJSON = [
    { "id": 1, "mobile": "908642721", "dob": "01-09-1996" },
    { "id": 2, "mobile": "908642722", "dob": "02-09-1996" },
    { "id": 3, "mobile": "908642723", "dob": "03-09-1996" },
    { "id": 4, "mobile": "908642724", "dob": "04-09-1996" }]


let email = 'def@gmail.com'
let password = 'def'
let isUserExist = false
userJSON.forEach(user => {
    if (user.email == email) {
        if (user.password == password) {
            let profile = userProfileJSON.filter(profile => profile.id == user.id)
            if (profile.length > 0) {
                console.log(profile[0])
            }
        } else {
            console.log("Invalid password")
        }
        isUserExist = true
    }
});

if (!isUserExist) {
    console.log("User Doesnt Exist")
}