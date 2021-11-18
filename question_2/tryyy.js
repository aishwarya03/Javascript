if(mark == true ){
    studentJson.student.forEach(element => {
        if(element.name == userName){
            element.attendance[userDate] = true;
        }
    });
    }
    if(mark == false)
    {
        studentJson.student.forEach(element => {
            if(element.name == userName){
                element.attendance["07/01/2100"] = false;
            }
         });
    }