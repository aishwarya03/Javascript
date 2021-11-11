let webbJson = require("./webapp.json");

webbJson.webApp.servlet.forEach(element => { 
    if(!element.initparam)
    {
        element["initparam"] = {};
    }
    //element.initparam = {"placee" : " greenland"} it will delete key value pairs, the whole object (initparam) and create new memebers(placee)
    element.initparam ["servletname"] = element.servletname;
    console.log(element.servletname);
});

// .operator can only be use for object 
// . operator cannot be used for array 
// serlet is a array
// map can be used only on array data type 
webbJson.webApp.servlet.map(remov => delete remov.initparam);

console.log(JSON.stringify(webbJson))
//console.log(JSON.stringify(webbJson));